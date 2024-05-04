import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="py-6">
      <h1 className="text-4xl font-semibold mb-6">{title}</h1>
      <p className="text-2xl font-semibold	">{subtitle}</p>
    </div>
  );
};
