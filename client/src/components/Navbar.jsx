import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3 max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="ImagineAI Logo"
            className="w-28 sm:w-36 object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* Credits Button */}
              <button
                onClick={() => navigate('/buy')}
                className="flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 rounded-full text-sm font-medium transition duration-200"
              >
                <img src={assets.credit_star} alt="Credits" className="w-4 h-4" />
                Credits: {credit}
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <img
                  src={assets.profile_icon}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border cursor-pointer hover:ring-2 ring-blue-300 transition"
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border text-sm overflow-hidden z-30">
                    <div className="px-4 py-3 text-gray-600 border-b">
                      👋 Hi, {user.name}
                    </div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* CTA - View Plans */}
              <button
                onClick={() => navigate('/buy')}
                className="hidden sm:inline-block bg-pink-100 text-pink-700 hover:bg-pink-200 px-4 py-2 rounded-full text-sm font-semibold transition"
              >
                View Plans
              </button>

              {/* CTA - Sign In */}
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-medium rounded-full transition"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
