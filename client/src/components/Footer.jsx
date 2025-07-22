import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 mt-24 border-t border-gray-200 px-6 sm:px-12 bg-white shadow-inner">
      <img src={assets.logo} alt="Logo" width={140} className="object-contain" />

      <p className="text-sm text-gray-500 text-center sm:text-left max-sm:hidden flex-1 border-l sm:border-l border-gray-300 sm:pl-6">
        © 2025 Amritansu Aditya — All Rights Reserved.
      </p>

      <div className="flex gap-4">
        <a href="https://www.instagram.com/lm10amri/" target="_blank" rel="noopener noreferrer">
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            width={28}
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="https://x.com/AmritansuA56095" target="_blank" rel="noopener noreferrer">
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            width={28}
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a href="https://www.linkedin.com/in/amritansu-adi/" target="_blank" rel="noopener noreferrer">
          <img
            src={assets.linkedin_icon}
            alt="LinkedIn"
            width={28}
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
