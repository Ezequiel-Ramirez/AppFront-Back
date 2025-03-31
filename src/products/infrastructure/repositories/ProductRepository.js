import { apiClient } from '../api/apiClient';
import { Product } from '../../domain/entities/Product';
import { IProductRepository } from '../../domain/interfaces/IProductRepository';

export class ProductRepository extends IProductRepository {
    async getAll() {
        const response = await apiClient.get('/products');
        return response.data.map(product => 
            new Product(
                product.id, 
                product.title, 
                product.price, 
                product.description,
                product.images
            )
        );
    }

    async getById(id) {
        const response = await apiClient.get(`/products/${id}`);
        const product = response.data;
        return new Product(
            product.id, 
            product.title, 
            product.price, 
            product.description,
            product.images
        );
    }
}
