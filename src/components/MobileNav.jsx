import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import {motion, AnimatePresence, easeInOut, easeOut} from "framer-motion";

const MobileNav = ({setMenuOpen}) => {
  const [menu, setMenu] = useState(false)

  const containerVariants = {
    initial: { 
        opacity: 0,
        height: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
     },
    animate: { height: "100%", opacity: 1 },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
  };


  const linkVariants = {
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.4 } },
    exit: { opacity: 0, y: 90, transition: { ease: "easeInOut", duration: 0.4 } },
  };

  

  return (
    <div>
      <AnimatePresence>
        <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit={{
            height:0,
            opacity:0,
            transition:{
                ease:easeInOut,
                duration:.8
            }
        }}
        className=' z-[200] fixed w-full h-full bg-[#ff9100] flex justify-center items-center flex-col'>
          <div className='absolute top-20 right-20 cursor-pointer'>
              <IoIosCloseCircle onClick={() => setMenuOpen(false)} className=' text-3xl text-[#070022]'/>
          </div>
          <ul className=' flex flex-col justify-center items-center gap-7 text-xl text-white font-semibold'>
            <motion.li 
            variants={linkVariants}
            initial="initial"
            animate={{
                y:0,
                opacity:1,
                animationDelay:1,
                transition:{
                    ease: easeInOut,
                    duration:1.4,
                }
            }}
            exit="exit"
            ><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></motion.li>
            <motion.li 
            variants={linkVariants}
            initial="initial"
            animate={{
                y:0,
                opacity:1,
                animationDelay:1,
                transition:{
                    ease:easeInOut,
                    duration:1.3
                }
            }}
            exit="exit"
            ><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></motion.li>
            <motion.li
            variants={linkVariants}
            initial="initial"
            animate={{
                y:0,
                opacity:1,
                animationDelay:1,
                transition:{
                    ease: easeInOut,
                    duration:1.2,
                }
            }}
            exit="exit"
            ><Link to="/softwares" onClick={() => setMenuOpen(false)}>Softwares</Link></motion.li>
            <motion.li
            variants={linkVariants}
            initial="initial"
            animate={{
                y:0,
                opacity:1,
                animationDelay:1,
                transition:{
                    ease: easeInOut,
                    duration:1,
                }
            }}
            exit="exit"
            ><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></motion.li>
            <motion.li
            variants={linkVariants}
            initial="initial"
            animate={{
                y:0,
                opacity:1,
                animationDelay:1,
                transition:{
                    ease: easeInOut,
                    duration:.8,
                }
            }}
            exit="exit"
            ><Link to="/clients" onClick={() => setMenuOpen(false)}>Clients</Link></motion.li>
            <motion.li
            variants={linkVariants}
            initial="initial"
            animate={{
                y:0,
                opacity:1,
                animationDelay:1,
                transition:{
                    ease: easeInOut,
                    duration:.6,
                }
            }}
            exit="exit"
            ><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></motion.li>
          </ul>

        </motion.div>
        <div>
          
        </div>
      </AnimatePresence>
    </div>
  )
}

export default MobileNav
