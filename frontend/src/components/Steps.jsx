import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-28 px-4"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 px-8 py-3 rounded-full border border-gray-200 shadow-md bg-white hover:scale-105 transition-transform duration-500">
        See How the Magic Happens
      </h1>
      <p className="text-md sm:text-lg text-gray-500 mt-4 mb-10 text-center max-w-xl">
        From your imagination to AI-crafted visuals — it's fast, easy, and fun.
      </p>

      {/* Steps */}
      <div className="space-y-5 w-full max-w-3xl">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={item.icon}
              alt={`Step ${index + 1}`}
              width={44}
              className="mt-1 shrink-0"
            />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
