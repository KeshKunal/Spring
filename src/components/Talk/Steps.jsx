import React from 'react';

function Steps() {
  return (
    <div className='p-6 md:p-20'>
      <div className='rounded-xl shadow-lg bg-[#695E91] mb-8 md:mb-14 md:mx-44 p-4 md:p-6 text-center'>
        <div className='text-white text-2xl md:text-4xl font-medium'>
          Lessen the wallet pain by availing student discounts, following these 3 steps:
        </div>
      </div>
      <div className='flex flex-wrap justify-around'>
        <div className='w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center'>
          <img src="/Talk/s1.svg" alt="s1" className='scale-75 md:scale-75' />
          <div className='text-[#695E91] text-2xl md:text-3xl font-medium text-center mt-4'>
            Get Verified
          </div>
          <div className='text-center text-lg md:text-xl mt-2'>
            <a className="link link-primary">Click Here.</a> Get Your <div className='pt-1'>Student Id Verified.</div>
          </div>
        </div>
        <div className='w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center relative'>
          <img src="/Talk/s2.svg" alt="s2" className='scale-75 md:scale-75' />
          <div className='text-[#695E91] text-2xl md:text-3xl font-medium text-center mt-4'>
            Get Coupon Code
          </div>
          <div className='text-center text-lg md:text-xl mt-2'>
            Check Your Email Inbox For The Special Student Coupon Code.
          </div>
        </div>
        <div className='w-full md:w-1/3 flex flex-col items-center'>
          <img src="/Talk/s3.svg" alt="s3" className='scale-75 md:scale-75' />
          <div className='text-[#695E91] text-2xl md:text-3xl font-medium text-center mt-4'>
            Avail The Offer
          </div>
          <div className='text-center text-lg md:text-xl mt-2'>
            Enter Received Coupon Code <br /> While Booking Therapy <a className="link link-primary">Here.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
