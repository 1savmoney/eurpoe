import React, { useState } from 'react';
import { DayPlan, ActivityType } from '../types';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, BedDouble, Plane, Train, Coffee, ShoppingBag, Landmark } from 'lucide-react';

interface DayCardProps {
  day: DayPlan;
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.FLIGHT: return <Plane className="w-4 h-4" />;
    case ActivityType.TRAIN: return <Train className="w-4 h-4" />;
    case ActivityType.FOOD: return <Coffee className="w-4 h-4" />;
    case ActivityType.SHOPPING: return <ShoppingBag className="w-4 h-4" />;
    case ActivityType.SIGHTSEEING: return <Landmark className="w-4 h-4" />;
    default: return <MapPin className="w-4 h-4" />;
  }
};

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="mb-6 group"
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 relative"
      >
        {/* Left Color Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-slate-300 to-slate-400 group-hover:from-accent group-hover:to-amber-400 transition-all"></div>

        <div className="p-5 pl-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold tracking-wider text-accent uppercase bg-amber-50 px-2 py-1 rounded">
                Day {day.dayNumber}
              </span>
              <span className="text-sm text-slate-400 font-medium">{day.date}</span>
            </div>
            <h3 className="text-xl font-bold text-primary font-serif">{day.title}</h3>
            {day.highlight && (
              <p className="text-sm text-slate-500 mt-1 italic">"{day.highlight}"</p>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
             {/* Mini Preview Icons */}
             <div className="flex gap-1 text-slate-300">
               {day.schedule.slice(0, 3).map((s, i) => (
                 <span key={i} title={s.type}>{getActivityIcon(s.type)}</span>
               ))}
             </div>
             <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden bg-slate-50 border-t border-slate-100"
        >
          <div className="p-6 pl-8">
            {day.accommodation && (
              <div className="flex items-center gap-2 mb-6 text-sm text-slate-600 bg-white p-3 rounded-lg border border-slate-200 inline-block">
                <BedDouble className="w-4 h-4 text-accent" />
                <span>住宿：<span className="font-medium">{day.accommodation}</span></span>
              </div>
            )}

            <div className="space-y-4 relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-200"></div>

              {day.schedule.map((item, idx) => (
                <div key={idx} className="relative flex gap-4 items-start group/item">
                  <div className="w-4 h-4 rounded-full bg-slate-300 border-2 border-slate-50 z-10 flex-shrink-0 mt-1.5 group-hover/item:bg-accent transition-colors"></div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-bold text-slate-700 min-w-[50px]">{item.time}</span>
                      <span className="text-slate-800 font-medium">{item.description}</span>
                    </div>
                    {item.note && (
                      <div className="mt-1 text-xs text-slate-500 bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-100">
                        💡 {item.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DayCard;