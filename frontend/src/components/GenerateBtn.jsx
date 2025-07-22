import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-24 px-4 text-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-10">
        Experience the Magic of AI
      </h1>

      <button
        onClick={() => navigate('/buy')}
        className="inline-flex items-center gap-3 px-8 sm:px-14 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-red-700 text-lg sm:text-xl font-semibold rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Get Started
        <img src={assets.star_group} alt="Stars" className="h-6 sm:h-7" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
