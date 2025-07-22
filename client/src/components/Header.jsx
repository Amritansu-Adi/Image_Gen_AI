import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const sampleImages = [
  assets.sample_img_1,
  assets.sample_img_2,
  assets.sample_img_3,
  assets.sample_img_4,
  assets.sample_img_5,
  assets.sample_img_6,
];

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    user ? navigate('/result') : setShowLogin(true);
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center py-20 px-4 sm:px-10 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Logo and App Name */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={assets.icon} // replace with your generated logo file path
          alt="ImagineAI Logo"
          className="h-10 w-10 rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">ImagineAI</h1>
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="bg-white border border-gray-200 rounded-full px-6 py-2 text-sm text-gray-700 shadow hover:shadow-lg hover:scale-105 transition-all duration-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="font-medium">Your Imagination. Our AI. Limitless Art.</p>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mt-10 max-w-4xl leading-tight text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Turn Words into <span className="text-indigo-600">Wonders</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base sm:text-lg text-gray-600 max-w-2xl mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Describe your thoughts and let AI turn them into awe-inspiring visual art in seconds.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onClickHandler}
        className="mt-10 px-8 py-3 text-white text-lg bg-indigo-600 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition duration-300 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Create with AI
        <img src={assets.star_group} alt="sparkle" className="h-5" />
      </motion.button>

      {/* Sample Art Previews */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {sampleImages.map((src, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg shadow-md cursor-pointer w-24 sm:w-28 h-24 object-cover transition-transform duration-300"
            src={src}
            alt={`sample art ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Footer Line */}
      <motion.p
        className="mt-6 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Made possible by <strong>ImagineAI</strong>
      </motion.p>
    </motion.div>
  );
};

export default Header;
