import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  color?: 'white' | 'black';
}

export const PageTitle = ({
  title,
  subtitle,
  color = 'black',
}: PageTitleProps) => {
  return (
    <div className="py-6">
      <h1
        className={` text-[40px] lg:text-[48px] leading-[52px] lg:leading-[62px] font-semibold lg:font-bold mb-6 md:uppercase ${
          color === 'white' ? 'text-main-white' : 'text-main-black'
        }`}
      >
        {title}
      </h1>
      <p className="text-2xl font-semibold">{subtitle}</p>
    </div>
  );
};
