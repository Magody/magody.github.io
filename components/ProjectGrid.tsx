'use client';
import { getTagColorMap } from '@/tagColors';
import { useRouter } from 'next/navigation';
interface ProjectGridProps {
  projects: any[];
  allProjects: any[];
  openModal: (project: any) => void;
}

export default function ProjectGrid({ projects, allProjects, openModal }: ProjectGridProps) {
  // Lista de colores predefinidos
  const router = useRouter();
  const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags)));
  const tagColorMap = getTagColorMap(allTags);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform cursor-pointer"
          onClick={() => 
            project.interactive
              ? router.push(project.path)
              : openModal({ ...project, tagColorMap })
          }
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-40 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 mt-2">{project.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag: any) => (
              <span
                key={tag}
                className="text-sm px-2 py-1 rounded-md"
                style={{
                  backgroundColor: tagColorMap[tag],
                  color: getTextColor(tagColorMap[tag]),
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
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
