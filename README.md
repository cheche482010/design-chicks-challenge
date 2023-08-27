# Design Chicks Challenge

Este proyecto es una maquetación realizada en React de una de las páginas del sitio web [ChicksGold](https://chicksgold.com). Fue creado como un reto personal para poner a prueba mis habilidades en React y la creación de interfaces web.

## Estructura de Carpetas

El repositorio está organizado de la siguiente manera:

- `public/`: Contiene archivos públicos, como el archivo HTML principal y otros recursos.
- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Contiene los componentes reutilizables utilizados en la aplicación.
    - `Header.js`: Componente que representa la barra de navegación superior.
    - `Filters.js`: Componente que muestra los filtros de búsqueda y selección.
    - `Catalog.js`: Componente que muestra el catálogo de juegos.
    - `Game.js`: Componente que muestra un juego individual en el catálogo.
    - `Pagination.js`: Componente que proporciona la paginación del catálogo.
    - `Footer.js`: Componente que muestra el pie de página con enlaces y redes sociales.
  - `css/`: Contiene los archivos de hojas de estilo CSS para cada componente.
  - `img/`: Contiene las imágenes utilizadas en la aplicación.
  - `App.js`: Archivo principal de la aplicación que renderiza los componentes.
  - `index.js`: Archivo que inicia la aplicación y la conecta al punto de entrada HTML.

## Funcionamiento de los Componentes

- `Header`: Representa la barra de navegación superior. Contiene menús desplegables y botones de moneda y acceso.
- `Filters`: Muestra los filtros de búsqueda y selección, incluyendo selecciones de juego, precio y tipo de artículo.
- `Catalog`: Muestra una lista de juegos utilizando el componente `Game` y agrega paginación con el componente `Pagination`.
- `Game`: Muestra los detalles de un juego individual, incluyendo imagen, título, precio, descripción, etc.
- `Pagination`: Proporciona botones de paginación para navegar a través del catálogo.
- `Footer`: Muestra enlaces, redes sociales y otra información en el pie de página.

## Iniciar la Aplicación

1. Clona este repositorio: `git clone https://github.com/TU_USUARIO/design-chicks-challenge.git`
2. Entra al directorio del proyecto: `cd design-chicks-challenge`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`

La aplicación se abrirá en tu navegador y podrás explorar la maquetación realizada en React.

---

Este proyecto es un ejercicio de práctica y no tiene ninguna afiliación con ChicksGold.
