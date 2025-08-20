import React from 'react';

interface Project {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  highlight?: string;
  
  
}

const projects: Project[] = [
  {
    name: 'CDLLife (social media app)',
    description: 'The Largest social media platform for the trucking community',
    stack: ['TypeScript','Angular - version 2','Rest Api','mongo', 'React - version 3','Redis','WebSockets'],
    link:'https://apps.apple.com/us/app/cdllife/id1407032419?mt=8&ct=Landing-Page',
    highlight: 'Currently the Tech Lead for our social media application managing our App releases on both IOS and Android play store, triaging bug reports, new feature requests, managing our github repos, I also work on both the front end Angular code, our svelte webcomponents as well as our typescript back end api routes'
  },
  {
    name: 'CDLLife main website',
    description: 'Main website for CDLLife, showcasing services and solutions.',
    stack: ['TypeScript','svelte','Rest Api','mongo' ],
    link: 'https://cdllife.com/news/',
    highlight: 'Helped redesign multitude of components including the main navigation bar and more'
  },
  {
    name: 'CDLLife Job Board',
    description: 'Site dedicated to helping trucking professionals find new job opportunities.',
    stack: ['TypeScript','svelte','Rest Api','mongo' ],
    link: 'https://jobs.cdllife.com',
    highlight: 'Helped redesign the job board to improve user experience and job matching.Including the main search component'
  },
  {
    name: 'CDLLife Admin Panel',
    description: 'GM assistant app for dynamically scaling D&D encounters with pacing & narrative beat guidance.',
    stack: ['Node.js','Express','MongoDB','React'],
    highlight: 'Lead Developer creating internal admin tools to better manage user permissions and content moderation.'
  },
  {
    name: 'CDLLife Student Site',
    description: 'Latency-optimized chat assistant that surfaces SRD references and house rules contextually.',
    stack: ['Python','FastAPI','Redis','WebSockets'],
    link: 'https://student.cdllife.com/',
    highlight: 'Lead Developer creating this entire site to assist users who are interest in a trucking career find schools to best fit their needs.'
  },
  {
    name: 'Netsolus Main Site',
    description: 'Latency-optimized chat assistant that surfaces SRD references and house rules contextually.',
    stack: ['Python','FastAPI','Redis','WebSockets'],
    link: 'https://netsolus.com/',
    highlight: 'Lead Developer redesigning the main site for improved user experience and performance.'
  },
  {
    name: 'Vagabonds Almanac',
    description: 'Personal fun site I have created to test random ideas',
    stack: ['svelte','HTML','CSS','JavaScript','Node.js'],
    link: 'https://vagabonds-almanac-oy1mui73l-fin23.vercel.app/',
    highlight: 'A fun passion project site used to test personal ideas.'
  },
    {
    name: 'Midwest Hack-a-thon competition',
    description: 'Competed in the Hack Midwest hack-a-thon two separate years 1st year entered with a team and 2nd entered as an individual',
    stack: ['svelte','HTML','CSS','JavaScript','Node.js'],
    highlight: '1st hack a thon our team created a web three browswer plugin for you crypto wallets that would allow you to view and create your own NFTs. The second hack a thon I created a ai app / pipeline that would take in audio files and transcribe them to text and other languages. '
  },

];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl text-mana-gold mb-10">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <article key={p.name} className="group relative rounded-lg border border-mana-gold/20 bg-mana-black/60 p-5 flex flex-col shadow-card hover:shadow-lg hover:border-mana-gold/40 transition">
              <h3 className="text-lg font-semibold text-mana-white group-hover:text-mana-gold transition-colors">{p.name}</h3>
              <p className="mt-2 text-sm text-mana-white/70 flex-1">{p.description}</p>
              {p.highlight && <p className="mt-3 text-xs text-mana-gold/80 italic">{p.highlight}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(s => <span key={s} className="text-[10px] uppercase tracking-wide bg-mana-black/70 border border-mana-gold/30 text-mana-gold/90 px-2 py-1 rounded">{s}</span>)}
              </div>
              {p.link && <a href={p.link} className="mt-4 inline-flex text-xs font-medium text-mana-gold hover:underline">View</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
