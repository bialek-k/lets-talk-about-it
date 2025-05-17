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
import Instagram from '../Instagram/Instagram';

interface Route {
  path?: string;
  name?: string;
  content?: { path: string; name: string }[];
}

export const Header = ({
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
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

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
        <nav className=" bg-main-black h-[70px] lg:h-[100px] lg:max-w-[1440px] my-0 mx-auto  px-4 lg:px-[100px] flex flex-row items-center gap-4 justify-between lg:text-lg">
          {/* LOGO */}

          <MainLogo className="w-[70px] h-[70px] lg:w-[85px] lg:h-[100px] desktop:w-[100px] flex" />

          {/* MOBILE NAVIGATION BUTTON */}
          <OpenNav locale={locale} />
          {/* NAVIGATION DESKTOP */}
          <ul className=" hidden lg:flex text-white text-lg desktop:text-xl leading-7 gap-6">
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
                    } text-center`}
                    href={route.path ?? '#'}
                    rel="noopener noreferrer"
                    aria-label={t(route.name ?? '')}
                  >
                    {t(route.name ?? '')}
                  </Link>
                ) : (
                  <div
                    className={`flex flex-row items-center justify-center gap-2 relative ${
                      currentPath.includes(route.name ?? '')
                        ? 'text-main-yellow'
                        : 'text-main-white'
                    }`}
                    tabIndex={0}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={isSubMenuOpen && activeMenu === route.name}
                    aria-controls={`submenu-${index}`}
                    aria-label={t(route.name ?? '')}
                    onMouseEnter={() => {
                      setSubMenuOpen(true);
                      setActiveMenu(route.name ?? '');
                    }}
                    onMouseLeave={() => setSubMenuOpen(false)}
                    onClick={() => {
                      setSubMenuOpen(true);
                      setActiveMenu(route.name ?? '');
                    }}
                    onKeyDown={(event) => {
                      const handleOpenSubMenu = () => {
                        setSubMenuOpen(true);
                        setActiveMenu(route.name ?? '');
                        // Ustawienie focusa po opóźnieniu, aby submenu było już w DOM
                        setTimeout(() => {
                          const items = document.querySelectorAll(
                            `#submenu-${index} a`
                          );
                          if (items.length > 0) {
                            (items[0] as HTMLElement).focus();
                            setActiveSubIndex(0);
                          }
                        }, 0);
                      };

                      if (
                        event.key === ' ' ||
                        event.key === 'Spacebar' ||
                        event.key === 'Enter'
                      ) {
                        event.preventDefault();
                        handleOpenSubMenu();
                      }

                      if (event.key === 'Escape') {
                        setSubMenuOpen(false);
                        setActiveSubIndex(null);
                      }

                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        if (!isSubMenuOpen) {
                          handleOpenSubMenu();
                        } else {
                          const items = document.querySelectorAll(
                            `#submenu-${index} a`
                          );
                          if (items.length > 0) {
                            const nextIndex =
                              activeSubIndex === null ||
                              activeSubIndex >= items.length - 1
                                ? 0
                                : activeSubIndex + 1;
                            const item = items[nextIndex] as HTMLElement;
                            item.focus();
                            setActiveSubIndex(nextIndex);
                          }
                        }
                      }

                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const items = document.querySelectorAll(
                          `#submenu-${index} a`
                        );
                        if (items.length > 0) {
                          const nextIndex =
                            activeSubIndex === null || activeSubIndex <= 0
                              ? items.length - 1
                              : activeSubIndex - 1;
                          const item = items[nextIndex] as HTMLElement;
                          item.focus();
                          setActiveSubIndex(nextIndex);
                        }
                      }
                    }}
                    onBlur={(e) => {
                      // Zamknij submenu tylko jeśli focus wyszedł poza menu
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setSubMenuOpen(false);
                      }
                    }}
                  >
                    {t(route.name ?? '')}
                    <ChevronIcon
                      className={`transition-all duration-300 ${
                        isSubMenuOpen &&
                        activeMenu === route.name &&
                        'rotate-180'
                      }`}
                    />

                    {/* SUBROUTE EVENTS */}
                    {route.content && activeMenu === route.name && (
                      <AnimatePresence>
                        {isSubMenuOpen && (
                          <motion.div
                            id={`submenu-${index}`}
                            role="menu"
                            aria-label={t(route.name ?? '')}
                            initial={{ opacity: 0, y: '-100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '-100%' }}
                            transition={{ duration: 0.5 }}
                            className="text-base font-normal flex flex-col items-center justify-center w-max absolute top-7 border-solid border-main-yellow border-x-2 border-b-2  rounded-b-xl px-4 pb-5 bg-main-black"
                          >
                            {route.content.map((subRoute, subIdx) => (
                              <motion.div
                                initial={{ opacity: 0, y: '-100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '-100%' }}
                                transition={{
                                  duration: 0.3,
                                  delay: subIdx * 0.1,
                                }}
                                key={subIdx}
                              >
                                <Link
                                  className={`border-b bg-main-black border-solid border-white h-[50px] w-max flex items-center ${
                                    currentPath.includes(subRoute.path)
                                      ? 'text-main-yellow'
                                      : 'text-main-white'
                                  }`}
                                  href={subRoute.path ?? '#'}
                                  rel="noopener noreferrer"
                                  aria-label={
                                    subRoute.name.includes('event')
                                      ? `${t(
                                          subRoute.name.split(' ')[0]
                                        )} ${toRoman(
                                          parseInt(subRoute.name.split(' ')[1])
                                        )}`
                                      : t(subRoute.name)
                                  }
                                  role="menuitem"
                                  tabIndex={-1}
                                  onKeyDown={(e) => {
                                    if (e.key === 'ArrowDown') {
                                      e.preventDefault();
                                      const next =
                                        e.currentTarget.parentElement?.nextElementSibling?.querySelector(
                                          'a'
                                        );
                                      next?.focus();
                                    } else if (e.key === 'ArrowUp') {
                                      e.preventDefault();
                                      const prev =
                                        e.currentTarget.parentElement?.previousElementSibling?.querySelector(
                                          'a'
                                        );
                                      prev?.focus();
                                    } else if (e.key === 'Enter') {
                                      window.location.href = subRoute.path;
                                    }
                                  }}
                                >
                                  {subRoute.name.includes('event')
                                    ? `${t(
                                        subRoute.name.split(' ')[0]
                                      )} ${toRoman(
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
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* SOCIALS */}
          <div className="justify-center gap-5 hidden lg:flex">
            <Linkedin
              label="Lets Talk About IT LinkedIn"
              className="size-6"
              href="https://www.linkedin.com/groups/14230011/"
            />
            <Youtube
              label="Lets Talk About IT Youtube"
              className="size-6"
              href="https://www.youtube.com/@_Lets_talk_about_IT"
            />
            <Instagram
              label="Lets Talk About IT Instagram"
              className="size-6"
              href="https://www.instagram.com/lets_talk_about_it__"
            />
          </div>
          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};
