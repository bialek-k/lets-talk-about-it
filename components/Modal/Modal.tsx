'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ChevronIcon from '@/IconsSVG/ChevronIcon';
import { fetchEvents } from '@/routes/routes';
import Linkedin from '../Linkedin/Linkedin';
import Facebook from '../Facebook/Facebook';
import Youtube from '../Youtube/Youtube';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { AnimatePresence, motion } from 'framer-motion';
import MainLogo from '../MainLogo/MainLogo';
import toRoman from '../UI/NumberToRoman';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  location: string;
}

export default function MobileNav({
  isOpen,
  setIsOpen,
  location,
}: MobileNavProps) {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  function toggleSubMenu() {
    setSubMenuOpen(!isSubMenuOpen);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
            setSubMenuOpen(false);
          }}
          className="bg-slate-900/20 backdrop-blur  fixed h-screen inset-0 z-50 grid items-baseline overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, x: '100vw', y: '-100vh' }}
            animate={{ scale: 1, x: 0, y: 0 }}
            exit={{ scale: 0, x: '100vw', y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 100 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-main-black border-2 border-solid border-main-yellow text-white p-6 rounded-lg w-full max-w-[328px] shadow-xl cursor-default relative overflow-hidden flex flex-col items-center gap-10 overflow-y-auto m-auto"
          >
            {/* Button Close */}
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute w-7 h-7 z-30 top-4 right-4 flex items-center justify-center hamburger ${
                isOpen ? 'hamburger_active' : ''
              }`}
              aria-label="Close Mobile Menu"
            >
              <span />
            </button>
            <div>
              <iframe
                src={`http://maps.google.com/maps?q=${location}&z=10&output=embed`}
                width="100%"
                height="450"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
