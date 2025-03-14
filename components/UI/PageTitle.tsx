import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  color?: 'white' | 'black';
  small?: boolean;
}

export const PageTitle = ({
  title,
  subtitle,
  color = 'black',
  small,
}: PageTitleProps) => {
  return (
    <div className="pt-6">
      <h2
        className={`${
          small ? '' : 'md:uppercase'
        } text-[40px] lg:text-[48px] leading-[52px] lg:leading-[62px] font-semibold lg:font-bold mb-6 ${
          color === 'white' ? 'text-main-white' : 'text-main-black'
        }`}
      >
        {title}
      </h2>
      <p className="text-[24px] font-semibold">{subtitle}</p>
    </div>
  );
};
