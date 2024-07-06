'use client';
import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Link from 'next/link';

interface MainLogoProps {
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
}

const MainLogo = ({ className, setIsOpen }: MainLogoProps) => {
  return (
    <Link
      className={className}
      href="/"
      onClick={() => setIsOpen && setIsOpen(false)}
      rel="noopener noreferrer"
    >
      <MainLogoIcon />
    </Link>
  );
};

export default MainLogo;
