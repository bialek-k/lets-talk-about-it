'use client';

import React from 'react';
import { PageTitle } from '../UI/PageTitle';

import { ResponsiveImage } from '@/graphql/generated';

import { Image as DatoImage } from 'react-datocms';
import { PartnersImages } from './PartnersSlider';

interface PartnersProps {
  data: [];
}

interface PartnerType {
  id: number;
  responsiveImage: ResponsiveImage;
}

const Partners = ({ data }: PartnersProps) => {
  return (
    <section id="#partners" className=" mx-auto  bg-main-black">
      <div className="content flex flex-col items-center w-full ">
        <PageTitle title="Partnerzy" color="white" />
        <div className="partnersContainer bg-main-yellow w-full ">
          <PartnersImages images={data} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
