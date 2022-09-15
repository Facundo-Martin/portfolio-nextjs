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
    <footer className="wrapper">
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/speaking">Speaking</NavLink>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">&copy; {new Date().getFullYear()} Facundo Martin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
