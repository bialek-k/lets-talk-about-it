import { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';
const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" py-[30px] mt-4 bg-main-yellow overflow-hidden">
      <Marquee speed={50} className="gap-[100px]">
        {children}
      </Marquee>
    </div>
  );
};

export default Carousel;
