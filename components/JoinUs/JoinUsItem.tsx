import Link from 'next/link';
import { TextHolder } from '../UI/TextHolder';
import { RichTextContent } from '@graphcms/rich-text-types';

interface JoinUsItemProps {
  social: RichTextContent;
  icon?: JSX.Element;
  small?: boolean;
  longText: boolean;
  navigateDirection: string;
}

export const JoinUsItem = ({
  social,
  icon,
  small,
  longText,
  navigateDirection,
}: JoinUsItemProps) => {
  return (
    <div className="socialItem flex flex-col items-center justify-start">
      <div className="icon mt-10 lg:mt-0 h-[125px] cursor-pointer">
        <Link href={navigateDirection} target="_blank">
          {icon}
        </Link>
      </div>
      <div className="mt-10">
        <TextHolder
          content={social}
          readMore={longText}
          theme="light"
          small={small}
          shortText={!longText}
        />
      </div>
    </div>
  );
};
