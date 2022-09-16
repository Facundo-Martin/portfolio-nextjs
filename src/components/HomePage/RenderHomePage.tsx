import React from 'react';
import HomeHero from './HomeHero';
import HomePhotos from './HomePhotos';
import HomeResume from './HomeResume';
import TechStack from './TechStack';

function RenderHomePage() {
  return (
    <>
      <HomeHero />
      <HomePhotos />
      <section className="flex flex-col items-center gap-y-10 lg:gap-y-0 lg:flex-row lg:items-start justify-between section">
        <TechStack />
        <HomeResume />
      </section>
    </>
  );
}

export default RenderHomePage;
