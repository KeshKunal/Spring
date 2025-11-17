import React from 'react';
import { Link } from 'react-router-dom';

function Therapy() {
    return (
        <div className="top-0 left-0 bg-[#1d2129] p-6">
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <img 
                    src="/Therapy/i2.svg" 
                    alt="img" 
                    className="p-10 pr-0 lg:pr-32 lg:block hidden"
                />
                <div className="pt-5 lg:pt-10 font-rocaThin text-4xl lg:text-6xl text-white text-center">
                    Try Our Audio
                    <div className="mt-5"> & Video Therapy</div>
                </div>
                <img 
                    src="/Therapy/i4.svg" 
                    alt="img" 
                    className="pl-0 lg:pl-20 lg:block hidden"
                />
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:mt-0">
                <img 
                    src="/Therapy/i3.svg" 
                    alt="img" 
                    className="p-10 pr-0 lg:pr-20 lg:block hidden"
                />
                <div className="px-10 lg:px-20 lg:pr-44 text-center lg:text-left">
                    <Link to='/audio-video-therapy'>
                        <button className="w-full lg:w-auto px-8 py-4 mb-8 text-2xl lg:text-3xl border-2 border-white text-white rounded-full hover:bg-[#cacfcc] hover:text-black transition duration-300">
                            Try Now
                        </button>
                    </Link>
                </div>
                <img 
                    src="/Therapy/i1.svg" 
                    alt="img" 
                    className="lg:block hidden"
                />
            </div>
        </div>
    );
}

export default Therapy;
