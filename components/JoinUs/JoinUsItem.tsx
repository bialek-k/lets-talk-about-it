import Link from 'next/link';
import { TextHolder } from '../UI/TextHolder';
import { RichTextContent } from '@graphcms/rich-text-types';

interface JoinUsItemProps {
  social: RichTextContent;
  icon?: JSX.Element;
  small?: boolean;
  longText: boolean;
  navigateDirection: string;
  customClass?: string;
  label?: string;
}

export const JoinUsItem = ({
  social,
  icon,
  small,
  longText,
  navigateDirection,
  label,
  customClass,
}: JoinUsItemProps) => {
  return (
    <div className="socialItem flex flex-col items-center justify-start">
      <div className="icon mt-10 lg:mt-0 h-[125px] cursor-pointer">
        <Link
          href={navigateDirection}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link do strony ${label}`}
        >
          {icon}
        </Link>
      </div>
      <div className="mt-10">
        <TextHolder
          content={social}
          readMore={longText}
          customClass={customClass}
          theme="light"
          small={small}
          shortText={!longText}
        />
      </div>
    </div>
  );
};
