import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const initpay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'ImagineAI',
      description: 'Credit Purchase',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`${backendUrl}/api/user/verify-razor`, response, {
            headers: { token },
          });

          if (data.success) {
            loadCreditsData();
            navigate('/');
            toast.success('Credits added successfully');
          }
        } catch (error) {
          toast.error(error.message || 'Payment verification failed.');
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/user/pay-razor`,
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initpay(data.order);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to initialize payment.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-24 px-4"
    >
      <button className="border border-gray-300 text-gray-600 hover:text-black hover:border-black px-6 py-2 rounded-full mb-6 transition-all duration-300">
        Our Subscription Plans
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
        Choose the Right Plan for You
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl shadow-md p-8 w-[260px] sm:w-[280px] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <img src={assets.icon} alt="Logo Icon" width={44} className="drop-shadow-sm" />
            </div>

            <h2 className="font-semibold text-lg text-gray-800">{item.id}</h2>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

            <p className="mt-6 text-gray-900">
              <span className="text-3xl font-bold">₹{item.price}</span>
              <span className="text-sm text-gray-500"> / {item.credits} credits</span>
            </p>

            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white mt-8 text-sm rounded-full py-2.5 font-semibold transition-all duration-300"
            >
              {user ? 'Purchase Now' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
