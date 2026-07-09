import { PrismaClient, ProductStatus } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
    { name: 'UFO', slug: 'ufo', description: 'Unidentified aerial phenomena and signal studies.' },
    { name: 'Alien', slug: 'alien', description: 'Biological and synthetic extraterrestrial specimens.' },
    { name: 'Astronaut', slug: 'astronaut', description: 'Heroic frontier gear and expedition essentials.' },
    { name: 'Spacecraft', slug: 'spacecraft', description: 'Precision-built vessels and orbital technology.' },
    { name: 'Secret Project', slug: 'secret-project', description: 'Restricted prototypes and classified artifacts.' },
    { name: 'Mystery Artifact', slug: 'mystery-artifact', description: 'Recovered relics with unknown provenance.' },
];

const baseImages = [
    { imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', altText: 'A premium collectible display piece' },
    { imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80', altText: 'A futuristic object on a dark background' },
    { imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80', altText: 'A polished sci-fi product reveal' },
    { imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80', altText: 'A dramatic tech-themed display' },
    { imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80', altText: 'A detailed close-up of a futuristic collectible' },
];

function makeSku(index: number) {
    return `TSX-${String(index).padStart(3, '0')}`;
}

function makeProductSeed(index: number, categorySlug: string) {
    const title = `${categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())} ${index}`;
    return {
        name: title,
        slug: `${categorySlug}-${index}`,
        sku: makeSku(index),
        shortDescription: `A premium ${categorySlug.replace(/-/g, ' ')} collectible for modern collectors.`,
        description: `This limited-edition product brings together the tactile details of ${categorySlug.replace(/-/g, ' ')} design with a futuristic finish.`,
        price: 120 + index * 13,
        stock: 10 + (index % 7),
        status: ProductStatus.PUBLISHED,
        featured: index % 3 === 0,
        categorySlug,
    };
}

async function main() {
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const createdCategories = [] as Array<{ id: string; slug: string }>;
    for (const category of categories) {
        const created = await prisma.category.create({ data: category });
        createdCategories.push({ id: created.id, slug: created.slug });
    }

    for (let index = 1; index <= 50; index += 1) {
        const category = createdCategories[(index - 1) % createdCategories.length];
        const productSeed = makeProductSeed(index, category.slug);

        const product = await prisma.product.create({
            data: {
                name: productSeed.name,
                slug: productSeed.slug,
                sku: productSeed.sku,
                shortDescription: productSeed.shortDescription,
                description: productSeed.description,
                price: productSeed.price,
                stock: productSeed.stock,
                status: productSeed.status,
                featured: productSeed.featured,
                categoryId: category.id,
            },
        });

        const imageCount = 1 + (index % 5);
        for (let imageIndex = 0; imageIndex < imageCount; imageIndex += 1) {
            await prisma.productImage.create({
                data: {
                    productId: product.id,
                    imageUrl: baseImages[imageIndex % baseImages.length].imageUrl,
                    altText: `${product.name} view ${imageIndex + 1}`,
                    sortOrder: imageIndex,
                },
            });
        }
    }

    console.log('Seed complete: 6 categories, 50 products, and product images created.');
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
