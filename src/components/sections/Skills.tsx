import React from 'react';

const skillGroups: { name: string; skills: string[] }[] = [
  { name: 'Languages', skills: ['TypeScript','Python','SQL','Go',] },
  { name: 'Frontend', skills: ['React','Next.js','Vite','Tailwind','Svelte','Angular', 'Bootstrap', 'handlebars','mustache'] },
  { name: 'Backend', skills: ['Node.js','REST','GraphQL','WebSockets','Microservices','NestJS'] },
  { name: 'Data & Infra', skills: ['PostgreSQL','MongoDB','Redis','Docker','CI/CD','AWS'] },
  { name: 'Game Adjacent', skills: ['Godot','State Machines','Sprite Animation'] },
  { name: 'Mobile', skills: ['Xcode','Android Studio','App Store Connect production releases', 'Google Play Store'] },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-mana-black/40">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-display text-3xl text-mana-gold mb-10">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(g => (
            <div key={g.name} className="relative rounded-lg border border-mana-gold/20 bg-mana-black/60 p-5 shadow-card">
              <h3 className="text-lg font-semibold text-mana-gold mb-3">{g.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map(s => <li key={s} className="text-[11px] uppercase tracking-wide bg-mana-black/70 border border-mana-gold/30 text-mana-gold/90 px-2 py-1 rounded">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
