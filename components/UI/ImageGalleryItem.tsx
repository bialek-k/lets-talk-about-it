import Image from 'next/image';

interface ImageGalleryItemProps {
  image: {
    url: string;
    width?: number | null;
    height?: number | null;
    fileName: string;
    placeholder?: string | null;
  };
}

const ImageGalleryItem = ({ image }: ImageGalleryItemProps) => {
  const validWidth = image?.width !== null ? image?.width : undefined;
  const validHeight = image?.height !== null ? image?.height : undefined;

  return (
    <div
      key={image.fileName}
      className="max-w-[155px] lg:max-w-[394px] h-[155px] lg:h-[300px] hover:scale-110"
    >
      <Image
        alt={image.fileName}
        loading="lazy"
        className="w-[155px] lg:w-[394px] h-[155px] lg:h-[300px] cursor-pointer object-contain"
        src={image.url}
        width={validWidth}
        height={validHeight}
        placeholder="blur"
        blurDataURL={image.placeholder as string}
      />
    </div>
  );
};

export default ImageGalleryItem;
