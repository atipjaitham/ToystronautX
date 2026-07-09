import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private mapProduct;
    getProducts(query?: {
        category?: string;
        search?: string;
    }): Promise<{
        products: any;
    }>;
    getFeaturedProducts(): Promise<{
        products: any;
    }>;
    getCategories(): Promise<{
        categories: any;
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
