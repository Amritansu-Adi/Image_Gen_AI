import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const endpoint = state === 'Login' ? '/api/user/login' : '/api/user/register';
      const payload = state === 'Login' ? { email, password } : { name, email, password };
      const { data } = await axios.post(backendUrl + endpoint, payload);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setShowLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-md bg-white px-6 sm:px-10 py-10 rounded-3xl shadow-2xl text-slate-700"
      >
        <h1 className="text-center text-3xl font-bold text-neutral-900 mb-2">
          {state}
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Welcome {state === 'Login' ? 'back' : ''}! Please{' '}
          {state === 'Login' ? 'sign in' : 'create an account'} to continue
        </p>

        {state !== 'Login' && (
          <div className="input-wrapper">
            <img src={assets.profile_icon} alt="profile" width={20} />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input-wrapper mt-4">
          <img src={assets.email_icon} alt="email" width={20} />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper mt-4">
          <img src={assets.lock_icon} alt="password" width={20} />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-sm text-red-500 my-3 hover:underline cursor-pointer">
          Forgot password?
        </p>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 mt-2 rounded-full text-sm font-medium transition-colors"
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        <p className="mt-6 text-sm text-center">
          {state === 'Login' ? (
            <>
              Don’t have an account?{' '}
              <span
                className="text-yellow-600 font-medium cursor-pointer hover:underline"
                onClick={() => setState('Sign Up')}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                className="text-yellow-600 font-medium cursor-pointer hover:underline"
                onClick={() => setState('Login')}
              >
                Login
              </span>
            </>
          )}
        </p>

        <img
          src={assets.cross_icon}
          alt="close"
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
        />
      </motion.form>

      {/* Scoped Styles */}
      <style jsx>{`
        .input-wrapper {
          @apply border border-gray-300 px-5 py-2.5 flex items-center gap-2 rounded-full bg-white;
        }
        .input-wrapper input {
          @apply flex-1 text-sm bg-transparent outline-none;
        }
      `}</style>
    </div>
  );
};

export default Login;
