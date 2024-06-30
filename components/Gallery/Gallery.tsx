'use client';

import { useEffect, useRef, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from 'next/image';

interface GalleryProps {
  totalImages: number;
  gallery: {
    width?: number | null;
    height?: number | null;
    url?: string | null;
    fileName?: string | null;
  }[];
}

const Gallery = ({ gallery, totalImages }: GalleryProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
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
    if (galleryRef.current) {
      window.scrollTo({
        behavior: 'smooth',
        top:
          galleryRef.current.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          200,
      });
    }
  };

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

  const galleryData = gallery.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <div
      id="gallery"
      ref={galleryRef}
      className="flex flex-col items-center justify-center w-full gap-5"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5">
        {galleryData.map((image) => (
          <a
            href={image.url as string}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={image.fileName}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt={image.fileName as string}
              className="w-[155px] lg:w-[394px] h-[155px] lg:h-[300px] cursor-pointer object-contain"
              src={image.url as string}
              width={image.width as number}
              height={image.height as number}
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
