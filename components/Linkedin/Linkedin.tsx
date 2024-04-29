import LinkedinIcon from '@/IconsSVG/LinkedinIcon';
import Link from 'next/link';

interface LinkedinProps {
  href: string;
  className?: string;
}

export default function Linkedin({ href, className }: LinkedinProps) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon />
    </Link>
  );
}
