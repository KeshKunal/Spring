import React, { useEffect } from 'react';
import Card from './Card';
import "./star.css"
function Hero() {
  return (
    <section className="bg-[#122620] md:rounded-bl-[200px] lg:rounded-bl-[299px] shadow-shd">
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">
        <div className="text-white mt-10 lg:mt-20 lg:mb-0 text-center lg:text-center lg:ml-20">
          <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-rocaThI relative">
            Helping you  &nbsp;<span className='relative inline-block'>
              Heal
              <img
                src="/Famous/oval.svg"
                alt="oval"
                className='absolute md:top-2 md:right-2 bottom-0 mx-auto mt-1 scale-125 md:scale-[2]'
              />
            </span> &nbsp; with
          </div>
          <div className="text-3xl sm:text-4xl lg:text-5xl -mt-3 lg:mt-10 mb-8 lg:mb-14 font-rocaThI">
            The <span className='relative sparkle text-[#F5F5A0] underline decoration-2 decoration-[#81CF95] underline-offset-4'>Magic Of Technology
              <div class="star-1">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                  style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                  // style={{shapeRendering:geometricPrecision, textRendering:geometricPrecision, imageRendering:optimizeQuality, fillRule:evenodd, clipRule:evenodd}}
                  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"></path>
                  </g>
                </svg>
              </div>
              <div class="star-2">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                  style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                  // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"></path>
                  </g>
                </svg>
              </div>
              <div class="star-3">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                  style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                  // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"></path>
                  </g>
                </svg>
              </div>
              <div class="star-4">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                  style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                  // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"></path>
                  </g>
                </svg>
              </div>
              <div class="star-5">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                  style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                  // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"></path>
                  </g>
                </svg>
              </div>
              <div class="star-6">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                  style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                  // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      class="fil0"></path>
                  </g>
                </svg>
              </div>
            </span>
          </div>
          <button
            className="mb-8 lg:mb-14 px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl lg:text-2xl bg-transparent border-2 border-[#F5D9D6] text-white rounded-full hover:font-semibold hover:bg-[#F5D9D6] hover:text-black transition duration-300 lg:ml-24 hover:text-medium"
          >
            Wanna Talk About It?
          </button>
        </div>
        <div className="w-[329px] mr-0 md:mr-16 pb-20 sm:pt-6 sm:mx-auto md:max-w-[90%] lg:w-auto">
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Hero;