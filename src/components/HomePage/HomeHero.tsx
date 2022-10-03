import React from 'react';
import Headshot from '../UI/Headshot';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../UI/SocialIcons';

export interface SocialLinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  icon: React.ElementType;
}
function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <a className="group -m-1 p-1 cursor-pointer" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-800 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function HomeHero() {
  return (
    <section className="section pt-10 wrapper">
      <Headshot width={16} />
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">React developer.</h1>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">NextJS enthusiast.</h1>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Tailwind CSS maniac.</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Facundo, a Frontend Developer based in Roseville, California. <br />I build awesome web applications with Next.js and Tailwind CSS. <br />
          Boringly normal. Dad of a beautiful lab. Reformed League of Legends player.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink href="#" aria-label="Follow on Twitter" icon={TwitterIcon} />
          <SocialLink href="#" aria-label="Follow on Instagram" icon={InstagramIcon} />
          <SocialLink href="https://github.com/Facundo-Martin" aria-label="Follow on GitHub" target="_blank" icon={GitHubIcon} />
          <SocialLink href="https://www.linkedin.com/in/facundo-martin-88637422b/" aria-label="Follow on LinkedIn" target="_blank" icon={LinkedInIcon} />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
