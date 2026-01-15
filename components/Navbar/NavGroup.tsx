'use client';
import type { NavLink, NavSection } from '@/routes/routes';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import ChevronIcon from '@/IconsSVG/ChevronIcon';
import { NavItem } from '@/components/Navbar/NavItem';
import { useTranslation } from 'react-i18next';
import toRoman from '@/components/UI/NumberToRoman';

interface NavGroupProps {
  group: Exclude<NavSection, NavLink>;
  isActive: (path?: string) => boolean;
}

export const NavGroup = ({ group, isActive }: NavGroupProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!open);
    } else if (e.key === 'Escape' && open) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={menuRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${t(group.name)} menu`}
        className="flex flex-row items-center gap-2 hover:text-main-yellow transition-colors duration-200 py-2 px-3 rounded hover:bg-main-yellow/10"
      >
        {t(group.name)}
        <ChevronIcon
          className={`transition-all duration-300 ${
            open ? '-rotate-180 stroke-main-yellow' : 'stroke-main-white'
          }`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            role="menu"
            aria-label={`${t(group.name)} submenu`}
            initial={{ opacity: 0, y: '-100%', pointerEvents: 'none' }}
            animate={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5 }}
            className="absolute top-[72px] left-0 p-4 grid gap-4 border-main-yellow border-x-2 border-b-2  rounded-b-xl bg-main-black z-50"
          >
            {group.content.map((sub, i) =>
              'path' in sub ? (
                <motion.div
                  role="none"
                  className="text-base"
                  key={i}
                  initial={{ opacity: 0, y: '-100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: '-100%',
                    transition: { duration: 0.1 },
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                  }}
                >
                  <NavItem key={i} route={sub} isActive={isActive} />
                </motion.div>
              ) : (
                <SubMenu key={i} group={sub} isActive={isActive} />
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const SubMenu = ({ group, isActive }: NavGroupProps) => {
  const [subOpen, setSubOpen] = useState(false);
  const { t } = useTranslation();
  const subButtonRef = useRef<HTMLButtonElement>(null);

  // Close submenu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && subOpen) {
        setSubOpen(false);
        subButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [subOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSubOpen(!subOpen);
    } else if (e.key === 'Escape' && subOpen) {
      setSubOpen(false);
    }
  };

  return (
    <div
      className="flex flex-row w-max gap-4 text-base"
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={() => setSubOpen(false)}
      role="none"
    >
      <div>
        <button
          ref={subButtonRef}
          onClick={() => setSubOpen(!subOpen)}
          onKeyDown={handleKeyDown}
          aria-expanded={subOpen}
          aria-haspopup="true"
          aria-label={`${t(group.name)} submenu`}
          role="menuitem"
          className={`flex items-center gap-1 text-left hover:text-main-yellow rounded px-2 py-1
            ${isActive?.(group.name) ? 'text-main-yellow' : 'text-main-white'}`}
        >
          {t(group.name)}
          <ChevronIcon
            className={`transition-all duration-300 ${
              subOpen ? '-rotate-90 stroke-main-yellow' : 'stroke-main-white'
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
      <AnimatePresence>
        {subOpen && (
          <motion.nav
            role="menu"
            aria-label={`${t(group.name)} items`}
            initial={{ opacity: 0, x: '-100%', pointerEvents: 'none' }}
            animate={{ opacity: 1, x: 1, pointerEvents: 'auto' }}
            exit={{ opacity: 0, x: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5 }}
            className="p-4 grid gap-6 mt-1 text-base overflow-y-auto absolute -top-1 left-32 border-main-yellow border-x-2 border-b-2 rounded-b-xl bg-main-black z-50 max-h-[600px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black-100 [&::-webkit-scrollbar-thumb]:bg-main-yellow/50 [&::-webkit-scrollbar-thumb]:rounded"
          >
            {group.content.map(
              (item, j) =>
                'path' in item && (
                  <motion.div
                    role="none"
                    key={j}
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: '-100%',
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + j * 0.1,
                    }}
                  >
                    <Link
                      key={j}
                      role="menuitem"
                      tabIndex={0}
                      className={`${
                        isActive?.(item.path)
                          ? 'text-main-yellow'
                          : 'text-main-white'
                      } flex flex-col hover:text-main-yellow rounded px-2 py-1`}
                      href={item.path ?? '#'}
                      rel="noopener noreferrer"
                      aria-label={
                        item.name.includes('event')
                          ? `${toRoman(
                              parseInt(item.name.split(' ')[1].trim())
                            )} event, ${item.location}, ${
                              item.date
                                ? new Date(item.date).toLocaleDateString()
                                : ''
                            }`
                          : t(item.name)
                      }
                    >
                      {item.name.includes('event') ? (
                        <div>
                          <div className="flex flex-row gap-1">
                            <p>
                              {toRoman(
                                parseInt(item.name.split(' ')[1].trim())
                              )}
                            </p>
                            <span>|</span>
                            <p>{item.location && `${item.location}`}</p>
                            <span>|</span>
                            <p>
                              {item.date &&
                                `${new Date(item.date).toLocaleDateString()}`}
                            </p>
                          </div>
                          <p className="w-max font-bold">{item.title}</p>
                        </div>
                      ) : (
                        <div>
                          <div className="flex flex-row gap-1">
                            <p>
                              {item.date &&
                                `${new Date(item.date).toLocaleDateString()}`}
                            </p>
                            <span>|</span>
                            <p>{item.location && `${item.location}`} </p>
                          </div>
                          <p className="w-max font-bold">{t(item.name)}</p>
                        </div>
                      )}
                    </Link>
                  </motion.div>
                )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
