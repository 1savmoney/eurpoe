import React from 'react';
import { CitySectionData } from '../types';
import DayCard from './DayCard';
import { motion } from 'framer-motion';

interface CitySectionProps {
  data: CitySectionData;
  isAlternate: boolean;
}

const CitySection: React.FC<CitySectionProps> = ({ data, isAlternate }) => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`flex flex-col gap-12 ${isAlternate ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          
          {/* Visual Side (Sticky) */}
          <div className="md:w-1/3 md:sticky md:top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: isAlternate ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-200 uppercase tracking-tighter absolute -top-10 -left-6 md:-left-10 z-0 select-none">
                {data.city}
              </h2>
              <div className="relative z-10">
                <span className="text-accent font-bold tracking-widest text-sm uppercase">{data.country}</span>
                <h3 className="text-3xl font-serif font-bold text-primary mt-1 mb-4">{data.city}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6 border-l-4 border-accent pl-4">
                  {data.description}
                </p>
                <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg bg-slate-200">
                   {/* Placeholder for city image */}
                   <img 
                    src={`https://picsum.photos/seed/${data.imagePrompt}/600/400`} 
                    alt={data.city} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                   />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Schedule Side */}
          <div className="md:w-2/3">
             {data.days.map((day) => (
               <DayCard key={day.dayNumber} day={day} />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySection;