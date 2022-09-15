import Link from 'next/link';
import ThemeChanger from './ThemeChanger';
import NavItem from '../UI/NavItem';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

function Header() {
  return (
    <div className="global-style">
      <div className="wrapper flex items-center justify-between py-10 bg-pink-100">
        <Link href="/">
          <a className="w-10 hover:scale-110 transform transition ease-in-out duration-700">
            <Image src="/vercel.svg" alt="profile image" width={20} height={20} layout="responsive" />
          </a>
        </Link>
        <ul className="hidden md:inline-flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/articles">Articles</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/speaking">Speaking</NavItem>
        </ul>
        <span className="hidden md:block">
          <ThemeChanger />
        </span>
        <div className="md:hidden flex items-center gap-x-6">
          <ThemeChanger />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}

export default Header;
