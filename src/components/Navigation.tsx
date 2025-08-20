import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur bg-mana-black/70 border-b border-mana-gold/20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-display text-xl tracking-wide text-mana-gold">RJ</a>
        <button
          aria-label="Toggle navigation"
          className="sm:hidden inline-flex items-center justify-center rounded p-2 text-mana-gold hover:bg-mana-gold/10 focus:outline-none focus:ring-2 focus:ring-mana-gold"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <ul className={clsx(
          'sm:flex gap-6 font-medium hidden',
          'sm:static sm:bg-transparent sm:p-0 sm:m-0',
        )}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm uppercase tracking-wide text-mana-white/80 hover:text-mana-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* mobile panel */}
      {open && (
        <div className="sm:hidden animate-fade-down overflow-hidden">
          <ul className="px-4 pb-4 space-y-2">
            {links.map(l => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block rounded px-3 py-2 text-mana-white/90 bg-mana-black/60 border border-mana-gold/10 hover:bg-mana-gold/10">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
