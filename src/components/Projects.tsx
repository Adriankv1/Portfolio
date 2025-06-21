import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  //example projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Group calendar",
      description: "A group calendar app that allows users to put availability and see what times work for everyone",
      image: "🗓️",
      technologies: ["React", "Typescript", "Supabase"],
      category: "frontend",
      liveUrl: "https://adriankv1.github.io/Keys-Calendar/calendar",
      githubUrl: "https://github.com/Adriankv1/Keys-Calendar",
      featured: true
    },
    {
      id: 2,
      title: "To do list",
      description: "A to do list app that allows users to add, edit, and delete lists of tasks. It also allows users to mark tasks as completed and delete them.",
      image: "📋",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      category: "frontend",
      liveUrl: "https://adriankv1.github.io/List-to-do/",
      githubUrl: "https://github.com/Adriankv1/List-to-do",
      featured: true
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "A beautiful weather dashboard that displays current weather and forecasts using OpenWeatherMap API with interactive charts and maps.",
    //   image: "🌤️",
    //   technologies: ["React", "Chart.js", "OpenWeatherMap API", "Tailwind CSS"],
    //   category: "frontend",
    //   liveUrl: "https://adriankv1.github.io/List-to-do/",
    //   githubUrl: "https://github.com/yourusername/project",
    //   featured: false
    // },
    {
      id: 4,
      title: "Webservice application",
      description: "A webservice application in collaboration with Nøsted& that allows users to manage orders.",
      image: "📝",
      technologies: ["C#", ".NET", "mariaDB"],
      category: "fullstack",
      // liveUrl: "N/A",
      githubUrl: "https://github.com/thevithach/WebapplikasjonSemesterOppgave",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies and optimized for performance and accessibility.",
      image: "🎨",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveUrl: "https://portfolio-adrian-viken.vercel.app/",
      githubUrl: "https://github.com/Adriankv1/Portfolio",
      featured: false
    }
    // {
    //   id: 6,
    //   title: "API Gateway",
    //   description: "A microservices API gateway with authentication, rate limiting, and request routing built with Node.js and Express.",
    //   image: "🚪",
    //   technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
    //   category: "backend",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/project",
    //   featured: false
    // }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating meaningful digital experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary text-center text-sm py-2"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Adriankv1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 