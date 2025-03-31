# Clean Architecture Product Catalog

## 📋 Descripción General
Aplicación React que implementa Clean Architecture para gestionar un catálogo de productos con autenticación de usuarios.

## 🏗️ Arquitectura

### 1. Capa de Presentación (`/src`)
#### Componentes UI (`/src/ui/`)
```typescript
// Ejemplo de componente reutilizable
export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    // ...
}
```
- Componentes React reutilizables
- Manejo de estado local con hooks
- Integración con Context API

#### Módulos Principales
- `/auth`: Gestión de autenticación
- `/products`: Catálogo de productos
- `/router`: Configuración de rutas

### 2. Sistema de Autenticación (`/src/auth/`)
```javascript
// Ejemplo de flujo de autenticación
const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);
    // ...
}
```

#### Características
- Gestión de estado con Context + Reducer
- Persistencia en localStorage
- Protección de rutas
- Redirección inteligente

### 3. Gestión de Productos (`/src/products/`)

#### Arquitectura en Capas
1. **Presentación**
   ```javascript
   // /pages/ProductList.jsx
   export const ProductList = () => {
       const [products, setProducts] = useState([]);
       // Manejo de estado y UI
   }
   ```

2. **Aplicación**
   ```javascript
   // /application/useCases/GetAllProductsUseCase.js
   export class GetAllProductsUseCase {
       execute() {
           // Lógica de negocio
       }
   }
   ```

3. **Dominio**
   ```javascript
   // /domain/entities/Product.js
   export class Product {
       constructor(id, title, price) {
           // Reglas de negocio
       }
   }
   ```

4. **Infraestructura**
   ```javascript
   // /infrastructure/api/apiClient.js
   export const apiClient = axios.create({
       baseURL: API_URL
   });
   ```

## 🚀 Configuración y Despliegue

### Requisitos Previos
- Node.js >= 14.0.0
- npm >= 6.0.0

### Instalación
```bash
# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Construir para producción
npm run build
```

### Variables de Entorno
```env
VITE_API_URL=https://api.example.com
VITE_AUTH_TOKEN_KEY=auth_token
```

## 🛣️ Sistema de Rutas

### Rutas Públicas
```javascript
<Route path="login" element={<PublicRoute><LoginPage /></PublicRoute>} />
```
- `/login`: Página de inicio de sesión
- Accesibles sin autenticación
- Redirigen a productos si el usuario está autenticado

### Rutas Privadas
```javascript
<Route path="/*" element={<PrivateRoute><ProductsRoutes /></PrivateRoute>} />
```
- `/products`: Listado de productos
- `/products/:id`: Detalle de producto
- Requieren autenticación
- Almacenan última ruta visitada

## 🔒 Seguridad

### Autenticación
```javascript
const login = (name = '') => {
    const user = { id: 'ABC', name };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: types.login, payload: user });
}
```
- Gestión de sesiones con Context
- Persistencia en localStorage
- Protección de rutas privadas

### Manejo de Estado
```javascript
const authReducer = (state, action) => {
    switch (action.type) {
        case types.login:
            return { logged: true, user: action.payload };
        // ...
    }
}
```

## 🎨 Estilos y UI

### Componentes Principales
- Navbar: Navegación principal y estado de autenticación
- ProductList: Visualización de productos
- LoginPage: Formulario de autenticación

### CSS Modules
```css
.login-container {
    display: flex;
    flex-direction: column;
    /* ... */
}
```

## 📡 Integración con API

### Cliente HTTP
```javascript
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
```

### Repositorios
```javascript
class ProductRepository {
    async getAll() {
        const response = await apiClient.get('/products');
        return response.data.map(product => new Product(/*...*/));
    }
}
```

## 🔄 Flujo de Datos

1. **Interacción de Usuario**
   - Usuario interactúa con componente UI
   - Se dispara acción (ej: cargar productos)

2. **Capa de Aplicación**
   - Caso de uso procesa la solicitud
   - Aplica reglas de negocio

3. **Acceso a Datos**
   - Repositorio comunica con API
   - Mapeo a entidades de dominio

4. **Actualización UI**
   - Estado se actualiza
   - UI se re-renderiza

## 🧪 Testing (TODO)

- Implementar pruebas unitarias con Jest
- Pruebas de integración con React Testing Library
- Pruebas E2E con Cypress

## 📈 Mejoras Futuras

1. **Rendimiento**
   - Implementar lazy loading
   - Optimizar imágenes
   - Cacheo de datos

2. **Funcionalidades**
   - Búsqueda de productos
   - Filtros avanzados
   - Gestión de carrito

3. **UX/UI**
   - Tema oscuro
   - Responsive design
   - Animaciones

## 👥 Contribución

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
