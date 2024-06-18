import FacebookIcon from '@/IconsSVG/FacebookIcon';
import Link from 'next/link';

interface FacebookProps {
  href: string;
  className?: string;
}

export const Facebook = ({ href, className }: FacebookProps) => {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon />
    </Link>
  );
};
export default Facebook;
