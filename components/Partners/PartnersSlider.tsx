'use client';

import React from 'react';
import { Image as DatoImage } from 'react-datocms';
import Slider from 'react-infinite-logo-slider';

export const PartnersImages = ({ images }: any) => {
  return (
    <div className=" ">
      {/* <Slider duration={80} pauseOnHover={false}>
        {images.map((img: any) => {
          return (
            <Slider.Slide key={img.src} className="px-12">
              <div className="w-full">
                <DatoImage data={img.responsiveImage} className=" " />
              </div>
            </Slider.Slide>
          );
        })}
      </Slider> */}
    </div>
  );
};
