import React from 'react';
import { RESUME_DATA } from '../constants';
import { Rocket, ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
          <Rocket className="text-primary-500" />
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-primary-600/50 transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                     <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                        <Github size={20} />
                     </a>
                     <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                     </a>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-primary-300 bg-primary-900/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};