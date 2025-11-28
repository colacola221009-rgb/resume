import React from 'react';
import { RESUME_DATA } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React, Tailwind CSS, and Gemini API.
        </p>
      </div>
    </footer>
  );
};