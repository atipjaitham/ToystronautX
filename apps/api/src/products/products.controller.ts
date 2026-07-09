import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts(@Query('category') category?: string, @Query('search') search?: string) {
        return this.productsService.getProducts({ category, search });
    }

    @Get('featured')
    getFeaturedProducts() {
        return this.productsService.getFeaturedProducts();
    }

    @Get('categories')
    getCategories() {
        return this.productsService.getCategories();
    }

    @Get(':slug')
    getProductBySlug(@Param('slug') slug: string) {
        return this.productsService.getProductBySlug(slug);
    }
}
