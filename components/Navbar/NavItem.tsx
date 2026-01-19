import toRoman from '@/components/UI/NumberToRoman';
import type { NavGroup, NavLink } from '@/routes/routes';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface NavItemProps {
  route: NavLink;
  isActive?: (path?: string) => boolean;
}

export const NavItem = ({ route, isActive }: NavItemProps) => {
  const { t } = useTranslation();
  return (
    <Link
      className={`${
        isActive?.(route.path) ? 'text-main-yellow' : 'text-main-white'
      } block w-full hover:text-main-yellow transition-colors duration-200 py-2 px-3 rounded hover:bg-main-yellow/10`}
      href={route.path ?? '#'}
      rel="noopener noreferrer"
      aria-label={t(route.name)}
    >
      {route.name.includes('event') ? (
        <div className="w-full">
          <div className="flex flex-row gap-1">
            <p>{toRoman(parseInt(route.name.split(' ')[1].trim()))}</p>
            <span>|</span>
            <p>{route.location && `${route.location}`}</p>
            <span>|</span>
            <p>
              {route.date && `${new Date(route.date).toLocaleDateString()}`}
            </p>
          </div>
          {route.title?.map((part, index) => (
            <p className="w-max font-bold" key={index}>
              {part}
            </p>
          ))}
        </div>
      ) : route.path.includes('workshops') ? (
        <div className="w-full">
          <div className="flex flex-row gap-1">
            <p>
              {route.date && `${new Date(route.date).toLocaleDateString()}`}
            </p>
            <span>|</span>
            <p>{route.location && `${route.location}`} </p>
          </div>
          <p className="w-full font-bold">{t(route.name)}</p>
        </div>
      ) : (
        <p className="w-full">{t(route.name)}</p>
      )}
    </Link>
  );
};
