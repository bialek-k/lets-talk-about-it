'use client';

import { useEffect, useState } from 'react';
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
import Youtube from '../Youtube/Youtube';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import toRoman from '../UI/NumberToRoman';
import { usePathname } from 'next/navigation';
import OpenNav from '../OpenNav/OpenNav';

interface Route {
  path?: string;
  name?: string;
  content?: { path: string; name: string }[];
}

const Header = ({
  isMain = false,
  locale,
}: {
  isMain?: boolean;
  locale: string;
}) => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const currentPath = usePathname();

  const isActive = (path?: string) => {
    if (path === '/#about') {
      if (currentPath === '/' || currentPath === '/en') return true;
    }
    if (currentPath.endsWith(path ?? '')) return true;
    if (path === 'events' && currentPath.includes('events')) {
      return true;
    }
  };

  useEffect(() => {
    const fetchRoutes = async () => {
      const fetchedRoutes = await fetchEvents({ locale });
      setRoutes(fetchedRoutes);
    };
    fetchRoutes();
  }, [locale]);

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
        className="bg-main-black fixed w-screen top-0 z-50
      desktop-media-max:[--y-hidden:'0px']
      desktop-media-max:[--opacity-from:100%]
      desktop-media-max:[--y-visible:'-100%']
      desktop-media-max:[--opacity-to:0%]
      desktop-media-max:[--visible:'block']
      desktop-media-max:[--hidden-to:none]
      "
      >
        <nav className=" bg-main-black h-[70px] lg:h-[100px] lg:max-w-[1440px] my-0 mx-auto  px-4 lg:px-[100px] flex flex-row items-center gap-10 justify-between lg:text-lg">
          {/* LOGO */}

          <MainLogo className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]" />

          {/* MOBILE NAVIGATION BUTTON */}
          <OpenNav locale={locale} />
          {/* NAVIGATION DESKTOP */}
          <ul className=" hidden xl:flex text-white text-[22px] leading-7 gap-6">
            {routes.map((route, index) => (
              <li
                key={index}
                className="relative flex justify-center items-center"
              >
                {route.path ? (
                  <Link
                    className={`${
                      isActive(route.path)
                        ? 'text-main-yellow'
                        : 'text-main-white'
                    } `}
                    href={route.path ?? '#'}
                    rel="noopener noreferrer"
                  >
                    {t(route.name ?? '')}
                  </Link>
                ) : (
                  <div
                    className={`flex flex-row items-center justify-between gap-2 ${
                      currentPath.includes(route.name ?? '')
                        ? 'text-main-yellow'
                        : 'text-main-white'
                    }`}
                    onMouseEnter={() => {
                      setSubMenuOpen(true);
                      setActiveMenu(route.name ?? '');
                    }}
                    onMouseLeave={() => setSubMenuOpen(false)}
                  >
                    <p>{t(route.name ?? '')}</p>
                    <ChevronIcon
                      className={`transition-all duration-300 ${
                        isSubMenuOpen &&
                        activeMenu === route.name &&
                        'rotate-180'
                      }`}
                    />
                  </div>
                )}
                {/* SUBROUTE EVENTS */}
                {route.content && activeMenu === route.name && (
                  <AnimatePresence>
                    {isSubMenuOpen && (
                      <motion.div
                        onMouseEnter={() => setSubMenuOpen(true)}
                        onMouseLeave={() => setSubMenuOpen(false)}
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="text-base font-normal flex flex-col items-center justify-center w-auto absolute top-9 border-solid border-main-yellow border-x-2 border-b-2  rounded-b-xl px-4 pb-5 bg-main-black"
                      >
                        {route.content.map((subRoute, index) => (
                          <motion.div
                            initial={{ opacity: 0, y: '-100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '-100%' }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1,
                            }}
                            key={index}
                          >
                            <Link
                              className={`border-b bg-main-black border-solid border-white h-[50px] w-max flex items-center ${
                                currentPath.includes(subRoute.path)
                                  ? 'text-main-yellow'
                                  : 'text-main-white'
                              }`}
                              href={subRoute.path ?? '#'}
                              rel="noopener noreferrer"
                            >
                              {subRoute.name.includes('event')
                                ? `${t(subRoute.name.split(' ')[0])} ${toRoman(
                                    parseInt(subRoute.name.split(' ')[1])
                                  )}`
                                : t(subRoute.name)}
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
          <div className="justify-center gap-5 hidden xl:flex">
            <Linkedin
              className="size-6"
              href="https://www.linkedin.com/groups/14230011/"
            />
            <Youtube
              className="size-6"
              href="https://www.youtube.com/@_Lets_talk_about_IT"
            />
          </div>
          <div className="hidden xl:flex">
            <LanguageSwitcher />
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
