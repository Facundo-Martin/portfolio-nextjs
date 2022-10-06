import Image from 'next/image';
import Link from 'next/link';
// Components
import { Button } from '../UI/Button';
// Icons
import { ArrowDownIcon, BriefcaseIcon, EnvelopeIcon, HomeIcon, InboxIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon, MapIcon, PhoneIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import { resume } from '../../utils';
import Card from '../UI/Card';

type NavLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  icon: React.ElementType;
};
function NavLink({ className, href, children, icon: Icon }: NavLinkProps) {
  return (
    <li className={className}>
      <Link href={href}>
        <a className="group flex gap-x-3 text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
          <Icon className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-teal-500" />
          <span>{children}</span>
        </a>
      </Link>
    </li>
  );
}

function HomeNav() {
  return (
    <Card>
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 pb-4 border-b border-zinc-200 dark:border-zinc-600/50">
        <MapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Navigation</span>
      </h2>
      <ul role="list">
        <nav className="pl-6 pt-1">
          <NavLink href="/" icon={HomeIcon} className="mt-4">
            Home
          </NavLink>
          <NavLink href="/projects" icon={Square3Stack3DIcon} className="mt-4">
            Projects
          </NavLink>
          <NavLink href="/about" icon={InformationCircleIcon} className="mt-4">
            About
          </NavLink>
          <NavLink href="/contact" icon={InboxIcon} className="mt-4">
            Contact
          </NavLink>
        </nav>
        <NavLink
          href="mailto:facundomartin98@gmail.com?subject=React Developer Position&body=Hi Facundo, I'm (name) and I work at (company) as a (position). We are currently looking for a React Developer who is well versed in (skills). After seeing your portfolio and work experience, we believe you are a strong candidate for this position. Please contact us at (contact info)"
          icon={EnvelopeIcon}
          className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-600/50"
        >
          facundomartin98@gmail.com
        </NavLink>
        <NavLink href="tel:+1-279-977-5880" icon={PhoneIcon} className="mt-4">
          (279) 977 - 5880
        </NavLink>
      </ul>
    </Card>
  );
}

function Resume() {
  return (
    <Card>
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-zinc-500/50">
              <a href={role.url} target="_blank" rel="noreferrer">
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
              <dd className="ml-auto {text-xs text-zinc-400 dark:text-zinc-500">
                <span className="text-sm">
                  {role.start} - {role.end}
                </span>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button className="group mt-6 w-full">
        <a download href="/FacundoMartin.pdf" className="flex items-center gap-2">
          {/* <a className="flex items-center gap-2"> */}
          {/* <a download href="#" className="flex items-center gap-2"> */}
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 group-hover:stroke-zinc-600 transition group-active:stroke-zinc-600 dark:stroke-zinc-300 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-100" />
        </a>
      </Button>
    </Card>
  );
}
function HomeResume() {
  return (
    <div className="space-y-8 max-w-sm">
      <Resume />
      <HomeNav />
    </div>
  );
}

export default HomeResume;
