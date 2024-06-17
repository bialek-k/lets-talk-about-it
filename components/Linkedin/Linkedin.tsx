import LinkedinIcon from '@/IconsSVG/LinkedinIcon';
import Link from 'next/link';

interface LinkedinProps {
  href: string;
  className?: string;
  shouldAnimate?: boolean;
}

export default function Linkedin({
  href,
  className,
  shouldAnimate,
}: LinkedinProps) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon shouldAnimate={shouldAnimate} />
    </Link>
  );
}
