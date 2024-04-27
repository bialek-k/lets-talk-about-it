import YoutubeIcon from '@/IconsSVG/YoutubeIcon';
import Link from 'next/link';

interface YoutubeProps {
  href: string;
  className?: string;
}

export default function Youtube({ href, className }: YoutubeProps) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <YoutubeIcon />
    </Link>
  );
}
