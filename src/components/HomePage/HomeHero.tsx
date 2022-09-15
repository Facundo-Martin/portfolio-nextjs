import Link, { LinkProps } from 'next/link';
import React from 'react';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../UI/SocialIcons';

export interface SocialLinkProps extends LinkProps {
  icon: React.ElementType;
}
function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function HomeHero() {
  return (
    <div className="section">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Software designer, founder, and amateur astronaut.</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that
          empower regular people to explore space on their own terms.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink href="https://twitter.com" aria-label="Follow on Twitter" icon={TwitterIcon} />
          <SocialLink href="https://instagram.com" aria-label="Follow on Instagram" icon={InstagramIcon} />
          <SocialLink href="https://github.com" aria-label="Follow on GitHub" icon={GitHubIcon} />
          <SocialLink href="https://linkedin.com" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;