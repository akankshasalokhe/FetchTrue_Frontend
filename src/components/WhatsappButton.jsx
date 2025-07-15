import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './WhatsappButton.css'

const WhatsAppButton = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const phoneNumber = '919999999999'; // Replace with your number
    const message = encodeURIComponent('Hello! I need help.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      className={`whatsapp-bubble ${scrolled ? 'scrolled' : ''}`}
      onClick={handleClick}
    >
      <FaWhatsapp size={28} />
    </div>
  );
};

export default WhatsAppButton;
