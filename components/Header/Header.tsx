'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import MainLogo from '../MainLogo/MainLogo';
import { fetchEvents, type NavSection } from '@/routes/routes';
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
import Facebook from '@/components/Facebook/Facebook';
import { NavItem } from '@/components/Navbar/NavItem';
import { NavGroup } from '@/components/Navbar/NavGroup';

export const Header = ({
  isMain = false,
  locale,
}: {
  isMain?: boolean;
  locale: string;
}) => {
  const [routes, setRoutes] = useState<NavSection[]>([]);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const currentPath = usePathname();

  const isActive = (path?: string): boolean => {
    if (path === '/#about') {
      if (currentPath === '/' || currentPath === '/en') return true;
    }
    if (currentPath.endsWith(path ?? '')) return true;
    if (path === 'events' && currentPath.includes('events')) {
      return true;
    }
    if (path === 'workshops' && currentPath.includes('workshops')) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const fetchRoutes = async () => {
      const fetchedRoutes = (await fetchEvents()) as NavSection[];
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
        <nav className="z-10 bg-main-black h-[70px] lg:h-[100px] lg:max-w-[1440px] my-0 mx-auto  px-4 lg:px-[100px] flex flex-row items-center gap-4 justify-between lg:text-lg">
          {/* LOGO */}

          <MainLogo className="w-[70px] h-[70px] lg:w-[85px] lg:h-[100px] desktop:w-[100px] flex" />

          {/* MOBILE NAVIGATION BUTTON */}
          <OpenNav locale={locale} />
          {/* NAVIGATION DESKTOP */}
          <ul className=" hidden lg:flex text-white text-lg desktop:text-xl leading-7 gap-6">
            {routes.map((route, index) =>
              'path' in route ? (
                <li key={index}>
                  <NavItem isActive={isActive} route={route}></NavItem>
                </li>
              ) : (
                <NavGroup key={index} group={route} isActive={isActive} />
              )
            )}
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
            <Facebook
              label="Lets Talk About IT Facebook"
              className="size-6"
              href="https://www.facebook.com/share/1CTbxm5ZMe/"
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
