'use client';
import FsLightbox from 'fslightbox-react';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryItemProps {
  image: {
    url: string;
    width?: number | null;
    height?: number | null;
    fileName: string;
  };
}

const ImageGalleryItem = ({ image }: ImageGalleryItemProps) => {
  const validWidth = image?.width !== null ? image?.width : undefined;
  const validHeight = image?.height !== null ? image?.height : undefined;

  const [open, setOpen] = useState(false);
  return (
    <div
      key={image.fileName}
      onClick={() => setOpen(!open)}
      className="w-[155px] lg:w-[394px] h-[155px] lg:h-[300px] "
    >
      <Image
        alt={image.fileName}
        className="w-[155px] lg:w-[394px] h-[155px] lg:h-[300px] cursor-pointer object-contain"
        src={image.url}
        width={validWidth}
        height={validHeight}
      />
      <FsLightbox toggler={open} sources={[image.url]} />
    </div>
  );
};

export default ImageGalleryItem;
