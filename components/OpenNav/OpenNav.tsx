'use client';
import { useEffect, useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';

const OpenNav = () => {
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
};
export default OpenNav;
