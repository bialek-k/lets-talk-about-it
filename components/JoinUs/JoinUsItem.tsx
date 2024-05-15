import React from 'react';
import { TextHolder } from '../UI/TextHolder';

import { RichTextContent } from '@graphcms/rich-text-types';

interface JoinUsItemProps {
  social: RichTextContent;
  icon?: JSX.Element;
  small?: boolean;
}

export const JoinUsItem = ({ social, icon, small }: JoinUsItemProps) => {
  return (
    <div className="socialItem flex flex-col items-center">
      <div className="icon mb-12 max-h-28">{icon}</div>
      <TextHolder content={social} readMore theme="light" small={small} />
    </div>
  );
};
