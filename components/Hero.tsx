import React from 'react';
import { RESUME_DATA, IconMap } from '../constants';
import { MapPin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-6 inline-block p-1 rounded-full bg-gradient-to-tr from-primary-500 to-purple-500">
             <img 
                src="https://picsum.photos/150/150" 
                alt={RESUME_DATA.name} 
                className="w-32 h-32 rounded-full border-4 border-slate-900 object-cover"
             />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
          {RESUME_DATA.name}
        </h1>
        <p className="text-xl md:text-2xl text-primary-400 font-medium mb-6">
          {RESUME_DATA.title}
        </p>
        
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          {RESUME_DATA.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-slate-300">
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <MapPin size={16} className="text-primary-500" />
            <span>{RESUME_DATA.location}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <Mail size={16} className="text-primary-500" />
            <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-white transition-colors">
              {RESUME_DATA.email}
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {RESUME_DATA.socials.map((social) => {
            const Icon = IconMap[social.icon] || IconMap.Globe;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white text-slate-400 transition-all duration-300 border border-slate-700 hover:border-primary-500"
                aria-label={social.platform}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};