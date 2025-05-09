'use client';
import LinkedinIcon from '@/IconsSVG/LinkedinIcon';
import Link from 'next/link';

interface LinkedinProps {
  href: string;
  className?: string;
  shouldAnimate?: boolean;
  label?: string;
}

const Linkedin = ({ href, className, shouldAnimate, label }: LinkedinProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link
      aria-label={label}
      className={className}
      href={href}
      onClick={handleClick}
    >
      <LinkedinIcon shouldAnimate={shouldAnimate} />
    </Link>
  );
};

export default Linkedin;
