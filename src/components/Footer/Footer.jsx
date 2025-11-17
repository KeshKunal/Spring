import React from 'react';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 z-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-gray-700">
          {/* <div className="text-5xl font-bold font-Roca mb-4 sm:mb-0">Spring</div> */}
          <img src="/logo_spring.png" alt="" className='scale-50 sm:-ml-32 -my-10'/>

          <div className="flex space-x-2 sm:space-x-6 mt-8 ">
            <SocialIcon url="https://linkedin.com" style={{ height: 30, width: 30 } } className="!h-8 !w-8 sm:!h-10 sm:!w-10" />
            <SocialIcon url="https://instagram.com/healwithSpring" style={{ height: 30, width: 30 }} className="!h-8 !w-8 sm:!h-10 sm:!w-10" />
            <SocialIcon url="https://email.com/" style={{ height: 30, width: 30 }} className="!h-8 !w-8 sm:!h-10 sm:!w-10" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Home</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/book" className="hover:underline">Find Support</a></li>
              <li><a href="/blogs" className="hover:underline">Blogs & Stories</a></li>
              <li><a href="/more" className="hover:underline">More</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/who-needs-help" className="hover:underline">Who Do You Think Needs Help?</a></li>
              <li><a href="/book-session" className="hover:underline">Book a Session</a></li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/dream-analyzer" className="hover:underline">AI Based Dream Analyzer</a></li>
              <li><a href="/audio-video-therapy" className="hover:underline">Audio & Video Therapy</a></li>
              <li><a href="/digital-detox" className="hover:underline">Digital Detox</a></li>
              <li><a href="/talk-with-ai" className="hover:underline">Youth Corner</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
            <ul className="mt-4 space-y-2">

            </ul>
            <div className="mt-6">


              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-1 block w-full pl-5 rounded-none rounded-l-md sm:text-sm border-gray-300"
                  placeholder="you@example.com"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Subscribe
                </button>

              </div>
              <div className='p-4'><a href="/contact" className="hover:underline">Contact Us</a>
                <div className="pt-3">
                  <p>Copyright © {new Date().getFullYear()} - Spring.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;