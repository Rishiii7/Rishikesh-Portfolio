import React from 'react';
import { PATENT } from '../constants';
import {motion} from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Patent = () => {
  return (
    <div className='border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-5xl'>Patent</motion.h2>
        <div>
            {PATENT.map((patent, index) => (
                <div key={index} className='mb-8 text-lg flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className='w-full lg:w-1/4'>
                        <p className='mb-2 text-lg text-neutral-400'>{patent.year}</p>
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 text-lg font-semibold'>
                            {patent.role} - {''}
                            <span className='text-lg text-purple-100'>
                                {patent.company}
                            </span>
                            <a href={patent.link} target='_blank' rel='noopener noreferrer' className='ml-2 text-blue-500 hover:underline flex items-center'>
                            <FaExternalLinkAlt className='ml-1 text-xl' />
                            </a>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{patent.description}</p>
                        <div className='flex flex-wrap justify-center items-center space y-8'>
                            {patent.technologies.map((tech, index) => (
                                <span key={index} className='mr-1 rounded bg-neutral-900 px-2 py-1 text-sm sm:text-base md:text-lg font-bold text-purple-800'>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Patent;