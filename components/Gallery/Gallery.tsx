'use client';
import { useState } from 'react';
import Image from 'next/image';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import ImageGalleryItem from '../UI/ImageGalleryItem';
import { useMediaQuery } from '@mui/material';
import { EventGalleryArgs } from '@/graphql/generated';

interface Image {
  url: string;
  width?: number | null;
  height?: number | null;
  fileName?: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const imagesPerPage = isLargeScreen ? 6 : 8;
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(images.length / imagesPerPage);
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#F3FF99',
        contrastText: '#242105',
      },
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5">
        {images
          .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
          .map((image: any) => (
            <ImageGalleryItem key={image.fileName} image={image} />
          ))}
      </div>
      <ThemeProvider theme={customTheme}>
        <Pagination
          count={pages}
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
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
