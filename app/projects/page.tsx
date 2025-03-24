'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getTagColorMap } from '@/tagColors';
import projectsData from '@/data/projects.json';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';
import FilterBar from '@/components/FilterBar';

// Example interface for a single project in your dataset
interface Project {
  id: number;
  name: string;
  tags: string[];
  // Add other fields as needed, e.g. description, link, etc.
}

// Interface for the props in your presentational component
interface ProjectsContentProps {
  tagColorMap: Record<string, string>;
  allTags: string[];
  activeTag: string;
  setActiveTag: React.Dispatch<React.SetStateAction<string>>;
  filteredProjects: Project[];
  openModal: (project: Project) => void;
  modalProject: Project | null;
  closeModal: () => void;
}

/**
 * This component handles ONLY the UI (rendering).
 * It receives all data and callbacks from its parent.
 */
function ProjectsContent({
  tagColorMap,
  allTags,
  activeTag,
  setActiveTag,
  filteredProjects,
  openModal,
  modalProject,
  closeModal,
}: ProjectsContentProps) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl text-cyan-400 font-bold mb-6">All Projects</h2>

      {/* FilterBar: pass the tags, active tag, and state setter */}
      <FilterBar allTags={allTags} activeTag={activeTag} setActiveTag={setActiveTag} />

      {/* ProjectGrid: displays the filtered projects, plus an openModal callback */}
      <ProjectGrid projects={filteredProjects} allProjects={projectsData} openModal={openModal} />

      {/* Modal: conditionally render if a project is set */}
      {modalProject && (
        <ProjectModal project={modalProject} closeModal={closeModal} />  // tagColorMap={tagColorMap} 
      )}
    </div>
  );
}

/**
 * This component calls useSearchParams() and manages state.
 * Because we render it inside <Suspense>, we comply with Next.js
 * requirements for using useSearchParams().
 */
function ProjectsPageWrapper() {
  const searchParams = useSearchParams();

  // Manage the modal project state and the activeTag state
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [activeTag, setActiveTag] = useState<string>('all');

  // 1) Gather all tags across the dataset
  const allTags = Array.from(
    new Set(projectsData.flatMap((project: Project) => project.tags || []))
  );

  // 3) Filter projects based on the active tag
  const filteredProjects =
    activeTag === 'all'
      ? (projectsData as Project[])
      : (projectsData as Project[]).filter((project) =>
          project.tags.includes(activeTag)
        );

  // 4) The function called when a user clicks a project in the grid
  const openModal = (project: Project) => {
    setModalProject({ ...project });
  };

  const closeModal = () => {
    setModalProject(null);
  };
  const tagColorMap = useMemo(() => {
    return getTagColorMap(allTags);
  }, [allTags]);
  // Automatically open a project if ?openProject=id is present
  useEffect(() => {
    const handleLoad = () => {
      
      const openProjectParam = parseInt(searchParams.get('openProject') || '-1', 10);
      if (openProjectParam > 0) {
        // Find the matching project
        const foundProject = (projectsData as Project[]).find(
          (p) => p.id === openProjectParam
        );
        if (foundProject) {
          setModalProject({ ...foundProject, tagColorMap });
        }
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [searchParams]);

  return (
    <ProjectsContent
      tagColorMap={tagColorMap}
      allTags={allTags}
      activeTag={activeTag}
      setActiveTag={setActiveTag}
      filteredProjects={filteredProjects}
      openModal={openModal}
      modalProject={modalProject}
      closeModal={closeModal}
    />
  );
}

/**
 * This is the actual page that Next.js will render.
 * We wrap the ProjectsPageWrapper in a <Suspense> boundary.
 */
export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsPageWrapper />
    </Suspense>
  );
}
