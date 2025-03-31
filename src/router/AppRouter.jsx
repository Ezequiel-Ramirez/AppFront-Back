import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { ProductsRoutes } from '../products/routes/ProductsRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            <Route path="/*" element={
                <PrivateRoute>
                    <ProductsRoutes />
                </PrivateRoute>
            } />
        </Routes>
    )
} 