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

export default NavItem;
