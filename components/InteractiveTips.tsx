import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Luggage, Camera, Ticket, Footprints, X } from 'lucide-react';
import { INTERACTIVE_TIPS } from '../constants';
import { TipData } from '../types';

const InteractiveTips: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<TipData | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'luggage': return <Luggage className="w-6 h-6" />;
      case 'camera': return <Camera className="w-6 h-6" />;
      case 'ticket': return <Ticket className="w-6 h-6" />;
      case 'shoes': return <Footprints className="w-6 h-6" />;
      default: return <Camera className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary mb-4">旅人備忘錄</h2>
          <p className="text-secondary">點擊下方卡片，查看旅行生存指南。</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INTERACTIVE_TIPS.map((tip, index) => (
            <motion.button
              key={tip.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTip(tip)}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-200 flex flex-col items-center gap-3 transition-colors hover:border-accent/50 group"
            >
              <div className="p-3 bg-slate-100 rounded-full text-slate-600 group-hover:bg-amber-100 group-hover:text-accent transition-colors">
                {getIcon(tip.icon)}
              </div>
              <span className="font-medium text-slate-700">{tip.title}</span>
              <span className="text-xs text-slate-400">點擊查看</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedTip && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTip(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedTip(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-4 text-accent">
                {getIcon(selectedTip.icon)}
                <h3 className="text-xl font-bold font-serif text-primary">{selectedTip.title}</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                {selectedTip.content}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <button 
                  onClick={() => setSelectedTip(null)}
                  className="px-6 py-2 bg-primary text-white rounded-full text-sm hover:bg-slate-700 transition-colors"
                >
                  我知道了
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveTips;