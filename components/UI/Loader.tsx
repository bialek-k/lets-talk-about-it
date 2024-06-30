'use client';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="spinner w-[96px] h-[96px]">
      <RotatingLines
        visible
        width="96"
        strokeColor="#E2FF02"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
