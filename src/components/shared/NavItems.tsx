'use client';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className='md:tw-flex-between tw-flex tw-w-full tw-flex-col tw-items-start tw-gap-5 md:tw-flex-row '>
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'tw-text-primary-500'
            } tw-flex-center tw-p-medium-16 tw-whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
