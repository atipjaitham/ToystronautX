export interface ProductDto {
    id: string;
    name: string;
    slug: string;
    price: number;
    compareAtPrice: number;
    description: string;
    categoryName: string;
    categorySlug: string;
    imageUrl: string;
    featured: boolean;
    rating: number;
    reviewCount: number;
    stock: number;
}
export declare const mockCategories: {
    name: string;
    slug: string;
    description: string;
}[];
export declare const mockProducts: ProductDto[];
