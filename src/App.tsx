import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ross Jameson | Resume</title>
        <meta name="description" content="Resume & portfolio of Ross Jameson. Software engineer focused on game-related systems." />
      </Helmet>
      <div className="relative">
        <Navigation />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
