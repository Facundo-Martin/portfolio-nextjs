import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

function Header() {
  return (
    <header className="wrapper flex items-center justify-between py-6 bg-pink-100">
      <Link href="/">
        <a className="w-10 hover:scale-110 transform transition ease-in-out duration-700">
          <Image src="/vercel.svg" alt="profile image" width={20} height={20} layout="responsive" />
        </a>
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}

export default Header;
