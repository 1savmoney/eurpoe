import React from 'react';
import StoryHero from './components/StoryHero';
import CitySection from './components/CitySection';
import InteractiveTips from './components/InteractiveTips';
import FooterCTA from './components/FooterCTA';
import { TRIP_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-accent selection:text-white">
      {/* Intro Section */}
      <StoryHero />

      {/* Main Content Area */}
      <main className="relative">
        {/* Vertical Line connecting sections */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2 hidden md:block z-0"></div>

        {TRIP_DATA.map((sectionData, index) => (
          <CitySection 
            key={sectionData.city} 
            data={sectionData} 
            isAlternate={index % 2 !== 0} 
          />
        ))}
      </main>

      {/* Interactive Feature Section */}
      <InteractiveTips />

      {/* Outro */}
      <FooterCTA />
      
      {/* Fixed Credit/Info (Optional) */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full shadow border border-slate-200 text-slate-400">
          2026 Europe Trip Planner
        </div>
      </div>
    </div>
  );
};

export default App;