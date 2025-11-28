import React from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-primary-500/30">
        {/* Navigation Dot Pattern Overlay */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ 
                 backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
                 backgroundSize: '32px 32px' 
             }} 
        />
        
        <main className="relative z-10">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
        </main>
        
        <Footer />
        
        {/* Floating AI Chat */}
        <ChatWidget />
    </div>
  );
}

export default App;