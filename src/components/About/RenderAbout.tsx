import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import FacundoDevCard from '../../assets/mydevcard.png';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../UI/SocialIcons';
import { SVGProps } from 'react';
import Image from 'next/image';
import Deadpool from '../../assets/Deadpool.gif';

function MaximumEffort() {
  return (
    <span className="group relative">
      <span className="underline underline-offset-2">maximum effort.</span>
      <div className="hidden group-hover:block absolute -top-40 w-[28rem] ">
        <Image src={Deadpool} width={800} height={800} layout="responsive" />
      </div>
    </span>
  );
}
type SocialLinkProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  icon: React.ElementType;
};
function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <a href={href} target="_blank" rel="noreferrer">
        <div className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </div>
      </a>
    </li>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function RenderAbout() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta name="description" content="I’m Spencer Sharp. I live in New York City, where I design the future." />
      </Head>
      <div className="section">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-sm ">
              <Image src={FacundoDevCard} alt="Facundo Martin dev card" height={480} width={340} />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Facundo Martin. I live in California, but also in my own world.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I never thought I'd end up as as Software Developer, but since I'm already here I might as well do it to the best of my ability. So I'm gonna do
                this the old-fashioned way, with two swords and with <MaximumEffort />
              </p>
              <p>
                I enjoy working at startup environments, where things are fast-paced and we need to figure things out as a team. I like the level of{' '}
                <span className="underline">innovation</span> and <span className="underline">collaboration</span> that startups bring to the table, as well as
                the opportunity to take more responsibility and ownership for my code.
              </p>
              <p>
                I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken
                legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family
                computer from space.
              </p>
              <p>
                Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the
                next generation of kids really <em>can</em> make it to orbit — from the comfort of their own backyards.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink icon={TwitterIcon} aria-label="Follow on Twitter">
                Follow on Twitter
              </SocialLink>
              <SocialLink icon={InstagramIcon} aria-label="Follow on Instagram" className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Facundo-Martin" icon={GitHubIcon} aria-label="Follow on Github" className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/facundo-martin-88637422b/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="mailto:spencer@planetaria.tech" icon={MailIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
