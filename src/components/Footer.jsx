import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGooglePlay,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* FetchTrue Intro */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">FetchTrue</h5>
            <p>
              Welcome to FetchTrue! We are dedicated to helping you build a secure financial future and make smart investment decisions. Join us on the path to financial success!
            </p>

            {/* Social Icons */}
            <div className="social-icons mt-3">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.whatsapp.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Official Info</h5>
            <p><FaMapMarkerAlt className="me-2" /> Office no.307, 3rd Floor, Amanora Chamber, Amanora Mall, Hadapsar, Pune- 411028</p>
            <p><FaEnvelope className="me-2" /> info@fatchtrue.com</p>
            <p><FaPhoneAlt className="me-2" /> +91 9309517500</p>
            <p>
              <a href="http://www.fetchtrue.com" target="_blank" rel="noopener noreferrer" className="text-white">
                www.fetchtrue.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><a href="/contact" className="text-white text-decoration-none">Contact Us</a></p>
            <p><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></p>
            <p><a href="/return-policy" className="text-white text-decoration-none">Return & Refund Policy</a></p>
            <p><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></p>
          </div>

        </div>

        <hr className="mb-4" />

        {/* Bottom row */}
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6">
            <p className="text-white mb-0">© 2023 All rights Reserved | <strong>FetchTrue</strong></p>
          </div>

          {/* Playstore Link */}
          <div className="col-md-6 col-lg-6 text-md-end">
            <a
              href="https://play.google.com/store/apps/details?id=com.fetchtrue.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <FaGooglePlay className="me-2" />
              Download on Play Store
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
