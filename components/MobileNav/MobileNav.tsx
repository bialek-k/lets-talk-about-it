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
}
interface Route {
  path?: string;
  name?: string;
  content?: { path: string; name: string }[];
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const { t } = useTranslation();
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    const fetchRoutes = async () => {
      const fetchedRoutes = await fetchEvents();
      setRoutes(fetchedRoutes);
    };
    fetchRoutes();
  }, []);

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
              aria-label="Close Mobile Menu"
            >
              <span />
            </button>
            {/* LOGO */}
            <MainLogo
              className="w-[80px] h-[80px]"
              setIsOpen={() => setIsOpen(false)}
            />
            {/* NAVIGATION */}
            <div className="flex flex-col items-start gap-5 self-start pl-[13px] pr-[49px] w-full text-base font-normal">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className=" flex flex-col justify-center w-full pl-[3px]"
                >
                  <div className="flex flex-row items-center justify-between border-b border-solid border-white">
                    {route.path ? (
                      <Link
                        className="pb-5"
                        onClick={() => setIsOpen(false)}
                        href={route.path ?? ''}
                      >
                        {t(route.name ?? '')}
                      </Link>
                    ) : (
                      <button
                        className="w-full flex "
                        type="button"
                        onClick={toggleSubMenu}
                      >
                        {t(route.name ?? '')}
                      </button>
                    )}
                    {route.content && (
                      <ChevronIcon
                        className={`transition-all duration-300 ${
                          isSubMenuOpen && 'rotate-180'
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {route.content && (
                    <AnimatePresence>
                      {isSubMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: '-100%' }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-base font-normal flex flex-col w-full "
                        >
                          {route.content.map((subRoute, index) => (
                            <motion.div
                              initial={{ opacity: 0, y: '-100%' }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.3 }}
                              key={index}
                            >
                              <Link
                                className="border-b border-solid border-white h-[50px] flex items-center "
                                href={subRoute.path ?? '#'}
                                onClick={() => setIsOpen(false)}
                              >
                                {`${t(subRoute.name.split(' ')[0])} ${toRoman(
                                  parseInt(subRoute.name.split(' ')[1])
                                )}`}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
            {/* SOCIALS */}
            <div className="flex justify-center gap-5">
              <Linkedin
                className="size-8"
                href="https://www.linkedin.com/groups/14230011/"
              />
              <Facebook
                className="size-8"
                href="https://www.facebook.com/groups/letstalkitpoland"
              />
              <Youtube
                className="size-8"
                href="https://www.youtube.com/@LetstalkTPoland"
              />
            </div>
            {/* LANGUAGE SWITCHER */}
            <LanguageSwitcher />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
