import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get('https://landing-page-backend-alpha.vercel.app/api/gallery/get');
        setGalleryItems(res.data.data);
      } catch (err) {
        console.error('Error fetching gallery:', err);
      }
    };

    fetchGallery();
  }, []);

  const groupedByCategory = galleryItems.reduce((acc, item) => {
    const category = item.category?.name || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="gallery-container">
      <div className="gallery-background-container">
        <div className="center-text">
          <h1>Gallery</h1>
        </div>
      </div>

      {Object.entries(groupedByCategory).map(([categoryName, items]) => {
        const showScroll = items.length > 5;

        return (
          <div key={categoryName} className="overlay-blue">
            <h2 className="category-title">{categoryName}</h2>

            <div className={`gallery-grid ${showScroll ? 'scrollable-loop' : ''}`}>
              <div className="scroll-track reverse">
                {[...items, ...items].map((item, index) => (
                  <div key={`${item._id}-${index}`} className="gallery-card">
                    <img src={item.src} alt={item.title} className="gallery-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
