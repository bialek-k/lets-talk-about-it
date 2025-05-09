import YoutubeIcon from '@/IconsSVG/YoutubeIcon';
import Link from 'next/link';

interface YoutubeProps {
  href: string;
  className?: string;
  label?: string;
}

const Youtube = ({ href, className, label }: YoutubeProps) => {
  return (
    <Link
      aria-label={label}
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <YoutubeIcon />
    </Link>
  );
};

export default Youtube;
