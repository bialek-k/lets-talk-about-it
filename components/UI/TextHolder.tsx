import React from 'react';

import { StructuredText } from 'react-datocms';

interface TextHolderProps {
  text: string;
  structuredText?: boolean;
}

export const TextHolder = ({ text, structuredText }: TextHolderProps) => {
  return (
    <div>{structuredText ? <StructuredText data={text} /> : <p>{text}</p>}</div>
  );
};
