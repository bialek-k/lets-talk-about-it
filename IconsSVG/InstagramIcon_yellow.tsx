'use client';

import { SVGMotionProps, motion } from 'framer-motion';

const InstagramIcon_yellow = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    width={126}
    height={126}
    viewBox="0 0 126 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 1, fill: '#E2FF02' }}
    whileHover={{ scale: 1.1, fill: '#F3FF99' }}
    {...props}
  >
    <path d="M88.2 0H37.8C16.9 0 0 16.9 0 37.8v50.4C0 109.1 16.9 126 37.8 126h50.4c20.9 0 37.8-16.9 37.8-37.8V37.8C126 16.9 109.1 0 88.2 0Zm25.2 88.2c0 13.9-11.3 25.2-25.2 25.2H37.8c-13.9 0-25.2-11.3-25.2-25.2V37.8C12.6 23.9 23.9 12.6 37.8 12.6h50.4c13.9 0 25.2 11.3 25.2 25.2v50.4Z" />
    <path d="M63 31.5c-17.4 0-31.5 14.1-31.5 31.5s14.1 31.5 31.5 31.5 31.5-14.1 31.5-31.5S80.4 31.5 63 31.5Zm0 50.4c-10.4 0-18.9-8.5-18.9-18.9S52.6 44.1 63 44.1s18.9 8.5 18.9 18.9S73.4 81.9 63 81.9Z" />
    <circle cx="95.5" cy="30.5" r="6.3" />
  </motion.svg>
);

export default InstagramIcon_yellow;
