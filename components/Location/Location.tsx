'use client';

import LocationIcon from '@/IconsSVG/LocationIcon';
import { use, useState } from 'react';
import MapWindow from '../MapWindow/MapWindow';

const Location = ({ data }: { data?: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <LocationIcon />
      </button>
      {isOpen && (
        <MapWindow isOpen={isOpen} data={data} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default Location;
