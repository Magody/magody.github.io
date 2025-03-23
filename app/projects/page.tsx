'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getTagColorMap } from '@/tagColors';
import projectsData from '@/data/projects.json';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';
import FilterBar from '@/components/FilterBar';

export default function ProjectsPage() {
  const [modalProject, setModalProject] = useState<any>(null);
  const [activeTag, setActiveTag] = useState<string>('all');
  const searchParams = useSearchParams();

  // Extract unique tags from the JSON
  const allTags = Array.from(
    new Set(
      projectsData.flatMap((project) => project.tags || [])
    )
  );

  // Build the tag color map
  const tagColorMap = getTagColorMap(allTags);

  // Filter projects based on the active tag
  const filteredProjects =
    activeTag === 'all'
      ? projectsData
      : projectsData.filter((project) =>
          project.tags.includes(activeTag)
        );

  const openModal = (project: any) => {
    // Merge the project with the tagColorMap
    setModalProject({ ...project, tagColorMap });
  };

  const closeModal = () => {
    setModalProject(null);
  };

  // Automatically open a project if ?openProject=id is present, with a delay after page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        const openProjectParam = parseInt(searchParams.get('openProject') || '-1', 10);
        if (openProjectParam > 0) {
          const foundProject = projectsData.find((p) => p.id === openProjectParam);
          if (foundProject) {
            setModalProject({ ...foundProject, tagColorMap });
          }
        }
      }, 1000); // Delay of 1 second
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [searchParams, tagColorMap]);

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl text-cyan-400 font-bold mb-6">All Projects</h2>

        <FilterBar
          allTags={allTags}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />

        <ProjectGrid
          projects={filteredProjects}
          allProjects={projectsData}
          openModal={openModal}
        />

        {modalProject && (
          <ProjectModal project={modalProject} closeModal={closeModal} />
        )}
      </div>
    </Suspense>
  );
}
