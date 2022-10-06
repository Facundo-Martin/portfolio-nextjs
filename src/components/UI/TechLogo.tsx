import React from 'react';
import { techStack } from '../../utils';

type TechLogoProps = {
  tech: string;
};
function TechLogo({ tech }: TechLogoProps) {
  let techData = techStack.find((x) => x.name === tech);

  if (!techData) return;

  return <div>TechLogo</div>;
}

export default TechLogo;
