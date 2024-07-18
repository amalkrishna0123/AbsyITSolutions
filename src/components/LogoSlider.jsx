import React from 'react';
import logo1 from "../assets/part1.png";
import logo2 from "../assets/part2.png";
import logo3 from "../assets/part3.png";
import logo4 from "../assets/part4.png";
import logo5 from "../assets/part5.png";
import logo6 from "../assets/part6.png";
import logo7 from "../assets/part7.png";
import logo8 from "../assets/part8.png";
import logo9 from "../assets/part9.png";
import logo10 from "../assets/part10.png";
import logo11 from "../assets/part11.png";
import logo12 from "../assets/part12.png";
import logo13 from "../assets/part13.png";
import logo14 from "../assets/part14.png";
import logo15 from "../assets/part15.png";
import { motion } from "framer-motion";

const LogoSlider = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15
    ];

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
                loop: Infinity,
            }
        }
    };

    const item = {
        hidden: { x: '100%' },
        visible: { x: 0, transition: { duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop' } }
    };

    return (
        <div className="flex justify-center overflow-hidden">
            <div className="logo-slider-container overflow-hidden max-w-[300px] md:w-full md:max-w-[600px] lg:w-full lg:max-w-[1200px]">
                <motion.ul 
                    className='flex justify-center gap-5 overflow-hidden'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {logos.map((logo, index) => (
                        <motion.li key={index} variants={item}>
                            <div className='bg-[#e87817] h-[80px] w-[200px] rounded-md shadow-md'>
                                <img className='w-full h-full object-contain' src={logo} alt={`logo-${index + 1}`} />
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}

export default LogoSlider;
