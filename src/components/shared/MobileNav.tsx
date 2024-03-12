import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className='md:tw-hidden'>
      <Sheet>
        <SheetTrigger className='tw-align-middle'>
          <Image
            src='/assets/icons/menu.svg'
            width={24}
            height={24}
            alt='menu'
            className='tw-cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent className='tw-flex tw-flex-col tw-gap-6 tw-bg-white md:tw-hidden '>
          <Image
            src='/assets/images/logo.svg'
            alt='logo'
            width={128}
            height={38}
          />
          <Separator className='tw-border tw-border-gray-50' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
