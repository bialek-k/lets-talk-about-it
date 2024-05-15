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
      <h1
        className={`text-4xl font-semibold mb-6 ${
          small ? '' : 'md:uppercase'
        } ${color === 'white' ? 'text-main-white' : 'text-main-black'}`}
      >
        {title}
      </h1>
      <p className="text-2xl font-semibold">{subtitle}</p>
    </div>
  );
};
