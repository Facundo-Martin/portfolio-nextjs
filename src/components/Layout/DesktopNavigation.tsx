import ThemeChanger from './ThemeChanger';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useRouter } from 'next/router';

type NavItemProps = {
  children?: React.ReactNode;
  href: string;
};

function NavItem({ href, children }: NavItemProps) {
  const router = useRouter();
  const isActive = router.pathname == href;
  return (
    <li>
      <Link href={href}>
        <a
          className={clsx(
            'relative block px-3 py-2 transition',
            isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400'
          )}
        >
          {children}
          {isActive && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
          )}
        </a>
      </Link>
    </li>
  );
}

export default function DesktopNavigation() {
  return (
    <>
      <ul className="hidden md:inline-flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
      <span className="hidden md:block">
        <ThemeChanger />
      </span>
    </>
  );
}
