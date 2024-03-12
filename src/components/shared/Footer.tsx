import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='tw-flex-center tw-wrapper tw-flex-between tw-flex tw-flex-col tw-gap-4 tw-p-5 tw-text-center sm:tw-flex-row'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.svg'
            alt='logo'
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Evently.All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
