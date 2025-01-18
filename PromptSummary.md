Eres un experto en Next JS 15 y typescript. Estoy migrando un proyecto antiguo y he determinado que será más fácil crear uno nuevo. Te dare instrucciones de en qué necesito tu ayuda. Por el momento analiza el contexto:

## **Esquema del Proyecto**

### **1. Arquitectura**
El proyecto sigue una arquitectura basada en **Next.js 15** con un enfoque modular y componentes reutilizables. Los estilos están gestionados con **Tailwind CSS** y el proyecto se basa en datos estáticos proporcionados por un archivo JSON (`projects.json`).

La decisión de abrir una nueva página o un modal se basa en la propiedad interactive del proyecto en el archivo projects.json. Si interactive es true, el proyecto redirige a una nueva página específica definida en la propiedad path. Si interactive es false, se abre un modal con los detalles del proyecto.

### **2. Estructura del Proyecto**

```plaintext
├── public/
│   ├── img/                # Imágenes utilizadas en el portafolio
│   │   ├── profile.jpg     # Foto de perfil
│   │   ├── project1.jpg    # Imagen del proyecto 1
│   │   └── project2.jpg    # Imagen del proyecto 2
│   └── projects.json       # Archivo JSON con la información de los proyectos
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout global (header, footer, estilos generales)
│   │   ├── page.tsx        # Página principal (Home)
│   │   └── projects/       # Ruta `/projects`
│   │       ├── page.tsx    # Página que muestra todos los proyectos
│   │       └── interactive/
│   │           └── game-of-life/
│   │               └── page.tsx # Página interactiva: Game of Life
│   ├── components/
│   │   ├── FilterBar.tsx   # Componente para el filtro de proyectos por etiquetas
│   │   ├── ProjectGrid.tsx # Componente que renderiza las cards de los proyectos
│   │   ├── ProjectModal.tsx # Modal que muestra detalles de un proyecto
│   │   └── tagColors.ts    # Lógica para asignar colores únicos a las etiquetas
│   ├── data/
│   │   └── projects.json   # Información de los proyectos movida a una carpeta de datos
│   └── styles/
│       ├── globals.css     # Configuración global de estilos (Tailwind CSS)
│       └── GameOfLife.module.css # Estilos para la funcionalidad interactiva
├── package.json            # Dependencias y scripts del proyecto
├── tailwind.config.js      # Configuración de Tailwind CSS
└── tsconfig.json           # Configuración de TypeScript

```

---

### **3. Funcionalidades Principales**

#### **3.1 Página Principal (Home)**
- **Ruta:** `/`
- **Descripción:**
  - Muestra una introducción (About Me) con foto de perfil y enlaces sociales.
  - Lista de habilidades técnicas y blandas.
  - Proyectos destacados (`featured: true`) renderizados con un filtro de etiquetas.
- **Componentes utilizados:**
  - `FilterBar` (filtra proyectos por etiquetas).
  - `ProjectGrid` (renderiza las cards de los proyectos).
  - `ProjectModal` (muestra detalles del proyecto seleccionado).

#### **3.2 Página de Proyectos**
- **Ruta:** `/projects`
- **Descripción:**
  - Lista completa de proyectos, con funcionalidad de filtrado por etiquetas.
  - Cada card abre un modal con los detalles del proyecto.
- **Componentes utilizados:**
  - `FilterBar`
  - `ProjectGrid`
  - `ProjectModal`

#### **3.3 Barra de Filtro (FilterBar)**
- **Descripción:**
  - Permite filtrar los proyectos por etiquetas.
  - Mantiene colores consistentes para cada etiqueta utilizando `tagColors.ts`.

#### **3.4 Grid de Proyectos (ProjectGrid)**
- **Descripción:**
  - Renderiza las cards de los proyectos, mostrando título, subtítulo, imagen y etiquetas.
  - Maneja colores únicos para las etiquetas.

#### **3.5 Modal de Proyectos (ProjectModal)**
- **Descripción:**
  - Muestra detalles del proyecto seleccionado:
    - Título, descripción, herramientas utilizadas, etiquetas y enlace al repositorio.
    - Proceso en formato HTML (`process_html` del JSON).

#### **3.6 Funcionalidad Interactiva: Game of Life**
- **Ruta:** `/projects/interactive/game-of-life`
- **Descripción:**
  - Implementación interactiva del juego de la vida de Conway utilizando `HTML Canvas`.
  - Los usuarios pueden:
    - Dibujar células vivas con clics y movimientos del mouse, ajustando dinámicamente el estado de las celdas.
    - Configurar el número de generaciones y la duración de cada ciclo utilizando controles deslizantes (`range sliders`).
    - Ejecutar la simulación del juego, limpiar el tablero o reiniciar a una configuración inicial.
  - Renderización eficiente basada en una cuadrícula dinámica con un alto grado de personalización.
- **Componentes utilizados:**
  - `CanvasDrawerGameLife`: Clase personalizada para manejar el renderizado de celdas y la lógica del juego.
  - `GameOfLife.module.css`: Estilos adaptables con soporte para pantallas móviles.
- **Lógica destacada:**
  - Las coordenadas del mouse se ajustan dinámicamente para mapearse correctamente al canvas.
  - El estado de las células se actualiza con reglas claras (por ejemplo, reglas del juego de la vida de Conway).
  - Función de simulación con animación controlada por tiempo (`setTimeout` y ciclos generacionales).
---

### **4. Estructura de Datos (projects.json)**

```json
[
  
  {
    "id": 1,
    "title": "Flight Delays & Cancellations",
    "subtitle": "ETL Pipeline Build en AWS",
    "technologies": ["Python", "PySpark", "AWS Redshift"],
    "tags": ["Data Cleaning", "Data Transformation", "Data Modelling"],
    "image": "/img/flight_delays.jpg",
    "repo_link": "https://github.com/example/flight-delays",
    "goal": "Construir un pipeline ETL utilizando AWS y PySpark.",
    "interactive": false,
    "process_html": "<p>Se limpiaron los datos usando <strong>Pandas</strong>. Se generaron gráficos con <strong>Seaborn</strong>.</p>",
    "featured": true,
    "path": ""
  },
  {
    "id": 2,
    "title": "Game of Life",
    "subtitle": "Conway's Game of Life",
    "technologies": ["JavaScript", "HTML Canvas"],
    "tags": ["Interactive", "Game"],
    "image": "/images/projects/applications/GameOfLife/0.png",
    "repo_link": "https://github.com/example/game-of-life",
    "goal": "Implement Conway's Game of Life using HTML Canvas.",
    "interactive": true,
    "process_html": "",
    "featured": true,
    "path": "/projects/interactive/game-of-life"
  }
]
```

---

### **5. Flujo de Datos**

1. **Carga de datos (`projects.json`)**
   - Datos de los proyectos se importan desde `projects.json` y se pasan a los componentes.

2. **Asignación de colores**
   - El archivo `tagColors.ts` asigna colores únicos a las etiquetas, garantizando consistencia en todas las vistas.

3. **Filtrado de proyectos**
   - La `FilterBar` actualiza el estado `activeTag`, que filtra dinámicamente los proyectos mostrados en `ProjectGrid`.

4. **Apertura de modal**
   - Al hacer clic en una card, se abre el `ProjectModal` con los detalles del proyecto.

---

### **7. Dependencias Principales**
- **Next.js**: Framework para renderizado del frontend.
- **Tailwind CSS**: Framework para estilos.
- **TypeScript**: Tipado estático para mayor robustez.
- **React Hooks**: Manejo del estado con `useState`.