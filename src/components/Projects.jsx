import {PROJECTS} from '../constants';
import {motion} from "framer-motion";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className='border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1}}
                className='w-full lg:w-1/4'>
                    <img src={project.image} 
                    width={150} 
                    height={150} 
                    alt={project.title} 
                    className = 'mb-6 rounded' />
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 text-lg font-semibold flex items-center'>{project.title}
                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='ml-2 text-blue-500 hover:underline'>
                            <FaGithub className='text-xl' />
                        </a>
                    </h6>
                    <p className='mb-4 text-lg text-neutral-400'>{project.description}</p>
                    <div className='flex flex-wrap justify-center items-center space y-8'>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects