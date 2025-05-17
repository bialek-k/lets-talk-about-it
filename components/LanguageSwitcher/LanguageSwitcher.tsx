'use client';

import i18nConfig from '@/i18nConfig';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

type LanguageSwitcherProps = {
  customClass?: string;
};

const LanguageSwitcher = ({ customClass }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const router = useRouter();
  const currentLocale = i18n.language;

  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'pl' ? 'en' : 'pl';

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      i18n.changeLanguage(newLocale);
      router.push('/' + newLocale + pathname);
    } else {
      router.push(pathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
    router.refresh();
  };

  return (
    <button
      className={`border-white border-solid border rounded-full flex text-sm overflow-hidden transition-all duration-300 self-center ${customClass}`}
      onClick={toggleLanguage}
      aria-label="Zmień język"
    >
      <span
        className={`px-[7px] lg:px-1 py-1 w-full h-full ${
          currentLocale === 'pl'
            ? 'bg-white text-black'
            : 'bg-main-black text-white'
        }`}
      >
        PL
      </span>
      <span
        className={`px-[7px] lg:px-1 py-1 w-full h-full ${
          currentLocale === 'pl'
            ? 'bg-main-black text-white'
            : 'bg-white text-black'
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageSwitcher;
