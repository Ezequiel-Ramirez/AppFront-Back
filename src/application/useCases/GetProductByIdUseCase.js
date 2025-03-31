export class GetProductByIdUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id) {
        if (!id) throw new Error('Product ID is required');
        const product = await this.productRepository.getById(id);
        
        if (!product.isValidPrice()) {
            throw new Error('Invalid product price');
        }

        if (!product.hasValidImages()) {
            throw new Error('Product must have at least one valid image');
        }

        return product;
    }
}
