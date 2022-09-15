import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ThemeChanger from './ThemeChanger';
import NavItem from '../UI/NavItem';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';
import MobileNavigation from './MobileNavigation';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="global-style">
      <div className="wrapper flex items-center justify-between py-10 bg-pink-100">
        <Link href="/">
          <a className="w-10 hover:scale-110 transform transition ease-in-out duration-700">
            <Image src="/vercel.svg" alt="profile image" width={20} height={20} layout="responsive" />
          </a>
        </Link>
        <ul className="hidden lg:inline-flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/articles">Articles</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/speaking">Speaking</NavItem>
        </ul>
        <span className="hidden lg:block">
          <ThemeChanger />
        </span>
        <div className="lg:hidden flex items-center gap-x-6">
          <ThemeChanger />
          <MobileNavigation />
          {/* <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
          <div id="burger-menu" className={isOpen ? 'translate-x-0' : 'translate-x-full'}>
            <div className="w-full">
              {[1, 2, 3].map((navItem) => {
                return <div>navItem</div>;
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
