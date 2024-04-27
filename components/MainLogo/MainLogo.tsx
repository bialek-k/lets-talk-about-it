import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Link from 'next/link';

const MainLogo = ({ className }: { className: string }) => {
  return (
    <Link className={className} href="/">
      <MainLogoIcon />
    </Link>
  );
};

export default MainLogo;
