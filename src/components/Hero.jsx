import React from 'react'
import { HERO_CONTENT } from '../constants';
import mainPic from '../assets/Image-1.jpeg';
import mainPicCopy from '../assets/Image-1.jpeg';
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay}
    },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial = "hidden"
                        animate = "visible"
                        className='pb-16 text-6xl font- tracking-tight lg:mt-16 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent 
                    lg:text-8xl'>Rishikesh Solapure
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial = "hidden"
                        animate = "visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Software Engineer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial = "hidden"
                        animate = "visible"
                        className='my-2 max-w-xl py-6 font-light text-2xl tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={mainPicCopy} alt='Rishikesh Solapure'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero