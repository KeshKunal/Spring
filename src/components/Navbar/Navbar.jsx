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
          <a
            href="/book-session"
            className="text-white text-2xl hover:underline p-5"
          >
            Find support
          </a>

          <div className="dropdown dropdown-hover z-20">
            <div
              tabIndex={0}
              role="button"
              className="text-white text-2xl hover:underline m-1 p-3"
            >
              More
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box w-44 shadow"
            >
              <li className="-ml-3">
                <Link to="/dream-analyzer">Dream Analyzer</Link>
              </li>
              <li className="-ml-3">
                <Link to="/digital-detox">Digital Detox</Link>
              </li>
              <li className="-ml-3">
                <Link to="/audio-video-therapy">Audio/Video Therapy</Link>
              </li>
              <li className="-ml-3">
                <Link to="/talk-with-ai">Youth Corner</Link>
              </li>
            </ul>
          </div>
          <a
            href="/blogs"
            className="text-white text-2xl hover:underline p-5"
          >
            Blogs & Stories
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
