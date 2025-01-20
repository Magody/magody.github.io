'use client';

import { useState } from 'react';
import projectsData from '@/data/projects.json';
import FilterBar from '@/components/FilterBar';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectModal from '@/components/ProjectModal';
import { FaYoutube, FaLinkedin, FaCalendarAlt } from 'react-icons/fa';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function HomePage() {
  const [activeTag, setActiveTag] = useState<string>('all');
  const [modalProject, setModalProject] = useState(null);

  let featuredProjects = projectsData.filter((project) => project.featured);

  // Extraer todas las etiquetas únicas
  const allTags = Array.from(
    new Set(
      featuredProjects
        .map((p) => p.tags)
        .flat()
    )
  );

  // Filtrar proyectos según la etiqueta activa
  const filteredProjects =
    activeTag === 'all'
      ? featuredProjects
      : featuredProjects.filter((proj) => proj.tags.includes(activeTag));

  const openModal = (project: any) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* SECCIÓN INICIAL */}
      <header className="relative text-center min-h-[25rem] text-white flex items-center justify-center">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`${basePath}/videos/brand-g.mp4`}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay oscuro para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>

        {/* Contenido centrado */}
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-4">
            If you can imagine it, <br />
            <span className="text-cyan-400">You can program it</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4">Hi, I am Danny 👋</p>
        </div>
      </header>


      {/* ABOUT ME */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Información personal */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl text-cyan-400 font-bold mb-4">About me</h2>
          <p className="text-gray-300 text-lg">
            AI Engineer with 5+ years of experience, passionate about transforming data into actionable insights and creating AI-powered solutions that drive innovation.
          </p>
          <p className="text-gray-400 mt-4">
            I specialize in building machine learning models, LLM-based applications, and scalable data architectures.
          </p>
          <div className="mt-6 flex gap-3">

            {/* LinkedIn */}
            <button
              className="bg-blue-700 px-4 py-2 text-white rounded-lg hover:bg-blue-800 flex items-center gap-2"
              onClick={() => window.open('https://www.linkedin.com/in/magody-pendragon', '_blank')}
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </button>
            
            {/* YouTube */}
            <button
              className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 flex items-center gap-2"
              onClick={() => window.open('https://www.youtube.com/@DannyAILab', '_blank')}
            >
              <FaYoutube className="text-lg" />
              YouTube
            </button>
            
          </div>
          <br></br>
          <div className="mt-4">
            <a
              href="https://calendly.com/effycentai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-100 transition-colors text-lg"
            >
              <FaCalendarAlt className="text-xl" />
              Or click here to schedule a Meeting
            </a>
          </div>
        </div>
        {/* Imagen */}
        <div className="flex justify-center">
          <img

            src={`${basePath}/images/profile.png`}
            alt="Mi foto de perfil"
            className="rounded-lg shadow-lg border-1 border-cyan-400 w-100 h-72 object-cover"
          />
        </div>
      </section>

      {/* Technical Skills y Soft Skills */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl text-cyan-400 font-semibold mb-4">Technical Skills</h3>
          <ul className="space-y-3">
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Machine Learning and Deep Learning (TensorFlow, PyTorch, Scikit-learn)
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Big Data (Spark SQL, PySpark, Relational | Vector Databases)
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> AWS (S3, Route 53, EC2, IAM, RDS, Glue, Lambda, SageMaker, Bedrock, EKS) and Azure (DataFactory, Databricks, DevOps)
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Large Language Models and Stable Diffusion fine-tuning: LoRA and QLora
            </li>
          </ul>
        </div>
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl text-cyan-400 font-semibold mb-4">Soft Skills</h3>
          <ul className="space-y-3">
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Communication and Stakeholder Management
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Storytelling with Data
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Leadership and Problem-Solving
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow text-gray-300 flex items-center gap-2">
              <span>✔</span> Adaptability and Teamwork
            </li>
          </ul>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="mt-12">
        <h2 className="text-3xl text-cyan-400 font-bold mb-6">Featured Projects</h2>
        <FilterBar
          allTags={allTags}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
        <ProjectGrid
          projects={filteredProjects}
          allProjects={featuredProjects}
          openModal={openModal}
        />
      </section>

      {/* MODAL */}
      {modalProject && (
        <ProjectModal project={modalProject} closeModal={closeModal} />
      )}
    </div>
  );
}
