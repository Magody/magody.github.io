'use client';
import { getTagColorMap } from '@/tagColors';

interface FilterBarProps {
  allTags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
}

export default function FilterBar({ allTags, activeTag, setActiveTag }: FilterBarProps) {
  // Lista de colores predefinidos
  const tagColorMap = getTagColorMap(allTags);

  return (
    <div className="flex flex-wrap gap-3 mb-6">
  {/* Botón "All" */}
  <button
    className={`px-4 py-2 text-sm rounded-lg ${
      activeTag === 'all' ? 'bg-cyan-400 text-white' : 'bg-gray-700 text-gray-300'
    } hover:bg-cyan-500 hover:text-white`}
    onClick={() => setActiveTag('all')}
  >
    All
  </button>

  {/* Botones para las tags */}
  {allTags.map((tag) => (
    <button
      key={tag}
      className={`px-4 py-2 text-sm rounded-lg font-medium border transition-colors`}
      style={{
        backgroundColor: activeTag === tag ? tagColorMap[tag] : 'transparent',
        color: activeTag === tag ? getTextColor(tagColorMap[tag]) : tagColorMap[tag],
        borderColor: tagColorMap[tag],
      }}
      onClick={() => setActiveTag(tag)}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.backgroundColor = tagColorMap[tag];
        (e.target as HTMLElement).style.color = getTextColor(tagColorMap[tag]);
      }}
      onMouseLeave={(e) => {
        if (activeTag !== tag) {
          (e.target as HTMLElement).style.backgroundColor = 'transparent';
          (e.target as HTMLElement).style.color = tagColorMap[tag];
        }
      }}
    >
      {tag}
    </button>
  ))}
</div>

  );
}

// Función para determinar el color del texto basado en el fondo
function getTextColor(backgroundColor: string): string {
  const rgb = hexToRgb(backgroundColor);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness > 155 ? '#000000' : '#FFFFFF';
}

// Convertir un color hex a RGB
function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}
