'use client';

import { init } from '@graphql-codegen/cli';
import { motion } from 'framer-motion';

interface ButtonProps {
  content: string;
  buttonColor: string;
  backgroundColor: string;
  buttonHover: string;
  backgroundHover: string;
}

const Button = ({
  content,
  buttonColor,
  backgroundColor,
  buttonHover,
  backgroundHover,
}: ButtonProps) => {
  return (
    <div className="bg-main-white ">
      <motion.button
        className={`font-semibold text-2xl px-[44.5px] py-[14.5px] rounded ${buttonColor} ${backgroundColor}`}
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
    </div>
  );
};

export default Button;
