// tagColors.ts

// Lista de colores predefinidos
const COLORS = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF', '#33FFF5', '#FF9933',
    '#FF5733', '#57FF33', '#3357FF', '#FF5733', '#A633FF', '#57FF33', '#FF5733',
    '#3357FF', '#A633FF', '#33FFF5', '#FF9933', '#FF33A6', '#33FF57',
  ];
  
  // Función para generar un mapa de tags a colores
  export const getTagColorMap = (tags: string[]) => {
    const tagColorMap: { [key: string]: string } = {};
    tags.forEach((tag, index) => {
      if (!tagColorMap[tag]) {
        tagColorMap[tag] = COLORS[index % COLORS.length];
      }
    });
    return tagColorMap;
  };
  