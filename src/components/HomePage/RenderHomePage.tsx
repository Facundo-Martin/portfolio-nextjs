import React from 'react';
import HomeHero from './HomeHero';
import HomeMain from './HomeMain';
import HomePhotos from './HomePhotos';

function RenderHomePage() {
  return (
    <>
      <HomeHero />
      <HomePhotos />
      <HomeMain />
    </>
  );
}

export default RenderHomePage;
