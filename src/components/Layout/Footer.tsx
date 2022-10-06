import Link from 'next/link';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};
function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className="transition hover:text-teal-500 dark:hover:text-teal-400">{children}</a>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="wrapper shadow-sm border-x border-neutral-200/50 bg-white dark:bg-zinc-800 dark:border-neutral-700/50">
      <div className="border-t border-zinc-200/80 py-10 dark:border-zinc-700">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-200">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://www.linkedin.com/in/facundo-martin-88637422b/" target="_blank" rel="noreferrer" className="font-medium hover:underline">
              Facundo Martin
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
