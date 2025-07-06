'use client';
import FacebookIcon from '@/IconsSVG/FacebookIcon';
import clsx from 'clsx';
import Link from 'next/link';

interface FacebookProps {
  href: string;
  className?: string;
  label?: string;
}

const Facebook = ({ href, className, label }: FacebookProps) => {
  return (
    <Link
      aria-label={label}
      className={clsx('flex items-center', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon />
    </Link>
  );
};

export default Facebook;
