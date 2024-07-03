import { ReactNode } from 'react';
const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" py-[30px] mt-4 w-full bg-main-yellow overflow-hidden flex flex-row items-center justify-center">
      <div className="slider">{children}</div>
    </div>
  );
};

export default Carousel;
