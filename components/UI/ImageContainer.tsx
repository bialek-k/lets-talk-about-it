import React from 'react';
import Image from 'next/image';

interface ImageContainerProps {
  image?: {
    url: string;
    width?: number | null | undefined;
    height?: number | null | undefined;
    fileName?: string;
  };
}

export const ImageContainer = ({ image }: ImageContainerProps) => {
  return (
    <div className="relative w-64 h-64 container mx-auto my-12">
      <div className="absolute inset-6 bg-[#E2FF00] -left-6 -bottom-6" />
      <div className="w-full realitve ">
        {image && (
          <Image alt={image?.fileName!} src={image?.url} layout="fill" />
        )}
      </div>
    </div>
  );
};
