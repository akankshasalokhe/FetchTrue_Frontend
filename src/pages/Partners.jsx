import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Partners.css';

function Partners() {
  const logos = [
    'https://cdn.worldvectorlogo.com/logos/nike-4.svg',
    'https://cdn.worldvectorlogo.com/logos/netflix-3.svg',
    'https://cdn.worldvectorlogo.com/logos/flutter.svg',
    'https://cdn.worldvectorlogo.com/logos/apple.svg',
    'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
  ];

  return (
    <div className="partners-section">
      <div className="partners-title text-center">
        <h2>Partners</h2>
        <h4>Our Esteemed Business Partners</h4>
      </div>

      <div className="carousel-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-item">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
