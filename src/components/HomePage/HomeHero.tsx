import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../UI/SocialIcons';

export interface SocialLinkProps extends LinkProps {
  icon: React.ElementType;
}
function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link {...props}>
      <a className="group -m-1 p-1 cursor-pointer">
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-800 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>
    </Link>
  );
}

function HomeHero() {
  return (
    <section className="section pt-10 wrapper">
      <div className="w-14 h-14 rounded-full mb-4 bg-black">
        {/* <Image src="/vercel.svg" alt="Facundo Martin logo image" width={50} height={50} laoyut="responsive" /> */}
      </div>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">React developer.</h1>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">NextJS enthusiast.</h1>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Tailwind CSS maniac.</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Facundo, a Frontend Developer based in Roseville, California. I build awesome web applications with Next.js and Tailwind CSS. <br></br>Boringly
          normal. Dad of a beautiful lab. Reformed League of Legends player.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink href="#" aria-label="Follow on Twitter" icon={TwitterIcon} />
          <SocialLink href="#" aria-label="Follow on Instagram" icon={InstagramIcon} />
          <SocialLink href="https://github.com" aria-label="Follow on GitHub" icon={GitHubIcon} />
          <SocialLink href="https://linkedin.com" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
