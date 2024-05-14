import React from 'react';

import { Image as DatoImage } from 'react-datocms';

export interface ImageProps {
  alt: string;
  image: {
    basename: string;
    responsiveImage: {
      alt?: string;
      bgColor?: string;
      src: string;
      base64: string;
      height: number;
      width: number;
      aspectRatio: number;
      sizes: string;
      srcSet: string;
      webpSrcSet: string;
      title: string;
    };
  };
}

export const Image = ({ image, alt }: ImageProps) => {
  return (
    <div className="relative bg-main-yellow rounded mt-[30px] mr-[30px] max-w-[260px] max-h-[260px] lg:max-w-[300px] lg:max-h-[300px]">
      <DatoImage
        className="absolute top-[-30px] right-[-30px] rounded"
        data={image.responsiveImage}
        layout="responsive"
      />
    </div>
  );
};
