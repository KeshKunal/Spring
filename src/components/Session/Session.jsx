import React from 'react';
import { Link } from 'react-router-dom';

function Session() {
  return (
    <div className='px-4 sm:px-8 lg:px-24 lg:pb-10'>
      {/* Heading Section */}
      <div className='flex justify-end lg:justify-end'>
        <img
          src="/session/Squiggle.svg"
          alt="squiggle"
          className='absolute right-0 -mt-28 -mr-7 scale-75 lg:block hidden'
        />
      </div>

      <div className='text-center font-rocaLt text-white text-3xl sm:text-4xl lg:text-5xl pt-10 leading-snug sm:leading-tight'>
        <div className='relative flex justify-center flex-wrap'>
          <img src="/session/star.svg" alt="star" className='pr-6 -mt-7 hidden lg:block' />
          Accepting &nbsp;
          <span className='relative inline-block px-3'>
            <span className='relative inline-block'>
              help 
              <img
                src="/session/oval.svg"
                alt="oval"
                className='absolute top-0 right-0 bottom-0 mx-auto mt-1'
                style={{ transform: 'scale(2)' }}
              />
            </span>
          </span>
          &nbsp; <span>is its own</span>
        </div>
        <div className='flex justify-center text-center lg:ml-64 mt-4 lg:mt-0'>
          kind of <span className='font-rocaIt'> &nbsp;Strength</span>
          <img src="/session/star2.svg" alt="star" className='ml-4 lg:ml-20 hidden lg:block' />
        </div>
      </div>

      {/* Image Section */}
      <div className='flex flex-col items-center lg:flex-row p-4'>
        <div className='pt-8 lg:pl-24 relative w-full lg:w-1/2'>
          <img
            src="/session/man.svg"
            alt="man"
            className='w-full lg:scale-125 lg:w-3/4 relative lg:-top-9 lg:-left-3 z-10 shadow-lg rounded-4xl'
          />
        </div>

        {/* Text and Button Section */}
        <div className='text-white text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 lg:ml-20 w-full lg:w-1/2'>
          "It is possible to{" "}
          <div className='font-betofin pt-5 underline'>Smile Again"</div>
          <Link to="/book-session">
            <button className="mt-10 lg:ml-10 sm:mt-16 px-6 py-3 mb-10 text-xl sm:text-2xl bg-transparent border-4 border-[#DFDBF4] text-black rounded-full hover:bg-[#DFDBF4] hover:text-black transition duration-300 hover:text-medium hover:font-semibold">
              Book A Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Session;
