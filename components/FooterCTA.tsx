import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const FooterCTA: React.FC = () => {
  const [showConclusion, setShowConclusion] = useState(false);

  return (
    <footer className="relative bg-primary text-white py-24 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          準備好出發了嗎？
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          這不僅僅是一份行程表，更是你 2026 年最值得期待的故事。
          所有的風景都已準備就緒，只差你的腳步。
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowConclusion(true)}
          className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 mx-auto group"
        >
          <Heart className="w-5 h-5 fill-white/20 group-hover:fill-white transition-colors" />
          <span>告訴我旅行的意義</span>
        </motion.button>
      </div>

      {/* Conclusion Pop-up */}
      <AnimatePresence>
        {showConclusion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConclusion(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white text-primary p-10 rounded-2xl max-w-lg w-full text-center relative z-10 shadow-2xl border-t-8 border-accent"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-accent">旅行的核心結論</h3>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                「旅行不是為了抵達目的地，<br/>
                而是為了在陌生的地方，<br/>
                <span className="font-bold text-primary">找回對生活久違的熱情。</span>」
              </p>
              <button 
                onClick={() => setShowConclusion(false)}
                className="text-sm text-slate-400 hover:text-primary underline"
              >
                帶著熱情出發
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterCTA;