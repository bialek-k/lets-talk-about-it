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
}: ButtonProps) => {
  return (
    <div className="bg-main-white rounded-xl">
      <Link href={href} target={target} rel="noopener noreferrer canonical">
        <motion.button
          aria-label={content}
          aria-description={description}
          className={`font-semibold text-2xl px-[59.5px] py-[14.5px] rounded-xl ${buttonColor} ${backgroundColor}`}
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
