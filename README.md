# 🐾 Veterinaria San Marcos

Prototipo web de un sitio para una clínica veterinaria: catálogo de productos, agendamiento de citas, registro/inicio de sesión de usuarios y panel de administración.

**DSY1104 Desarrollo FullStack II** — Evaluación 1 (30%), DuocUC

## Equipo

| Integrante | Módulo |
|---|---|
| Bruno | Catálogo, Detalle de producto, Carrito de compras, Servicios y Citas, mantenedor de Productos (admin) |
| Alfonso | Usuarios, Login, Registro, mantenedor de Usuarios (admin) |
| Benjamin | Home, Nosotros, Blogs, Contacto, Panel de Administración |

## Tecnologías

- HTML5 semántico
- CSS3 propio + [Bootstrap 5.3.3](https://getbootstrap.com/) (grilla y componentes base)
- JavaScript (ES6+) — sin frameworks ni backend
- `localStorage` para persistir productos, usuarios, carrito y citas agendadas

> No hay servidor ni base de datos: toda la información vive en el navegador.

## Cómo verlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Bruno-M-M/proyecto-veterinaria.git
   ```
2. Ábrelo en VS Code y usa la extensión **Live Server** sobre `index.html` (evita abrir los archivos con doble clic — algunas funciones no cargan bien con `file://`).

## Estructura del proyecto

```
proyecto-veterinaria/
├── index.html                  Home
├── productos.html               Catálogo de productos
├── detalle-producto.html        Ficha de un producto
├── carrito.html                 Carrito de compras
├── servicios.html                Servicios veterinarios + agendamiento de citas
├── login.html / registro.html    Autenticación de usuarios
├── nosotros.html                 Sobre la clínica
├── blogs.html, blog-1.html, blog-2.html   Blog y detalle de artículos
├── contacto.html                 Formulario de contacto
├── admin/
│   ├── index.html                 Panel principal
│   ├── productos.html, producto-form.html   Mantenedor de productos
│   ├── usuarios.html, nuevousuario.html     Mantenedor de usuarios
│   └── admin.css
├── css/
│   └── style.css                 Hoja de estilos general
├── js/                            Datos, storage y lógica de cada módulo
└── img/
```

## Roles del sistema

- **Administrador** — acceso total, gestiona productos y usuarios
- **Vendedor** — visualiza productos y pedidos
- **Cliente** — navega el catálogo, agenda citas, compra

## Estado del proyecto

Prototipo correspondiente a la Evaluación 1 (30%) del ramo. No incluye backend ni base de datos real — la persistencia con `localStorage` y las validaciones en JavaScript cumplen ese rol para esta etapa.
