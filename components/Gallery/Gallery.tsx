'use client';

import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import ImageGalleryItem from '../UI/ImageGalleryItem';
import { useMediaQuery } from '@mui/material';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
interface GalleryProps {
  totalImages: number;
  gallery: {
    width?: number | null;
    height?: number | null;
    url?: string | null;
    fileName?: string | null;
    placeholder?: string | null;
  }[];
}
import 'photoswipe/style.css';

const Gallery = ({ gallery, totalImages }: GalleryProps) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const imagesPerPage = isLargeScreen ? 6 : 8;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(totalImages / imagesPerPage);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#F3FF99',
        contrastText: '#242105',
      },
    },
  });

  const handlePaginate = (page: number) => {
    setCurrentPage(page);
  };

  const currentImages = gallery.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = null;
    import('photoswipe').then((pswpModule) => {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#' + 'gallery',
        children: 'a',
        pswpModule: pswpModule.default,
      });
      lightbox.init();
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
        lightbox = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5">
        {currentImages.map((image, index) => (
          <a
            href={image.url as string}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={image.fileName + '-' + index}
            target="_blank"
            rel="noreferrer"
          >
            <ImageGalleryItem
              image={image as any}
              key={image.fileName}
            />
          </a>
        ))}
      </div>

      <ThemeProvider theme={customTheme}>
        <Pagination
          count={pages}
          page={currentPage}
          onChange={(_, page) => handlePaginate(page)}
          color="primary"
          className="text-main-white"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#F5F5F5',
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#F3FF99',
              color: '#0C0C0C',
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default Gallery;
