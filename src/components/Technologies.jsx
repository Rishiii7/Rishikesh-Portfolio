import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaAws } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { AiOutlineKubernetes } from "react-icons/ai";
import { SiTerraform } from "react-icons/si";
import { SiExpress, SiFlutter, SiDart, SiPostgresql, SiMysql, SiCplusplus, SiCsharp, SiGooglecloud, SiKeras, SiDocker, SiPytorch } from 'react-icons/si';

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
  return (
    <div className='border-neutral-800 pb-24'>
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
        className='my-20 text-center text-5xl'>Technologies</motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <AiOutlineKubernetes className="text-6xl mx-1 text-blue-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Kubernetes</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className="text-5xl text-orange-600"/>
                </div>
                <h1 className='my-2 text-center text-xl'>HTML5</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className="text-5xl text-blue-500"/>                    
                </div>
                <h1 className='my-2 text-center text-xl'>CSS3</h1>
            </motion.div>
            <motion.div
                variants={iconVariants(2)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJsSquare className="text-5xl text-yellow-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>JavaScript</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className="text-5xl text-cyan-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>React</h1>
            </motion.div>
            
            <motion.div 
                variants={iconVariants(4)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className="text-5xl text-green-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Node.js</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className="text-5xl text-gray-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Express.js</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTerraform className="text-5xl text-blue-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Terraform</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiKeras className="text-5xl text-red-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Keras</h1>
            </motion.div>
            <motion.div
                variants={iconVariants(2)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostgresql className="text-5xl text-cyan-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>PostgreSQL</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className="text-5xl text-blue-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>MySQL</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
            className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className="text-5xl text-yellow-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Python</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiDocker className="text-5xl text-blue-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Docker</h1>
            </motion.div>
            <motion.div
                variants={iconVariants(2)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus className="text-5xl text-blue-600"/>
                </div>
                <h1 className='my-2 text-center text-xl'>C/C++</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPytorch className="text-5xl text-red-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>PyTorch</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaAws className="text-5xl text-orange-500"/>
                </div>
                <h1 className='my-2 text-center text-xl'>AWS</h1>
            </motion.div>
            <motion.div
                variants={iconVariants(2)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiGooglecloud className="text-5xl text-blue-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>GCP</h1>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)} 
                initial="initial"
                animate="animate"
                className="text-center">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGolang className="text-5xl text-blue-400"/>
                </div>
                <h1 className='my-2 text-center text-xl'>Go</h1>
            </motion.div>
        </motion.div>
    </div>
  );
}

export default Technologies;