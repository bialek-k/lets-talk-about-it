'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ChevronIcon from '@/IconsSVG/ChevronIcon';
import { fetchEvents, type NavLink, type NavSection } from '@/routes/routes';
import Linkedin from '../Linkedin/Linkedin';
import Youtube from '../Youtube/Youtube';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { AnimatePresence, motion } from 'framer-motion';
import MainLogo from '../MainLogo/MainLogo';
import toRoman from '../UI/NumberToRoman';
import { usePathname } from 'next/navigation';
import Instagram from '../Instagram/Instagram';
import Facebook from '@/components/Facebook/Facebook';
import { NavItem } from '@/components/Navbar/NavItem';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  locale: 'pl' | 'en';
}

const MobileNav = ({ isOpen, setIsOpen, locale }: MobileNavProps) => {
  const currentPath = usePathname();
  const { t } = useTranslation();
  const [routes, setRoutes] = useState<NavSection[]>([]);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === '/#about') {
      if (currentPath === '/' || currentPath === '/en') return true;
    }
    if (currentPath.endsWith(path)) return true;
    if (path === 'events' && currentPath.includes('events')) {
      return true;
    }
    if (path === 'workshops' && currentPath.includes('workshops')) {
      return true;
    }
    return currentPath === path;
  };

  useEffect(() => {
    const fetchRoutes = async () => {
      const fetchedRoutes = (await fetchEvents(locale)) as NavSection[];
      setRoutes(fetchedRoutes);
    };
    fetchRoutes();
  }, [locale]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
            setOpenSubMenuIndex(null);
          }}
          className="bg-slate-900/20 backdrop-blur  fixed h-screen inset-0 z-50 grid items-baseline overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, x: '100vw', y: '-100vh' }}
            animate={{ scale: 1, x: 0, y: 0 }}
            exit={{ scale: 0, x: '100vw', y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-main-black border-2 border-solid border-main-yellow text-white p-6 rounded-lg w-full max-w-[328px] shadow-xl cursor-default relative overflow-hidden flex flex-col items-center gap-10 overflow-y-auto m-auto"
          >
            {/* Button Close */}
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute w-7 h-7 z-30 top-4 right-4 flex items-center justify-center hamburger ${
                isOpen ? 'hamburger_active' : ''
              }`}
              aria-label="Zamknij menu"
            >
              <span />
            </button>
            {/* LOGO */}
            <MainLogo
              className="w-[80px] h-[80px]"
              setIsOpen={() => setIsOpen(false)}
            />
            {/* NAVIGATION */}
            <div className="flex flex-col items-start gap-5 self-start pl-[13px] w-full text-base font-normal">
              {routes.map((route, index) =>
                'path' in route ? (
                  <NavItem key={index} route={route} isActive={isActive} />
                ) : (
                  <SubMenu
                    key={index}
                    index={index}
                    route={route}
                    setIsOpen={setIsOpen}
                    isActive={isActive}
                    isOpen={openSubMenuIndex === index}
                    setOpen={(isOpen) =>
                      setOpenSubMenuIndex(isOpen ? index : null)
                    }
                  />
                )
              )}
            </div>
            {/* SOCIALS */}
            <div className="flex justify-center gap-5">
              <Linkedin
                aria-label="Let's talk about IT LinkedIn"
                className="size-8"
                href="https://www.linkedin.com/groups/14230011/"
              />
              <Youtube
                aria-label="Let's talk about IT YouTube"
                className="size-8"
                href="https://www.youtube.com/@_Lets_talk_about_IT"
              />
              <Instagram
                aria-label="Let's talk about IT Instagram"
                className="size-8"
                href="https://www.instagram.com/lets_talk_about_it__"
              />
              <Facebook
                label="Lets Talk About IT Facebook"
                className="size-8"
                href="https://www.facebook.com/share/1CTbxm5ZMe/"
              />
            </div>
            {/* LANGUAGE SWITCHER */}
            <LanguageSwitcher />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

interface SubMenuProps {
  index: number;
  route: Exclude<NavSection, NavLink>;
  setIsOpen: (isOpen: boolean) => void;
  isActive: (path?: string) => boolean;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const SubMenu = ({
  route,
  setIsOpen,
  isActive,
  isOpen,
  setOpen,
}: SubMenuProps) => {
  const { t } = useTranslation();
  const [openNestedIndex, setOpenNestedIndex] = useState<number | null>(null);

  // Check if any child route is active
  const hasActiveChild = route.content.some((sub) => {
    if ('path' in sub) {
      return isActive(sub.path);
    }
    return false;
  });

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!isOpen)}
        className={`flex flex-row items-center gap-2 transition-colors duration-200 py-2 px-3 rounded ${
          hasActiveChild ? 'text-main-yellow' : 'text-main-white'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {t(route.name)}
        <ChevronIcon
          className={`transition-all duration-300 ${
            isOpen ? '-rotate-180 ' : ''
          } ${hasActiveChild ? 'stroke-main-yellow' : 'stroke-main-white'}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`pl-4 mt-2 flex flex-col w-full items-start gap-3 overflow-hidden`}
          >
            {route.content.map((sub, i) =>
              'path' in sub ? (
                <button
                  onClick={() => setIsOpen(false)}
                  key={i}
                  className="w-full text-left"
                >
                  <NavItem key={i} route={sub} isActive={isActive} />
                </button>
              ) : (
                <SubMenu
                  key={i}
                  index={i}
                  route={sub}
                  setIsOpen={setIsOpen}
                  isActive={isActive}
                  isOpen={openNestedIndex === i}
                  setOpen={(isOpen) => setOpenNestedIndex(isOpen ? i : null)}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
