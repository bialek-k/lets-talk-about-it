'use client';

import React, { useState } from 'react';

import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';

interface TextHolderProps {
  content: RichTextContent;
  theme?: 'light' | 'dark';
  readMore?: boolean;
  handleReadMore?: () => void;
  small?: boolean;
  additionalContent?: JSX.Element | string;
  customClass?: string;
  shortText?: boolean;
  customHight?: string;
}

export const TextHolder = ({
  content,
  theme = 'dark',
  customClass,
  readMore,
  small,
  additionalContent,
  shortText,
  customHight,
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
      } p-[30px] h-max rounded-2xl border-4 border-[#E2FF00] flex flex-col items-center justify-center`}
    >
      <div
        className={`content flex prose ${
          small ? 'max-w-[260px] lg:max-w-[292px]' : ''
        } dark:text-main-white dark:prose-strong:text-main-white dark:prose-li:marker:text-main-black  overflow-hidden transition-max-height duration-300 ease-in-out`}
        style={
          shortText
            ? { maxHeight: '100%' }
            : { maxHeight: isExpanded ? '100%' : customHight || '333px' }
        }
      >
        <div
          className={`w-full h-full font-normal prose-p:py-[10px] text-base leading-5 lg:text-lg lg:leading-6 ${
            theme === 'dark'
              ? 'text-main-white bg-main-black'
              : 'text-main-black bg-main-white'
          }`}
        >
          <RichText
            content={content}
            renderers={{
              h3: ({ children }) => {
                return (
                  <h3
                    className={`m-0 text-main-white font-semibold 
                      text-[32px] leading-[42px]`}
                  >
                    {children}
                  </h3>
                );
              },
              p: ({ children }) => {
                return <p className={`m-0 ${customClass}`}>{children}</p>;
              },
            }}
          />
          {additionalContent}
        </div>
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
