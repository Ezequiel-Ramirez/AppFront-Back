export class GetAllProductsUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        const products = await this.productRepository.getAll();
        return products.filter(product => 
            product.isValidPrice() && 
            product.hasValidImages()
        );
    }
}
