import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const StoryHero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary text-white flex flex-col items-center justify-center">
      {/* Background Ambience (Simulated Image Overlay) */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-accent font-serif tracking-widest uppercase text-sm mb-4"
        >
          2026 Winter Expedition
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8 text-shadow-lg"
        >
          穿梭歐亞的<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            時光之旅
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-light text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          從伊斯坦堡的宣禮塔聲中醒來，在倫敦塔橋感受風的溫度，
          漫步布拉格的童話石板路，最後在維也納的華爾茲中旋轉。
          <br /><br />
          17天，5座城市，一段難忘的記憶。
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 z-10"
      >
        <ArrowDown className="text-white/70 w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default StoryHero;