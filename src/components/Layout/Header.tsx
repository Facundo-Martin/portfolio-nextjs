import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ThemeChanger from './ThemeChanger';
import { clsx } from 'clsx';
import NavItem from '../UI/NavItem';

function Header() {
  const router = useRouter();
  return (
    <div className="global-style">
      <div className="wrapper flex items-center justify-between py-10 bg-pink-100">
        <div>My avatar </div>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/articles">Articles</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/speaking">Speaking</NavItem>
        </ul>
        <ThemeChanger />
      </div>
    </div>
  );
}

export default Header;
