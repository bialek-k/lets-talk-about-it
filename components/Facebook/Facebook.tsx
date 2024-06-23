'use client';
import FacebookIcon from '@/IconsSVG/FacebookIcon';
import Link from 'next/link';

interface FacebookProps {
  href: string;
  className?: string;
}

const Facebook = ({ href, className }: FacebookProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link className={className} href={href} onClick={handleClick}>
      <FacebookIcon />
    </Link>
  );
};

export default Facebook;
