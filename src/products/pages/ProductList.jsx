import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../../services/productService';
import '../styles/ProductList.css';

export const ProductList = () => {
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

    if (loading) return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
        </div>
    );
    
    if (error) return (
        <div className="alert alert-danger">
            {error}
        </div>
    );

    return (
        <>
            <h1>Products Catalog</h1>
            <div className="products-grid">
                {products.map(product => (
                    <Link 
                        to={`/products/${product.id}`} 
                        key={product.id} 
                        className="product-card"
                    >
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
                    </Link>
                ))}
            </div>
        </>
    );
}; 