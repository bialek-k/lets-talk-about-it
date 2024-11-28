'use client';

import { useRef, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

interface GalleryProps {
  links?: string[];
}

const FilmsGallery = ({ links }: GalleryProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const imagesPerPage = isLargeScreen ? 6 : 3;
  const totalImages = links?.length || 0;
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

  const galleryData =
    links?.slice(
      (currentPage - 1) * imagesPerPage,
      currentPage * imagesPerPage
    ) || [];

  return (
    <div
      id="gallery"
      ref={galleryRef}
      className="flex flex-col items-center justify-center w-full gap-5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center w-full gap-5">
        {galleryData.map((link, index) => (
          <div key={index} className="relative w-full pb-[75%]">
            <iframe
              className="absolute w-full h-full"
              src={`https://www.youtube.com/embed/${link}`}
              frameBorder="0"
              width={560}
              height={315}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
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

export default FilmsGallery;
