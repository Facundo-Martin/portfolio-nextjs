import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import Headshot from '../UI/Headshot';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  return (
    <header className="wrapper flex items-center justify-between py-6 bg-white dark:bg-zinc-800 shadow-sm border-x border-neutral-200/50 dark:border-neutral-700/50">
      {router.asPath !== '/' ? <Headshot /> : <span></span>}
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}

export default Header;
