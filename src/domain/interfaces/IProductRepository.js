/**
 * Interface for Product Repository
 * @interface
 */
export class IProductRepository {
    /**
     * Get all products
     * @returns {Promise<Product[]>}
     */
    async getAll() {
        throw new Error('Method not implemented');
    }

    /**
     * Get product by id
     * @param {number} id
     * @returns {Promise<Product>}
     */
    async getById(id) {
        throw new Error('Method not implemented');
    }
}
