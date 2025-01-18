'use client';

import { useState } from 'react';
import projectsData from '@/data/projects.json';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';
import FilterBar from '@/components/FilterBar';

export default function ProjectsPage() {
  const [modalProject, setModalProject] = useState(null);
  const [activeTag, setActiveTag] = useState<string>('all');

  // Extraer etiquetas únicas del JSON
  const allTags = Array.from(
    new Set(
      projectsData
        .map((project) => project.tags)
        .flat()
    )
  );

  // Filtrar proyectos según la etiqueta activa
  const filteredProjects =
    activeTag === 'all'
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeTag));

  const openModal = (project: any) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl text-cyan-400 font-bold mb-6">All Projects</h2>

      {/* Barra de Filtros */}
      <FilterBar
        allTags={allTags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />

      {/* Grid de Proyectos */}
      <ProjectGrid projects={filteredProjects} allProjects={projectsData} openModal={openModal} />

      {/* Modal de Proyecto */}
      {modalProject && (
        <ProjectModal project={modalProject} closeModal={closeModal} />
      )}
    </div>
  );
}
