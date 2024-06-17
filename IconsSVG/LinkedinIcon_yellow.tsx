'use client';

import { SVGMotionProps, motion } from 'framer-motion';

const LinkedinIcon_yellow = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    width={120}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 1, fill: '#E2FF02' }}
    whileHover={{ scale: 1.1, fill: '#F3FF99' }}
    href="https://www.linkedin.com/groups/14230011"
    {...props}
  >
    <path d="M106.667 0A13.334 13.334 0 0 1 120 13.333v93.334A13.336 13.336 0 0 1 106.667 120H13.333A13.335 13.335 0 0 1 0 106.667V13.333A13.333 13.333 0 0 1 13.333 0h93.334Zm-3.334 103.333V68A21.731 21.731 0 0 0 81.6 46.267c-5.667 0-12.267 3.466-15.467 8.666v-7.4h-18.6v55.8h18.6V70.467c0-5.134 4.134-9.334 9.267-9.334a9.334 9.334 0 0 1 9.333 9.334v32.866h18.6ZM25.867 37.067a11.2 11.2 0 0 0 11.2-11.2c0-6.2-5-11.267-11.2-11.267A11.267 11.267 0 0 0 14.6 25.867c0 6.2 5.067 11.2 11.267 11.2Zm9.266 66.266v-55.8H16.667v55.8h18.466Z" />
  </motion.svg>
);

export default LinkedinIcon_yellow;
