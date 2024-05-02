import { AboutModelDescriptionField } from '@/graphql/generated';
import React from 'react';

import { StructuredText as StructuredTextDocument } from 'react-datocms';

interface TextHolderProps {
  text: any;
  structuredText?: boolean;
}

export const TextHolder = ({ text, structuredText }: TextHolderProps) => {
  return (
    <div className="bg-neutral-800 text-neutral-200 p-8 rounded-lg border-4 border-[#E2FF00]">
      {structuredText ? <StructuredTextDocument data={text} /> : <p>{text}</p>}
    </div>
  );
};
