'use client';

import { useEffect, useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import MainLogo from '../MainLogo/MainLogo';
import { fetchEvents } from '@/routes/routes';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ChevronIcon from '@/IconsSVG/ChevronIcon';
import Linkedin from '../Linkedin/Linkedin';
import Facebook from '../Facebook/Facebook';
import Youtube from '../Youtube/Youtube';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import toRoman from '../UI/NumberToRoman';

interface Route {
  path?: string;
  name?: string;
  content?: { path: string; name: string }[];
}

export default function Header({ isMain }: { isMain?: boolean }) {
  const [routes, setRoutes] = useState<Route[]>([]);
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    const fetchRoutes = async () => {
      const fetchedRoutes = await fetchEvents();
      setRoutes(fetchedRoutes);
    };
    fetchRoutes();
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < 160) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <AnimatePresence>
      <motion.header
        variants={
          isMain
            ? {
                hidden: {
                  y: 'var(--y-hidden)', // y:0
                  opacity: 'var(--opacity-from)', // opacity:1
                  display: 'var(--visible)', // visibility: 'visible
                },
                visible: {
                  y: 'var(--y-visible)', // y: '-100%'
                  opacity: 'var(--opacity-to)', // opacity: 0
                  display: 'var(--hidden-to)', // visibility: 'hidden
                },
              }
            : undefined
        }
        initial="hidden"
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.3 }}
        className="bg-main-black fixed w-full top-0 z-50
      desktop-media-max:[--y-hidden:'0px']
      desktop-media-max:[--opacity-from:100%]
      desktop-media-max:[--y-visible:'-100%']
      desktop-media-max:[--opacity-to:0%]
      desktop-media-max:[--visible:'block']
      desktop-media-max:[--hidden-to:none]
      "
      >
        <nav className=" bg-main-black w-full h-[70px] lg:h-[100px] lg:max-w-[1440px] my-0 mx-auto  px-4 lg:px-[100px] flex flex-row items-center gap-10 justify-between lg:text-lg">
          {/* LOGO */}

          <MainLogo className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]" />

          {/* MOBILE NAVIGATION BUTTON */}
          <OpenNav />
          {/* NAVIGATION DESKTOP */}
          <ul className="ml-auto hidden lg:flex gap-6 text-white">
            {routes.map((route, index) => (
              <li
                key={index}
                className="relative flex justify-center items-center"
              >
                {route.path ? (
                  <Link href={route.path ?? '#'}>{t(route.name ?? '')}</Link>
                ) : (
                  <div
                    className=" flex flex-row items-center justify-between"
                    onMouseEnter={() => setSubMenuOpen(true)}
                    onMouseLeave={() => setSubMenuOpen(false)}
                  >
                    <p>{t(route.name ?? '')}</p>
                    <ChevronIcon
                      className={`transition-all duration-300 ${
                        isSubMenuOpen && 'rotate-180'
                      }`}
                    />
                  </div>
                )}
                {route.content && (
                  <AnimatePresence>
                    {isSubMenuOpen && (
                      <motion.div
                        onMouseEnter={() => setSubMenuOpen(true)}
                        onMouseLeave={() => setSubMenuOpen(false)}
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="text-base font-normal flex flex-col w-full absolute top-10 "
                      >
                        {route.content.map((subRoute, index) => (
                          <motion.div
                            initial={{ opacity: 0, y: '-100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '-100%' }}
                            transition={{ duration: 0.3, delay: index * 0.3 }}
                            key={index}
                          >
                            <Link
                              className="border-b bg-main-black border-solid border-white h-[50px] flex items-center "
                              href={subRoute.path ?? '#'}
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
              </li>
            ))}
          </ul>
          {/* SOCIALS */}
          <div className="justify-center gap-5 hidden lg:flex">
            <Linkedin
              className="size-6"
              href="https://www.linkedin.com/groups/14230011/"
            />
            <Facebook
              className="size-6"
              href="https://www.facebook.com/groups/letstalkitpoland"
            />
            <Youtube
              className="size-6"
              href="https://www.youtube.com/@LetstalkTPoland"
            />
          </div>
          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}

export function OpenNav() {
  const [isMenuOpen, setOpenMenu] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden relative ml-auto flex items-center ">
      <button
        onClick={() => setOpenMenu(true)}
        className={`absolute right-0 border-none w-7 h-7 z-30 flex items-center justify-center hamburger ${
          isMenuOpen ? 'hamburger_active' : ''
        }`}
        aria-label="Open Mobile Menu"
      >
        <span />
      </button>
      <MobileNav isOpen={isMenuOpen} setIsOpen={setOpenMenu} />
    </div>
  );
}
