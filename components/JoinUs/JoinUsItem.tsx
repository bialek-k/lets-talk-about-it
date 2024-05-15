import React from 'react';
import { TextHolder } from '../UI/TextHolder';

import { RichTextContent } from '@graphcms/rich-text-types';

interface JoinUsItemProps {
  social: RichTextContent;
  icon?: JSX.Element;
}

export const JoinUsItem = ({ social, icon }: JoinUsItemProps) => {
  return (
    <div className="socialItem py-6 flex flex-col items-center">
      <div className="icon w-24 mb-12">{icon}</div>
      <TextHolder content={social} theme="light" />
    </div>
  );
};
