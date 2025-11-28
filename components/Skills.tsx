import React from 'react';
import { RESUME_DATA } from '../constants';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-slate-850/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
          <Cpu className="text-primary-500" />
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESUME_DATA.skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-primary-500/50 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-primary-200 mb-4 border-b border-slate-800 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:bg-slate-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};