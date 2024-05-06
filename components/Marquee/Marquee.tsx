'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';
const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" py-[66px] bg-main-yellow w-screen">
      <Marquee speed={100} autoFill>
        {children}
      </Marquee>
    </div>
  );
};

export default Carousel;
