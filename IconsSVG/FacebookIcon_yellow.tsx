'use client';

import { SVGMotionProps, motion } from 'framer-motion';

const FacebookIcon_yellow = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    width={126}
    height={126}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 1, fill: '#E2FF02' }}
    whileHover={{ scale: 1.1, fill: '#F3FF99' }}
    {...props}
  >
    <path d="M120.5.5H5.5c-2.766 0-5 2.234-5 5v115c0 2.766 2.234 5 5 5h115c2.766 0 5-2.234 5-5V5.5c0-2.766-2.234-5-5-5Zm-14.437 36.484h-9.985c-7.828 0-9.344 3.72-9.344 9.188v12.047h18.688l-2.438 18.86h-16.25V125.5H67.25V77.094H50.953V58.219H67.25V44.312c0-16.14 9.86-24.937 24.266-24.937 6.906 0 12.828.516 14.562.75v16.86h-.015Z" />
  </motion.svg>
);

export default FacebookIcon_yellow;
