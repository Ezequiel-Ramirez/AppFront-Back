import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductList } from '../pages';
// import { ProductPage } from '../pages/ProductPage';
import { ProductsLayout } from '../layout/ProductsLayout';

export const ProductsRoutes = () => {
    return (
        <ProductsLayout>
            <Routes>
                <Route path="/" element={<ProductList />} />
                {/* <Route path="/:id" element={<ProductPage />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ProductsLayout>
    );
}; 