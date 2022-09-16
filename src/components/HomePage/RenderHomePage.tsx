import React from 'react';
import HomeHero from './HomeHero';
import HomeMain from './HomeMain';
import HomePhotos from './HomePhotos';
import HomeResume from './HomeResume';

function RenderHomePage() {
  return (
    <>
      <HomeHero />
      <HomePhotos />
      <HomeMain />
      <section className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between section">
        <div>Figure out later!</div>
        <HomeResume />
      </section>
    </>
  );
}

export default RenderHomePage;
