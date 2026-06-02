import React, { useRef, useState } from 'react';
import ProductCollection from './ProductCollection';
import './product.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export const ProductSlide = ({ title, data }) => {
  console.log(data);
  return (
    <div className='slideProduct slide container m-x-2'>
      <div className='container'>
        <div className='topSlide'>
          <h2 className='titleOfSlide'>{title}</h2>
          <p className='discription'>
            Check out our new arrivals of the season
          </p>
          <div className='brcontainer'>
            <div className='brlong'></div>
            <div className='brsmall'></div>
          </div>
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className='mySwiper'
        >
          {data.map((item) => {
            return (
              <SwiperSlide>{<ProductCollection item={item} />}</SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
