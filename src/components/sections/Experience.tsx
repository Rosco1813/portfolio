import React from 'react';

interface Role {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    company: 'CDLLife',
    title: 'Software Developer',
    period: '2021 – Present',
    bullets: [
      'Lead engineering for CDLLife mobile app (largest trucking social platform by active users)',
      'Own GitHub repo governance: branching strategy, PR standards, code reviews, automated checks, and project board prioritization.',
      'Maintain end‑to‑end delivery pipelines (App Store Connect & Google Play) including build signing, versioning, phased rollouts, and crash/metric monitoring.',
      'Shipped cross‑stack features (frontend + API) improving engagement.',
      'Drove cross‑functional alignment with design/moderation/leadership.',
      'Delivered admin & student‑facing tools expanding product ecosystem.',
      'Co-Developed a CDL student website to help potential new truck drivers find cdl trucking schools near them all around the country.',
    ]
  },
  {
      company: 'Netsolus',
    title: 'NOC Engineer',
    period: '2019 – 2020',
    bullets: [
      'Maintained and modernized the Netsolus website & customer portal sites (performance, accessibility, SEO).',
      'Responding to incidents and service requests in a timely manner.',
      'Collaborating with cross-functional teams to implement network solutions.',
      'Developed support ticket interface with real‑time status updates, attachment handling, and role‑based visibility.',
      'Documenting network configurations and procedures for knowledge sharing.',
      'Hosted all small municipality government websites from the U.S. and assisted with regularly scheduled monthly updates to sites.',
    ]
  },
  {
    company: 'Independence School District',
    title: 'High School Teacher',
    period: '2017 – 2019',
    bullets: [
      'Responsibilities included maintaining and collecting reliable data in a multitude of areas , such as assessments, daily performance, behavior management, individual IEP goals, and student benchmarks for grading purposes.',
      'Extensive training in PBIS (positive behavior intervention supports) which are managerial skills to boost student performance and increase positive student behaviors in and out of the classroom.',
      'Headed many after school activities including a chess club, DND after school, and showed a clear drive to lead and go the extra mile for my employer.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-mana-black/40">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-display text-3xl text-mana-gold mb-10">Experience</h2>
        <ol className="space-y-10 relative">
          {roles.map(r => (
            <li key={r.company} className="relative pl-6 border-l border-mana-gold/30">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-mana-gold shadow-card" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold text-mana-white">{r.title} <span className="text-mana-gold/70">@ {r.company}</span></h3>
                <span className="text-xs uppercase tracking-wide text-mana-gold/70">{r.period}</span>
              </div>
              <ul className="mt-3 space-y-2 list-disc ml-5 marker:text-mana-gold/70 text-mana-white/80 text-sm">
                {r.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
