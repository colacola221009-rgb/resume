import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
          <Briefcase className="text-primary-500" />
          Work Experience
        </h2>

        <div className="space-y-12 relative border-l-2 border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12">
          {RESUME_DATA.experience.map((job) => (
            <div key={job.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-primary-500 transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {job.role}
                </h3>
                <span className="text-sm font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                  {job.period}
                </span>
              </div>
              
              <div className="text-lg text-primary-200 mb-4 font-medium">
                {job.company}
              </div>
              
              <ul className="space-y-2">
                {job.description.map((item, index) => (
                  <li key={index} className="text-slate-400 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};