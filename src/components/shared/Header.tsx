import Image from 'next/image';
import Link from 'next/link';
// import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
// import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='tw-w-full tw-border-b'>
      <div className='tw-wrapper tw-flex tw-items-center tw-justify-between'>
        <Link href='/' className='tw-w-36'>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='Evently Logo'
          />
        </Link>

        <nav className='md:tw-flex-between tw-hidden tw-w-full tw-max-w-xs'>
          <NavItems />
        </nav>
        <div className='flex w-32 justify-end gap-3'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
