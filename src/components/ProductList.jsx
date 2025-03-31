import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await productService.getProducts();
            setProducts(data);
            setLoading(false);
        } catch (err) {
            setError('Error loading products');
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-list">
            <h2>Products</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        {product.mainImage && (
                            <img 
                                src={product.mainImage} 
                                alt={product.title}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = '/placeholder.png';
                                    e.target.onerror = null;
                                }}
                            />
                        )}
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="price">{product.getFormattedPrice()}</p>
                            <p className="description">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
