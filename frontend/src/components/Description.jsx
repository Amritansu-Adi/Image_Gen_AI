import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-24 px-6 md:px-20 lg:px-32 bg-white"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center">
        Transform Imagination Into Reality
      </h1>
      <p className="text-md sm:text-lg text-pink-600 mt-3 mb-12 text-center">
        Stunning AI visuals from simple words
      </p>

      {/* Content Layout */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 w-full max-w-6xl">
        {/* Text */}
        <div className="max-w-2xl text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
            ImagineAI: Your AI-Powered Creative Partner
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Describe anything — a dreamy landscape, a futuristic car, or a surreal painting — and watch our AI turn it into visually captivating art in seconds.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Powered by cutting-edge diffusion models, ImagineAI helps creators, designers, and thinkers turn ideas into real assets. No design skills needed — just type, generate, and download.
          </p>
        </div>

        {/* Image */}
        <img
          src={assets.sample_img_2}
          alt="Generated Visual"
          className="w-72 sm:w-80 xl:w-96 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>
    </motion.div>
  );
};

export default Description;
