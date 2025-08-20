import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-display text-3xl text-mana-gold mb-10">Education</h2>
        <div className="grid gap-8 sm:grid-cols-2">
     <div className="rounded-lg border border-mana-gold/20 bg-mana-black/60 p-5 shadow-card">
            <h3 className="text-lg font-semibold text-mana-white">Full Stack Boot Camp</h3>
             <p className="text-sm text-mana-gold/80 mt-1">KU (Kansas University Edwards Campus)</p>
            <p className="text-xs text-mana-white/60 mt-2">
            A full stack flex course that gave me the knowledge and skills to build dynamic end-to-end web applications and become a full stack web developer.
            The program was rigorous, fast-paced, and covered both the theory and application of web development through hands-on projects. 
            </p>
          </div>

          <div className="rounded-lg border border-mana-gold/20 bg-mana-black/60 p-5 shadow-card">
            <h3 className="text-lg font-semibold text-mana-white">B.S. Secondary Education</h3>
            <p className="text-sm text-mana-gold/80 mt-1">UMKC (University of Missouri-Kansas City)</p>
            <p className="text-xs text-mana-white/60 mt-2">Graduated with a bachelor's degree in Secondary Education to teach High School History Graduated with 3.5 GPA</p>
          </div>



          <div className="rounded-lg border border-mana-gold/20 bg-mana-black/60 p-5 shadow-card">
            <h3 className="text-lg font-semibold text-mana-white">Masters in Special Education</h3>
            <p className="text-sm text-mana-gold/80 mt-1">Witchita State</p>
            <p className="text-xs text-mana-white/60 mt-2">
            21 Credit hours towards a Masters in Special Education, ended with a 3.6 GPA</p>
          </div>

     
        </div>
      </div>
    </section>
  );
};
