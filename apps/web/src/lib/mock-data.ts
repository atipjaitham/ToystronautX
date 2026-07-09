export type Product = {
    id: string;
    name: string;
    slug: string;
    price: number;
    compareAtPrice: number;
    description: string;
    image: string;
    featured: boolean;
    categoryName: string;
    categorySlug: string;
    rating: number;
    reviewCount: number;
    stock: number;
};

export type Category = {
    id: string;
    name: string;
    slug: string;
    description: string;
};

export const categories: Category[] = [
    { id: 'ufo', name: 'UFO', slug: 'ufo', description: 'Signals from above and stories that refuse to fade.' },
    { id: 'alien', name: 'Alien', slug: 'alien', description: 'Structured mystery with surgical precision and dark elegance.' },
    { id: 'astronaut', name: 'Astronaut', slug: 'astronaut', description: 'Heroic silhouettes, lunar endurance, and orbit-born detail.' },
    { id: 'spacecraft', name: 'Spacecraft', slug: 'spacecraft', description: 'Engineering-first artifacts from classified exploration programs.' },
    { id: 'secret-project', name: 'Secret Project', slug: 'secret-project', description: 'Restricted prototypes preserved for the curious collector.' },
    { id: 'mystery-artifact', name: 'Mystery Artifact', slug: 'mystery-artifact', description: 'Objects that feel older than the archive that contains them.' },
];

export const featuredProducts: Product[] = [
    {
        id: 'prod-001',
        name: 'Nebula Observer Figure',
        slug: 'nebula-observer-figure',
        price: 189,
        compareAtPrice: 249,
        description: 'A precision sculpted figure capturing the calm before contact.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
        featured: true,
        categoryName: 'Alien',
        categorySlug: 'alien',
        rating: 4.8,
        reviewCount: 183,
        stock: 14,
    },
    {
        id: 'prod-002',
        name: 'Lunar Signal Capsule',
        slug: 'lunar-signal-capsule',
        price: 148,
        compareAtPrice: 198,
        description: 'A handcrafted display capsule inspired by preserved evidence.',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80',
        featured: true,
        categoryName: 'Mystery Artifact',
        categorySlug: 'mystery-artifact',
        rating: 4.7,
        reviewCount: 94,
        stock: 9,
    },
    {
        id: 'prod-003',
        name: 'Astra Scout Drone',
        slug: 'astra-scout-drone',
        price: 312,
        compareAtPrice: 399,
        description: 'A premium collectible drone designed for silent orbital observation.',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
        featured: true,
        categoryName: 'Spacecraft',
        categorySlug: 'spacecraft',
        rating: 4.9,
        reviewCount: 121,
        stock: 7,
    },
];

export const allProducts: Product[] = [
    ...featuredProducts,
    {
        id: 'prod-004',
        name: 'Vanta EVA Suit',
        slug: 'vanta-eva-suit',
        price: 224,
        compareAtPrice: 289,
        description: 'An armored astronaut suit built for moonwalk simulations and display.',
        image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80',
        featured: false,
        categoryName: 'Astronaut',
        categorySlug: 'astronaut',
        rating: 4.6,
        reviewCount: 68,
        stock: 12,
    },
    {
        id: 'prod-005',
        name: 'Blackout Relay Module',
        slug: 'blackout-relay-module',
        price: 164,
        compareAtPrice: 219,
        description: 'A restricted hardware piece from a secret lunar project archive.',
        image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=900&q=80',
        featured: true,
        categoryName: 'Secret Project',
        categorySlug: 'secret-project',
        rating: 4.8,
        reviewCount: 111,
        stock: 19,
    },
    {
        id: 'prod-006',
        name: 'Grey Meridian Disc',
        slug: 'grey-meridian-disc',
        price: 276,
        compareAtPrice: 329,
        description: 'A polished disc rumored to be a recovered artifact from an unconfirmed sighting.',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=900&q=80',
        featured: false,
        categoryName: 'UFO',
        categorySlug: 'ufo',
        rating: 4.5,
        reviewCount: 79,
        stock: 8,
    },
];
