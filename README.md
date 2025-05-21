# Inmobiliar-IA 🏠

Aplicación web para búsqueda y arriendo de propiedades con integración de IA para recomendaciones personalizadas.

## 🌟 Tecnologías

### Frontend
- **HTML5** / **CSS3** (Flexbox, Grid)
- **JavaScript** (ES6+)
- **Fetch API** (Conexión con backend)

### Backend
- **Node.js** (Runtime) o **FastAPI** (Python)
- **Oracle Database** (o MongoDB/PostgreSQL según configuración)
- **Express.js** (Node) / **Uvicorn** (Python)

### DevOps
- **Heroku** (Despliegue backend)
- **MongoDB Atlas** (Base de datos en la nube)
- **Oracle Instant Client** (Para conexión local)

## 🖥 Frontend: Flujo de la Aplicación

### 1. Interfaz Principal
```mermaid
graph TD
    A[Landing Page] --> B[Header con Búsqueda]
    B --> C[Sección de Ubicaciones Populares]
    B --> D[Modal de Inicio de Sesión/Registro]