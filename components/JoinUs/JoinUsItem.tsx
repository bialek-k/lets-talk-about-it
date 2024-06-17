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
    <div className="socialItem flex flex-col items-center">
      <div className="icon mb-12 max-h-28 cursor-pointer">
        <a href={navigateDirection} target="blank">
          {icon}
        </a>
      </div>
      <TextHolder
        content={social}
        readMore={longText}
        theme="light"
        small={small}
        shortText={!longText}
      />
    </div>
  );
};
