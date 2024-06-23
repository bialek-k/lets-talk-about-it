'use client';
import LinkedinIcon from '@/IconsSVG/LinkedinIcon';
import Link from 'next/link';

interface LinkedinProps {
  href: string;
  className?: string;
  shouldAnimate?: boolean;
}

const Linkedin = ({ href, className, shouldAnimate }: LinkedinProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link className={className} href={href} onClick={handleClick}>
      <LinkedinIcon shouldAnimate={shouldAnimate} />
    </Link>
  );
};

export default Linkedin;
