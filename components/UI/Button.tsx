'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  content: string;
  href: string;
  target?: string;
  buttonColor: string;
  backgroundColor: string;
  buttonHover: string;
  backgroundHover: string;
  description?: string;
  isMain?: boolean;
  disabled?: boolean;
}

const Button = ({
  content,
  href,
  target,
  buttonColor,
  backgroundColor,
  buttonHover,
  backgroundHover,
  description,
  isMain,
  disabled,
}: ButtonProps) => {
  return (
    <div className={`${isMain ? 'bg-main-black' : 'bg-main-white'} rounded-xl`}>
      <Link href={href} target={target} rel="noopener noreferrer canonical">
        <motion.button
          aria-label={content}
          disabled={disabled}
          aria-description={description}
          className={`font-semibold text-2xl px-[26.5px] py-[14.5px] w-full rounded-xl ${buttonColor} ${backgroundColor} ${
            isMain ? 'border-2 border-main-black' : ''
          } ${disabled ? 'cursor-not-allowed' : ''}`}
          initial={{ y: '-6px', x: '6px' }}
          whileHover={{
            y: '0',
            x: '0',
            backgroundColor: backgroundHover,
            color: buttonHover,
            transition: { duration: 0.3 },
          }}
        >
          {content}
        </motion.button>
      </Link>
    </div>
  );
};

export default Button;
