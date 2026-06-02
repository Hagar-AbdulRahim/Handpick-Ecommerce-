import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';
import heroImg1 from '../../../../React Ecommerce Reda Tech/headerImages/banner_Hero1.jpg';
import heroImg2 from '../../../../React Ecommerce Reda Tech/headerImages/banner_Hero2.jpg';
import heroImg3 from '../../../../React Ecommerce Reda Tech/headerImages/banner_Hero3.jpg';

export const HeroSlider = () => {
  const slides = [
    {
      image: heroImg1,
      title: 'New Arrivals 2026',
      titleHighlight: 'Arrivals',
      description:
        'Discover the latest trends with our exclusive premium collection.',
      buttonText: 'Shop Collection',
      alt: 'New Collection',
    },
    {
      image: heroImg2,
      title: 'Flash Sale Event',
      titleHighlight: 'Sale',
      description:
        'Get up to 50% OFF on all electronics and accessories this week only.',
      buttonText: 'Grab the Deal',
      alt: 'Special Offers',
    },
    {
      image: heroImg3,
      title: 'Quality Delivered',
      titleHighlight: 'Delivered',
      description:
        'Free shipping on all orders over $99. Fast delivery to your doorstep.',
      buttonText: 'Start Shopping',
      alt: 'Premium Quality',
    },
  ];

  return (
    <div className='hero-wrapper container  heroSection '>
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className='hero-slider'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='hero-slide heroSection'>
              <div className='custom-caption-container'>
                <h1 className='animate-title'>
                  {slide.title.split(slide.titleHighlight)[0]}
                  <span className='highlight-text'>{slide.titleHighlight}</span>
                </h1>
                <p className='animate-text'>{slide.description}</p>
                <div className='button-group'>
                  <button className='btn-hero-primary'>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
              <div className='hero-img-wrapper'>
                <img className='hero-img' src={slide.image} alt={slide.alt} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
