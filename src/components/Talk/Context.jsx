import React from 'react';

function Context() {
  return (
    <div className='flex flex-wrap bg-[#C7A9CF] p-6 md:p-12'>
      <div className='w-full flex '>
      <div className='w-full md:block hidden text-3xl md:text-5xl text-white font-bold md:text-left mt-4 md:mt-0'>
        Step into a world of understanding with our student therapy discounts and an AI voice- 'Sky', designed to care for your mental health🌞</div>
        <img
          src="/Talk/happy.svg"
          alt="happy"
          className='scale-[1.12] md:scale-90 -mt-20 md:-mt-32 mb-3 md:-mb-6'
        />
      </div>
      <div className='w-full md:hidden block text-3xl md:text-5xl text-white font-bold text-center md:text-left mt-4 md:mt-0'>
        Lorem ipsum dolor amet, consectetur adipiscing elit.
      </div>
    </div>
  );
}

export default Context;
