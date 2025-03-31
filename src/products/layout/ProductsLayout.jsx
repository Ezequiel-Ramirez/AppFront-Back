import { Navbar } from '../../ui';

export const ProductsLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                { children }
            </div>
        </>
    );
}; 