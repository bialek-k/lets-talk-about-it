'use client';
import FacebookIcon from '@/IconsSVG/FacebookIcon';

interface FacebookProps {
  className?: string;
}

const Facebook = ({ className }: FacebookProps) => {
  return (
    <div className={className}>
      <FacebookIcon />
    </div>
  );
};

export default Facebook;
