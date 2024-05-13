'use client';
import FsLightbox from 'fslightbox-react';

import { useState } from 'react';
import { Image as DatoImage } from 'react-datocms';

interface GalleryProps {
  image: {
    basename: string;
    responsiveImage: {
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

export const ImageContainer = ({ image }: GalleryProps) => {
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

const ImageGalleryItem = ({ image }: GalleryProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div key={image.basename} onClick={() => setOpen(!open)}>
      <DatoImage
        className="w-[155px] lg:w-[394px] h-[155px] lg:h-[300px] cursor-pointer object-contain"
        data={image.responsiveImage}
        layout="responsive"
      />

      <FsLightbox toggler={open} sources={[image.responsiveImage.src]} />
    </div>
  );
};

export default ImageGalleryItem;
