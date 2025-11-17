import React from 'react';
import Blob from "./Blob";

function AI() {
  return (
    <div className='bg-[#A79BD2]'>
      <div className='text-white font-Roca text-3xl sm:text-3xl md:text-4xl text-center px-4 py-10 sm:p-20'>
  Meet Sky!<br /><br />Spring's empathetic AI voice, blending digital intelligence with a caring tone for 24/7 support 💚
    
      </div>
      <div className='flex justify-center items-center pb-10 sm:pb-20 overflow-hidden'>
        <Blob />
      </div>
    </div>
  );
}

export default AI;
