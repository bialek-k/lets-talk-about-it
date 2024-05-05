import { AboutModelDescriptionField } from '@/graphql/generated';
import React, { useEffect, useState } from 'react';

import { StructuredText as StructuredTextDocument } from 'react-datocms';

interface TextHolderProps {
  text: any;
  structuredText?: boolean;
  theme?: 'light' | 'dark';
  readMore?: boolean;
  handleReadMore?: () => void;
}

export const TextHolder = ({
  text,
  structuredText,
  theme = 'dark',
  readMore,
}: TextHolderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const changeThemeTextColor = () => {
    if (theme === 'light') {
      return 'text-main-black ';
    }
    return 'text-main-white ';
  };

  return (
    <div
      className={`bg-main-${theme === 'light' ? 'white' : 'black'} 
      } p-8 rounded-2xl border-4 border-[#E2FF00] w-full`}
    >
      <div
        className={`content flex prose max-w-max dark:text-main-white dark:prose-strong:text-main-white overflow-hidden transition-max-height duration-300 ease-in-out `}
        style={{ maxHeight: isExpanded ? '100%' : '298px' }}
      >
        {structuredText ? (
          <div
            className={`w-full ${
              theme === 'dark'
                ? 'text-main-white bg-main-black'
                : 'text-main-black bg-main-white'
            }`}
          >
            <StructuredTextDocument data={text} />
          </div>
        ) : (
          <>{text}</>
        )}
      </div>
      {readMore && (
        <button
          className={`${changeThemeTextColor()} w-full text-end `}
          onClick={toggleExpand}
        >
          {isExpanded ? '...czytaj mniej' : '...czytaj więcej'}
        </button>
      )}
    </div>
  );
};
