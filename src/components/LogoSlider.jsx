import React from 'react'
import logo1 from "../assets/part1.png"
import logo2 from "../assets/part2.png"
import logo3 from "../assets/part3.png"
import logo4 from "../assets/part4.png"
import logo5 from "../assets/part5.png"
import logo6 from "../assets/part6.png"
import logo7 from "../assets/part7.png"
import logo8 from "../assets/part8.png"
import logo9 from "../assets/part9.png"
import logo10 from "../assets/part10.png"
import logo11 from "../assets/part11.png"
import logo12 from "../assets/part12.png"
import logo13 from "../assets/part13.png"
import logo14 from "../assets/part14.png"
import logo15 from "../assets/part15.png"
import { motion } from "framer-motion"


const LogoSlider = () => {
    const logos = [
        { id: 1, src: logo1},
        { id: 2, src: logo2},
        { id: 3, src: logo3},
        { id: 4, src: logo4},
        { id: 5, src: logo5},
        { id: 6, src: logo6},
        { id: 7, src: logo7},
        { id: 8, src: logo8},
        { id: 9, src: logo9},
        { id: 10, src: logo10},
        { id: 11, src: logo11},
        { id: 12, src: logo12},
        { id: 13, src: logo13},
        { id: 14, src: logo14},
        { id: 15, src: logo15},
        
    ];
    const animationVariants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    duration: logos.length * 2, // Adjust speed based on the number of logos
                    ease: 'linear',
                    repeat: Infinity,
                },
            },
        },
    };
  return (
    <div className='logo-slider'>
        <motion.div
         className="logo-slider md:gap-[40px] lg:gap-[60px]" variants={animationVariants} animate="animate"
        >
            {logos.map((logo)=>(
                <motion.img
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                key={logo.id}
                src={logo.src} className='logo' alt="" />
            ))}
        </motion.div>
    </div>
  )
}

export default LogoSlider
