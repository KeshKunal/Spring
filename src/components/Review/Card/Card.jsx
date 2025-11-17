'use client';
import React from 'react';
import { motion, useTransform } from 'framer-motion';

function Card({ i, title, description, color, progress, range, targetScale, zIndex }) {
    const scale = useTransform(progress, range, [1, targetScale]);
    const zIndexValue = useTransform(progress, range, [zIndex, zIndex + 1]);

    return (
        <div className='h-screen flex items-center justify-center sticky top-0 -mt-10'>
            <motion.div
                className={`scale ${color} h-2/5 w-full sm:w-4/5 md:w-2/3 lg:w-2/6 relative rounded-[36px] p-5`}
                style={{ scale, zIndex: zIndexValue, top: `calc(-10% + ${i * 25}px)` }}
            >
                <img src="/Review/review.svg" alt="comma" className='p-2 sm:p-4 md:p-7 scale-75' />
                <div className='text-xl sm:text-2xl md:text-2xl pl-2 sm:pl-5 mr-1'>{description}</div>
                <div className=' text-end text-xl sm:text-xl md:text-xl font-halimun p-4 font-hanoble sm:p-2'>-{title}</div>
            </motion.div>
        </div>
    );
}

export default Card;
