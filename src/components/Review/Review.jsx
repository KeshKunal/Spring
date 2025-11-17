'use client';
import React, { useRef, useEffect,useState } from 'react';
import { projects } from './Data';
import Card from './Card/Card';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

function Review() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const yTransform = useTransform(scrollYProgress, [0, 0.9], ['0%', '-100%']);
    const isSticky = useTransform(scrollYProgress, [0, 0.9], ['sticky', 'relative']);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div ref={container} className='relative -mb-24'>
            <motion.div 
                className='text-4xl md:text-6xl font-hanoble pt-14 text-center z-10  bg-[#E3DFF8]' 
                style={{ position: isSticky, top: 0 }}
            >
                You Are Not Alone
            </motion.div>
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                        zIndex={projects.length - i}
                    />
                );
            })}
        </div>
    );
}

export default Review;