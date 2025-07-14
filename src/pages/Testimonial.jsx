import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Add Autoplay module
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Testimonials.css';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('https://landing-page-backend-alpha.vercel.app/api/testimonial/get');
      console.log('Testimonials:', res.data); 
      setTestimonials(res.data);
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    }
  };
  fetchTestimonials();
}, []);


  const renderStars = (rating) => (
    <div className="d-flex justify-content-center">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`bi ${i < rating ? 'bi-star-fill text-warning' : 'bi-star text-secondary'}`}
        ></i>
      ))}
    </div>
  );

  return (
    <div className="testimonial-section py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t._id}>
            <div className="card text-center border-0 shadow-sm  p-3">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div className="card-body p-0">
                <h5>{t.name}</h5>
                <p className="text-muted">{t.location}</p>
                {renderStars(t.rating)}
                <p className="mt-3 fst-italic">"{t.description}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
