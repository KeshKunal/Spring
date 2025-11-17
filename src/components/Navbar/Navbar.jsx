import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="top-0 bg-[#122620] p-4 flex justify-between items-center shadow-shd">
      <img
        src="/logo_spring.png"
        alt=""
        className="scale-[.6] -ml-20 -my-6 cursor-pointer"
        onClick={() => navigate('/')}
      />

      <div className="flex items-center space-x-4 relative">
        <div className="lg:hidden block" ref={dropdownRef}>
          <Hamburger
            size={30}
            direction="right"
            color="#4FD1C5"
            toggled={isOpen}
            toggle={setIsOpen}
          />
          {isOpen && (
            <ul
              tabIndex={0}
              className="absolute top-full mt-2 -ml-32 bg-base-100 rounded-box w-44 shadow z-20"
            >
              <li className="pl-3 py-1 text-base hover:bg-gray-200">
                <Link to="/dream-analyzer">Dream Analyzer</Link>
              </li>
              <li className="pl-3 py-1 text-base hover:bg-gray-200">
                <Link to="/digital-detox">Digital Detox</Link>
              </li>
              <li className="pl-3 py-1 text-base hover:bg-gray-200">
                <Link to="/audio-video-therapy">Audio/Video Therapy</Link>
              </li>
              <li className="pl-3 py-1 text-base hover:bg-gray-200">
                <Link to="/talk-with-ai">Youth Corner</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="lg:block hidden">
          <div className="flex items-center space-x-6">

            <nav className="flex items-center gap-6">
              <Link to="/dream-analyzer" className="text-white text-lg hover:text-[#4FD1C5] transition">Dream Analyzer</Link>
              <Link to="/digital-detox" className="text-white text-lg hover:text-[#4FD1C5] transition">Digital Detox</Link>
              <Link to="/audio-video-therapy" className="text-white text-lg hover:text-[#4FD1C5] transition">Audio/Video Therapy</Link>
              <Link to="/talk-with-ai" className="text-white text-lg hover:text-[#4FD1C5] transition">Youth Corner</Link>
            </nav>
            <a
              href="/blogs"
              className="text-white text-lg hover:text-[#4FD1C5] transition"
            >
              Blogs & Stories
            </a>
            <a
              href="/book-session"
              className="bg-[#4FD1C5] text-[#06201C] font-semibold rounded-full px-4 py-2 hover:opacity-95 transition"
            >
              Find support
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
