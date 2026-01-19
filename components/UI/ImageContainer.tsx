import React from 'react';
import Image from 'next/image';
import Linkedin from '../Linkedin/Linkedin';

interface ImageContainerProps {
  alt: string;
  link?: string;
  linkedin?: string;
  image?: {
    url: string;
    width?: number | null | undefined;
    height?: number | null | undefined;
    fileName?: string;
  };
  background?: string;
}

export const ImageContainer = ({
  image,
  alt,
  link,
  background,
  linkedin,
}: ImageContainerProps) => {
  return (
    <div className="relative w-64 h-64 container mx-auto mt-4 mb-16">
      <div className="absolute inset-6 bg-[#E2FF00] -left-6 -bottom-6 rounded-xl" />
      <div className="w-full relative z-10 aspect-square">
        {image && (
          <Image
            alt={alt}
            src={image?.url}
            width={300}
            height={300}
            className={`rounded-xl absolute object-contain aspect-square ${background}`}
          />
        )}
        {link && (
          <Linkedin
            label={`Linkedin ${linkedin}`}
            shouldAnimate
            href={link}
            className="absolute z-30 w-6 h-6 bottom-3 right-3"
          />
        )}
      </div>
    </div>
  );
};
