import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,81,0.15),transparent_70%)] pointer-events-none" />
      <div className="mx-auto max-w-5xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl tracking-tight text-mana-gold drop-shadow"
        >
          Ross Jameson
        </motion.h1>
        <p className="mt-4 max-w-2xl text-lg text-mana-white/80 leading-relaxed">
          Software Developer passionate about interactive systems, player-focused experiences, and bringing high quality code craftsmanship to game-adjacent platforms. Seeking to contribute to a great company through engineering excellence and a deep appreciation of the art of coding.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Full-Stack Engineering','Systems Design','Gameplay Adjacent Tools','Team Leadership','Accessibility'].map(b => (
            <span key={b} className="text-xs uppercase tracking-wide bg-mana-black/70 border border-mana-gold/30 text-mana-gold/90 px-3 py-1 rounded-full">{b}</span>
          ))}
        </div>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="inline-flex items-center rounded bg-mana-gold px-5 py-2 font-medium text-mana-black hover:bg-mana-gold/90 focus:outline-none focus:ring-2 focus:ring-mana-gold focus:ring-offset-2 focus:ring-offset-mana-black transition">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded border border-mana-gold/50 px-5 py-2 font-medium text-mana-gold hover:bg-mana-gold/10 focus:outline-none focus:ring-2 focus:ring-mana-gold focus:ring-offset-2 focus:ring-offset-mana-black transition">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};
