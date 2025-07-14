import React, { useState } from 'react';
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';
import galleryData from '../pages/GalleryData';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Awards');
  const [selectedYear, setSelectedYear] = useState('2022');

  const renderCarousel = (items) => (
    <Carousel fade indicators={false}>
      {items.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100 gallery-img" src={item.src} alt={item.title} />
          <Carousel.Caption>
            <h5>{item.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const renderContent = () => {
    if (selectedCategory === 'Events') {
      return (
        <div>
          <div className="year-buttons">
            {Object.keys(galleryData.Events).map(year => (
              <Button
                variant={year === selectedYear ? 'dark' : 'outline-dark'}
                onClick={() => setSelectedYear(year)}
                key={year}
              >
                {year}
              </Button>
            ))}
          </div>
          {renderCarousel(galleryData.Events[selectedYear])}
        </div>
      );
    } else {
      return renderCarousel(galleryData[selectedCategory]);
    }
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gallery</h1>
      <ButtonGroup className="category-buttons mb-4">
        {['Awards', 'Certifications', 'Ceremony', 'Events'].map(cat => (
          <Button
            variant={cat === selectedCategory ? 'primary' : 'outline-primary'}
            onClick={() => setSelectedCategory(cat)}
            key={cat}
          >
            {cat}
          </Button>
        ))}
      </ButtonGroup>
      <div className="carousel-wrapper">
        {renderContent()}
      </div>
    </div>
  );
};

export default Gallery;
