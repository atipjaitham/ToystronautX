"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const mock_data_1 = require("../mock-data");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapProduct(product) {
        const primaryImage = product.images?.[0]?.imageUrl ?? null;
        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            description: product.description,
            image: primaryImage,
            featured: product.featured,
            categoryName: product.category.name,
            categorySlug: product.category.slug,
        };
    }
    async getProducts(query) {
        const normalizedCategory = query?.category?.toLowerCase();
        const normalizedSearch = query?.search?.toLowerCase();
        try {
            const products = await this.prisma.product.findMany({
                where: {
                    ...(normalizedCategory ? { category: { slug: normalizedCategory } } : {}),
                    ...(normalizedSearch
                        ? {
                            OR: [
                                { name: { contains: normalizedSearch, mode: 'insensitive' } },
                                { description: { contains: normalizedSearch, mode: 'insensitive' } },
                                { category: { name: { contains: normalizedSearch, mode: 'insensitive' } } },
                            ],
                        }
                        : {}),
                },
                include: { category: true, images: { orderBy: { sortOrder: 'asc' }, take: 1 } },
            });
            return {
                products: products.map((product) => this.mapProduct(product)),
            };
        }
        catch {
            const filteredProducts = mock_data_1.mockProducts.filter((product) => {
                const matchesCategory = !normalizedCategory || product.categorySlug === normalizedCategory;
                const matchesSearch = !normalizedSearch ||
                    [product.name, product.description, product.categoryName]
                        .join(' ')
                        .toLowerCase()
                        .includes(normalizedSearch);
                return matchesCategory && matchesSearch;
            });
            return { products: filteredProducts };
        }
    }
    async getFeaturedProducts() {
        try {
            const products = await this.prisma.product.findMany({
                where: { featured: true },
                include: { category: true, images: { orderBy: { sortOrder: 'asc' }, take: 1 } },
            });
            return {
                products: products.map((product) => this.mapProduct(product)),
            };
        }
        catch {
            return { products: mock_data_1.mockProducts.filter((product) => product.featured) };
        }
    }
    async getCategories() {
        try {
            const categories = await this.prisma.category.findMany();
            return { categories };
        }
        catch {
            return { categories: mock_data_1.mockCategories };
        }
    }
    async getProductBySlug(slug) {
        try {
            const product = await this.prisma.product.findUnique({
                where: { slug },
                include: { category: true, images: { orderBy: { sortOrder: 'asc' }, take: 1 } },
            });
            if (!product) {
                return { message: 'Product not found' };
            }
            return {
                product: this.mapProduct(product),
            };
        }
        catch {
            const product = mock_data_1.mockProducts.find((item) => item.slug === slug);
            if (!product) {
                return { message: 'Product not found' };
            }
            return { product };
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map