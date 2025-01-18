'use client';

import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: any;
  closeModal: () => void;
}

export default function ProjectModal({ project, closeModal }: ProjectModalProps) {
  if (!project) return null; // Evita renderizar si no hay proyecto

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'modal-overlay') closeModal();
      }}
      id="modal-overlay"
    >
      <div className={styles.modal}>
        {/* Botón de cierre */}
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>

        {/* Título del proyecto */}
        <h2 className={styles.title}>
          <span role="img" aria-label="icon">💻</span>
          {project.title}
        </h2>

        {/* Tabla de detalles del proyecto */}
        <table className={styles.table}>
          <tbody>
            {/* Tools */}
            <tr>
              <td className={styles.label}>Tools</td>
              <td className={styles.tags}>
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </td>
            </tr>

            {/* Tags */}
            <tr>
              <td className={styles.label}>Tags</td>
              <td className={styles.tags}>
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className={styles.tag}
                    style={{
                      backgroundColor: project.tagColorMap[tag],
                      color: getTextColor(project.tagColorMap[tag]),
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </td>
            </tr>

            {/* Link */}
            {project.repo_link && (
              <tr>
                <td className={styles.label}>Link</td>
                <td>
                  <a
                    href={project.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {project.repo_link}
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Imagen del proyecto */}
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
        />

        {/* Objetivo */}
        <div className={styles.section}>
          <p className={styles.text}>
            <strong className={styles.sectionTitle}>Objective:</strong> {project.goal}
          </p>
        </div>

        {/* Detalle del proceso renderizado como HTML */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Details</h3>
          <div
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: project.process_html }}
          />
        </div>
      </div>
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
