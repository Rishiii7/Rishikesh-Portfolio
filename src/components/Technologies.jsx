import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaAws } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { AiOutlineKubernetes } from "react-icons/ai";
import { SiTerraform } from "react-icons/si";
import { SiExpress, SiFlutter, SiDart, SiPostgresql, SiMysql, SiCplusplus, SiCsharp, SiGooglecloud, SiKeras, SiDocker, SiPytorch } from 'react-icons/si';


const ButtonWithLimeBackground = ({ icon }) => {
    return (
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {React.cloneElement(icon)}
        </span>
      </button>
    );
};

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10], 
        transition: { 
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Technologies = () => {
    const technologies = [
      { name: 'Kubernetes', icon: <AiOutlineKubernetes className="text-blue-500 text-5xl" />, duration: 2.5 },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 text-5xl" />, duration: 2.5 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-5xl" />, duration: 3 },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-5xl" />, duration: 2 },
      { name: 'React', icon: <FaReact className="text-cyan-400 text-5xl" />, duration: 4 },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl" />, duration: 4 },
      { name: 'Express.js', icon: <SiExpress className="text-gray-400 text-5xl" />, duration: 6 },
      { name: 'Terraform', icon: <SiTerraform className="text-blue-400 text-5xl" />, duration: 2.5 },
      { name: 'Keras', icon: <SiKeras className="text-red-500 text-5xl" />, duration: 3 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-cyan-500 text-5xl" />, duration: 2 },
      { name: 'MySQL', icon: <SiMysql className="text-blue-400 text-5xl" />, duration: 6 },
      { name: 'Python', icon: <FaPython className="text-yellow-400 text-5xl" />, duration: 2.5 },
      { name: 'Docker', icon: <SiDocker className="text-blue-500 text-5xl" />, duration: 3 },
      { name: 'C/C++', icon: <SiCplusplus className="text-blue-600 text-5xl" />, duration: 2 },
      { name: 'PyTorch', icon: <SiPytorch className="text-red-500 text-5xl" />, duration: 4 },
      { name: 'AWS', icon: <FaAws className="text-orange-500 text-5xl" />, duration: 3 },
      { name: 'GCP', icon: <SiGooglecloud className="text-blue-400 text-5xl" />, duration: 2 },
      { name: 'Go', icon: <FaGolang className="text-blue-400 text-5xl" />, duration: 4 },
    ];
  
    return (
      <div className="border-neutral-800 pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <ButtonWithLimeBackground icon={tech.icon} />
              <h1 className="my-2 text-center text-xl">{tech.name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

export default Technologies;