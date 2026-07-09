import { ProductsService } from './products.service';

describe('ProductsService', () => {
    it('maps the first product image into the response payload', async () => {
        const prisma = {
            product: {
                findMany: jest.fn().mockResolvedValue([
                    {
                        id: 'product-1',
                        name: 'Test Product',
                        slug: 'test-product',
                        price: 100,
                        description: 'A product description',
                        featured: true,
                        category: {
                            id: 'category-1',
                            name: 'Test Category',
                            slug: 'test-category',
                            description: null,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        images: [
                            { imageUrl: 'https://example.com/first.jpg', altText: 'First image' },
                            { imageUrl: 'https://example.com/second.jpg', altText: 'Second image' },
                        ],
                    },
                ]),
            },
        };

        const service = new ProductsService(prisma as any);

        const result = await service.getProducts();

        expect(result.products[0]).toMatchObject({
            id: 'product-1',
            image: 'https://example.com/first.jpg',
            categoryName: 'Test Category',
            categorySlug: 'test-category',
        });
    });
});
