import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private mapProduct;
    getProducts(query?: {
        category?: string;
        search?: string;
    }): Promise<{
        products: {
            id: any;
            name: any;
            slug: any;
            price: any;
            description: any;
            image: any;
            featured: any;
            categoryName: any;
            categorySlug: any;
        }[];
    } | {
        products: import("../mock-data").ProductDto[];
    }>;
    getFeaturedProducts(): Promise<{
        products: {
            id: any;
            name: any;
            slug: any;
            price: any;
            description: any;
            image: any;
            featured: any;
            categoryName: any;
            categorySlug: any;
        }[];
    } | {
        products: import("../mock-data").ProductDto[];
    }>;
    getCategories(): Promise<{
        categories: {
            id: string;
            name: string;
            slug: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } | {
        categories: {
            name: string;
            slug: string;
            description: string;
        }[];
    }>;
    getProductBySlug(slug: string): Promise<{
        message: string;
        product?: undefined;
    } | {
        product: {
            id: any;
            name: any;
            slug: any;
            price: any;
            description: any;
            image: any;
            featured: any;
            categoryName: any;
            categorySlug: any;
        };
        message?: undefined;
    } | {
        product: import("../mock-data").ProductDto;
        message?: undefined;
    }>;
}
