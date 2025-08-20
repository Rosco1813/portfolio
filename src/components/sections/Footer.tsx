import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-lg border border-mana-gold/20 bg-mana-black/60 p-8 shadow-card">
          <h2 className="font-display text-2xl text-mana-gold mb-6">Get in Touch</h2>
          <p className="text-sm text-mana-white/70 max-w-2xl">
          Feel free to reach out for a conversation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center text-sm">
            <a href="mailto:ross@uhray.com" className="inline-flex items-center rounded bg-mana-gold px-5 py-2 font-medium text-mana-black hover:bg-mana-gold/90 focus:outline-none focus:ring-2 focus:ring-mana-gold focus:ring-offset-2 focus:ring-offset-mana-black transition">
              Email Me
            </a>
            <a href="/RossJamesonResume.pdf" className="inline-flex items-center rounded border border-mana-gold/50 px-5 py-2 font-medium text-mana-gold hover:bg-mana-gold/10 focus:outline-none focus:ring-2 focus:ring-mana-gold focus:ring-offset-2 focus:ring-offset-mana-black transition">
              Download Resume PDF
            </a>
            <a href="https://www.linkedin.com/in/ross-jameson-891047186/" target="_blank" rel="noopener" className="text-mana-gold/80 hover:text-mana-gold transition-colors">LinkedIn</a>
            <a href="https://github.com/RossJameson?tab=overview&from=2025-08-01&to=2025-08-17" target="_blank" rel="noopener" className="text-mana-gold/80 hover:text-mana-gold transition-colors">GitHub</a>
          </div>
        </div>
        <p className="text-xs text-mana-white/40 mt-8">&copy; {new Date().getFullYear()} Ross Jameson. Thematic styling inspired by fantasy TCG aesthetics.</p>
      </div>
    </footer>
  );
};
