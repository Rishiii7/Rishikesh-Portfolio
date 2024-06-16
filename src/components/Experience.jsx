import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-5xl'
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index}>
            {/* Heading */}
            <div className='ps-2 my-2 first:mt-0'>
              <h3 className='text-xs font-medium uppercase text-gray-500 dark:text-neutral-400'>
                {experience.year}
              </h3>
            </div>
            {/* End Heading */}

            {/* Item */}
            <div className='flex gap-x-3 mb-8'>
              {/* Icon */}
              <div className='relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700'>
                <div className='relative z-10 size-7 flex justify-center items-center'>
                  <div className='size-2 rounded-full bg-gray-400 dark:bg-neutral-600'></div>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className='grow pt-0.5 pb-8'>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className='flex gap-x-1.5 font-semibold text-gray-800 dark:text-white'>
                    {experience.role} -{' '}
                    <span className='text-lg text-purple-100'>
                      {experience.company}
                    </span>
                  </h3>
                  <p className='mt-1 text-sm text-gray-600 dark:text-neutral-400'>
                    {experience.description}
                  </p>
                  <div className='flex flex-wrap justify-center items-center  mt-8'>
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='mr-1 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
