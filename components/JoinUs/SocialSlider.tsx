'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface SliderItem {
  name: string;
  url: string;
  icon: ReactNode;
}

interface SocialSliderProps {
  items: SliderItem[];
  className?: string;
}

export const SocialSlider = ({ items, className = '' }: SocialSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Duplicate items for seamless loop on mobile only
  const displayItems = isMobile ? [...items, ...items, ...items] : items;

  useEffect(() => {
    // Check if screen is mobile/tablet (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || items.length === 0 || !isMobile) return;

    const firstItem = el.children[0] as HTMLElement;
    if (!firstItem) return;

    const gap = 40;
    const itemWidth = firstItem.offsetWidth + gap;
    const setWidth = items.length * itemWidth;

    // Start at the middle set
    el.scrollLeft = setWidth;

    const resetPosition = () => {
      const scrollLeft = el.scrollLeft;

      // If scrolled past the second set, reset to the first set
      if (scrollLeft >= setWidth * 2 - itemWidth) {
        el.scrollLeft = scrollLeft - setWidth;
      }
      // If scrolled before the first set, reset to the second set
      else if (scrollLeft <= itemWidth) {
        el.scrollLeft = scrollLeft + setWidth;
      }
    };

    // Handle manual scroll - always reset position for seamless loop
    const onScroll = () => {
      requestAnimationFrame(resetPosition);
    };

    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      el.removeEventListener('scroll', onScroll);
    };
  }, [items.length, isMobile]);

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Social media links"
      className={`flex gap-10 overflow-x-auto md:justify-between lg:overflow-visible lg:px-0 lg:justify-between ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {displayItems.map((item, index) => {
        // Only the middle set is accessible to screen readers on mobile
        const isMiddleSet = isMobile
          ? index >= items.length && index < items.length * 2
          : true;

        return (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 mt-10 lg:mt-0 h-[125px]"
            aria-hidden={!isMiddleSet}
          >
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.name}`}
              tabIndex={isMiddleSet ? 0 : -1}
              onFocus={(e) =>
                e.currentTarget.scrollIntoView({
                  behavior: 'smooth',
                  inline: 'center',
                  block: 'nearest',
                })
              }
            >
              {item.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
