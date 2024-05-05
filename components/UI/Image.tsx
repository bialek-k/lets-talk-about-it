import React from 'react';

import { Image as DatoImage } from 'react-datocms';

export interface ImageProps {
  image: ResponsiveImage;
}

export interface ResponsiveImage {
  alt: any;
  base64: string;
  bgColor: string;
  title: any;
  aspectRatio: number;
  height: number;
  sizes: string;
  src: string;
  srcSet: string;
  webpSrcSet: string;
  width: number;
}

export const Image = ({ image }: ImageProps) => {
  return (
    <div className="relative w-64 h-64 container mx-auto my-12">
      <div className="absolute inset-6 bg-[#E2FF00] -left-6 -bottom-6" />
      <div className="w-full bg-red-400">
        <DatoImage data={image} className="" layout="fill" />
      </div>
    </div>
  );
};
