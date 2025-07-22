import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center px-6 text-center"
    >
      {/* Image Preview */}
      <div className="relative mb-8 rounded-xl shadow-lg overflow-hidden max-w-sm w-full border border-gray-200 bg-white">
        <img
          src={image}
          alt="Generated"
          className={`w-full h-auto transition-opacity duration-700 rounded-xl ${
            loading ? 'opacity-60 blur-sm' : 'opacity-100'
          }`}
        />
        {loading && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-pink-600 animate-pulse rounded-full" />
        )}
      </div>

      {/* Status Message */}
      {loading && (
        <p className="text-sm text-gray-600 mb-6 animate-pulse">Generating...</p>
      )}

      {/* Prompt Input */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-2xl bg-white shadow-md border border-gray-200 text-gray-800 text-base p-1 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your idea... e.g. a wizard in a cyberpunk city"
            className="flex-1 bg-transparent outline-none px-6 py-3 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-pink-700 hover:bg-pink-800 text-white px-6 sm:px-10 py-3 rounded-full transition duration-300"
          >
            Generate
          </button>
        </div>
      )}

      {/* Result Actions */}
      {isImageLoaded && (
        <div className="flex gap-4 flex-wrap justify-center text-sm mt-10">
          <button
            onClick={() => {
              setIsImageLoaded(false);
              setInput('');
            }}
            className="border border-gray-800 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-3 rounded-full transition"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
