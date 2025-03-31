import { ProductRepository } from '../infrastructure/repositories/ProductRepository';
import { GetAllProductsUseCase } from '../application/useCases/GetAllProductsUseCase';
import { GetProductByIdUseCase } from '../application/useCases/GetProductByIdUseCase';

const productRepository = new ProductRepository();
const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);

export const productService = {
    async getProducts() {
        return await getAllProductsUseCase.execute();
    },

    async getProduct(id) {
        return await getProductByIdUseCase.execute(id);
    }
};
