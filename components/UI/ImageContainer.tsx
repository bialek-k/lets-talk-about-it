import React from 'react';
import Image from 'next/image';
import Linkedin from '../Linkedin/Linkedin';

interface ImageContainerProps {
  alt: string;
  link?: string | null;
  image?: {
    url: string;
    width?: number | null | undefined;
    height?: number | null | undefined;
    fileName?: string;
  } | null;
}

export const ImageContainer = ({ image, alt, link }: ImageContainerProps) => {
  return (
    <div className="relative w-64 h-64 container mx-auto mt-4 mb-16">
      <div className="absolute inset-6 bg-[#E2FF00] -left-6 -bottom-6 rounded" />
      <div className="w-full realitve z-10 ">
        {image && (
          <Image
            alt={alt}
            src={image?.url}
            width={image.width ?? 300}
            height={image.height ?? 300}
            className=" rounded absolute"
          />
        )}
        {link && (
          <Linkedin
            href={link}
            className="absolute z-30 w-6 h-6 bottom-3 right-3"
          />
        )}
      </div>
    </div>
  );
};
