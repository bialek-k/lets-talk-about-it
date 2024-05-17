'use client';

import { useCallback, useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import ImageGalleryItem from '../UI/ImageGalleryItem';
import { useMediaQuery } from '@mui/material';
import { request } from '@/lib/request';
import { EventGalleryDocument } from '@/graphql/generated';

// interface Image {
//   url: string;
//   width?: number | null;
//   height?: number | null;
//   fileName?: string;
// }

interface GalleryProps {
  id: string;
}

const Gallery = ({ id }: GalleryProps) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const imagesPerPage = isLargeScreen ? 6 : 8;
  const [images, setImages] = useState<any>([]);
  const [totalImages, setTotalImages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const skip = currentPage * imagesPerPage - imagesPerPage;

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

  const getPaginatedImages = useCallback(
    async (skip: number) => {
      const { assetsConnection } = await request(EventGalleryDocument, {
        first: imagesPerPage,
        id,
        skip,
      });

      return assetsConnection;
    },
    [id, imagesPerPage]
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const paginatedImagesData = await getPaginatedImages(skip);
        const paginatedImages = paginatedImagesData.edges.map(
          (edge) => edge.node
        );
        setImages(paginatedImages);
        setTotalImages(paginatedImagesData.aggregate.count);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [currentPage, setCurrentPage, getPaginatedImages, skip]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5">
        {images.map((image: any) => (
          <ImageGalleryItem key={image.fileName} image={image} />
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
