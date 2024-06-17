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
  const onClickNavigate = () => {
    window.open(navigateDirection, '_blank');
  };

  return (
    <div className="socialItem flex flex-col items-center">
      <div
        className="icon mb-12 max-h-28 cursor-pointer"
        onClick={onClickNavigate}
      >
        {icon}
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
