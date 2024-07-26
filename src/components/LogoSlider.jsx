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
import posi from "../assets/posi.png"
import impact from "../assets/impact.png"
import honey from "../assets/honey.png"
import hik from "../assets/hik.png"
import dlink from "../assets/dlink.png"
import tvs from "../assets/tvs.png"


const LogoSlider = () => {
    const logos = [
        { id: 1, src: posi},
        { id: 2, src: impact},
        { id: 3, src: honey},
        { id: 4, src: hik},
        { id: 5, src: dlink},
        { id: 6, src: tvs},
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
