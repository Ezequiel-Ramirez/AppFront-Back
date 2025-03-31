# Clean Architecture Product Catalog

Una aplicación React que implementa Clean Architecture para mostrar un catálogo de productos.

## Arquitectura

La aplicación está estructurada en capas siguiendo los principios de Clean Architecture:

### 1. Capa de Presentación (`/src/components/`)
- Componentes React para la interfaz de usuario
- Manejo de estado local y efectos
- Solo se comunica con la capa de servicios
- Ejemplo: `ProductList.jsx` maneja la visualización y estados de UI

### 2. Capa de Servicios (`/src/services/`)
- Orquesta los casos de uso
- Punto de entrada para la capa de presentación
- Inyecta dependencias
- Ejemplo: `productService.js` coordina las operaciones de productos

### 3. Capa de Aplicación (`/src/application/`)
#### Casos de Uso (`/useCases/`)
- Implementa la lógica de negocio específica
- Valida reglas de negocio complejas
- Ejemplos:
  - `GetAllProductsUseCase`: Filtra productos válidos con imágenes
  - `GetProductByIdUseCase`: Valida producto individual y sus imágenes

### 4. Capa de Dominio (`/src/domain/`)
#### Entidades (`/entities/`)
- Define modelos de dominio con reglas de negocio
- Encapsula datos y comportamiento
- Ejemplo: Clase `Product` con validaciones de precio e imágenes

#### Interfaces (`/interfaces/`)
- Define contratos para repositorios
- Permite inversión de dependencias
- Ejemplo: `IProductRepository` define operaciones de productos

### 5. Capa de Infraestructura (`/src/infrastructure/`)
#### Repositorios (`/repositories/`)
- Implementa interfaces del dominio
- Traduce datos externos a entidades
- Ejemplo: `ProductRepository` comunica con API

#### API (`/api/`)
- Configura cliente HTTP
- Maneja comunicación externa
- Ejemplo: `apiClient.js` configura Axios

## Flujo de Datos

1. **Solicitud de Usuario**
   - Usuario interactúa con `ProductList`
   - Componente llama a `productService`

2. **Servicio**
   - `productService` instancia y ejecuta caso de uso
   - Inyecta dependencias necesarias

3. **Caso de Uso**
   - Ejecuta lógica de negocio
   - Utiliza repositorio a través de interfaz
   - Aplica validaciones de dominio

4. **Repositorio**
   - Obtiene datos de la API
   - Transforma respuesta en entidades
   - Mantiene consistencia del dominio

5. **Entidad**
   - Valida sus propios datos
   - Proporciona comportamiento de dominio
   - Encapsula reglas de negocio

## Beneficios

- ✨ Independencia del framework
- 🧪 Alta testabilidad
- 🎯 Reglas de negocio centralizadas
- 🔧 Mantenibilidad mejorada
- 🔄 Cambios aislados por capa

## Validaciones de Dominio

La entidad `Product` implementa validaciones críticas:
- Precio válido (> 0)
- Imágenes válidas (URLs HTTP)
- Formato de precio consistente

## Manejo de Errores

- Validación temprana en casos de uso
- Fallback para imágenes no disponibles
- Estados de carga y error en UI
