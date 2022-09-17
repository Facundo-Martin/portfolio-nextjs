import { ArrowDownIcon, BriefcaseIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import culturalcare from '../../assets/logos/culturalcare.png';
import spume from '../../assets/logos/spume.png';
import theodinproject from '../../assets/logos/theodinproject.png';
import logoAirbnb from '../../assets/logos/airbnb.svg';
import logoFacebook from '../../assets/logos/facebook.svg';
import logoPlanetaria from '../../assets/logos/planetaria.svg';
import logoStarbucks from '../../assets/logos/starbucks.svg';
import { Button } from '../UI/Button';

function Newsletter() {
  return (
    <form action="/thank-you" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MagnifyingGlassIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

function Resume() {
  const resume: any[] = [
    {
      company: 'Spume',
      url: 'https://spume.io/',
      title: 'React Developer',
      logo: spume,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Frontend Development',
      title: 'The Odin Project | Self-taught',
      url: 'https://www.theodinproject.com/',
      logo: theodinproject,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Cultural Care',
      url: 'https://culturalcare.com/',
      title: 'Au Pair',
      logo: culturalcare,
      start: '2020',
      end: '2022',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 max-w-sm">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-zinc-500/50">
              <a href={role.url} target="_blank" referrerPolicy="no-referrer">
                <div className="w-8">
                  <Image src={role.logo} alt="" width={20} height={20} unoptimized layout="responsive" className="rounded-full" />
                </div>
              </a>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>{role.start.label ?? role.start}</time> <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>{role.end.label ?? role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button className="group mt-6 w-full">
        <a className="flex items-center gap-2">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 group-hover:stroke-zinc-600 transition group-active:stroke-zinc-600 dark:stroke-zinc-300 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-100" />
        </a>
      </Button>
    </div>
  );
}
function HomeResume() {
  return (
    <div className="space-y-8">
      <Resume />
      <Newsletter />
    </div>
  );
}

export default HomeResume;
