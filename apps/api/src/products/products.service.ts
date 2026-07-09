import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { mockCategories, mockProducts } from '../mock-data';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) { }

    private mapProduct(product: any) {
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

    async getProducts(query?: { category?: string; search?: string }) {
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
        } catch {
            const filteredProducts = mockProducts.filter((product) => {
                const matchesCategory = !normalizedCategory || product.categorySlug === normalizedCategory;
                const matchesSearch =
                    !normalizedSearch ||
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
        } catch {
            return { products: mockProducts.filter((product) => product.featured) };
        }
    }

    async getCategories() {
        try {
            const categories = await this.prisma.category.findMany();
            return { categories };
        } catch {
            return { categories: mockCategories };
        }
    }

    async getProductBySlug(slug: string) {
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
        } catch {
            const product = mockProducts.find((item) => item.slug === slug);

            if (!product) {
                return { message: 'Product not found' };
            }

            return { product };
        }
    }
}
