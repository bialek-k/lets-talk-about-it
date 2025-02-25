import InstagramIcon from '@/IconsSVG/InstagramIcon';
import clsx from 'clsx';
import Link from 'next/link';

interface InstagramProps {
  href: string;
  className?: string;
}

const Instagram = ({ href, className }: InstagramProps) => {
  return (
    <Link
      className={clsx('flex items-center', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon />
    </Link>
  );
};

export default Instagram;
