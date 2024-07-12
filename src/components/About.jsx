import React from 'react'
import Navbar from './Navbar'
import about from "../assets/about.png"
import { TiTick } from "react-icons/ti";
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpg"
import team5 from "../assets/team5.jpg"
import team6 from "../assets/team6.jpg"
import Footer from './Footer';
import waveline from "../assets/waveline.jpg"
import bg3 from "../assets/bg3.png"
import Line from "../assets/orange-lines.png"
import { motion } from 'framer-motion';


const About = () => {
  return (
    <div className=' md:mt-16'>
      {/* Line */}
      <div className=' absolute -z-20'>
        <img src={Line} className=' mix-blend-multiply opacity-15' alt="" />
      </div>
      {/* Wave Line */}
      <div className='-z-10 absolute hidden'>
        <img className=' mix-blend-multiply opacity-30' src={bg3} alt="" />
      </div>
      {/* Bg */}
      <div className=' -z-30 blur-[20px] absolute w-full h-[950px] md:h-[700px] lg:h-[600px] bg-[#606a1561]'>

      </div>
      <section className='section md:px-10 mt-20'>
          <div className=' mb-10 lg:flex lg:justify-center max-w-[1200px] lg:mx-auto lg:items-center'>
            <div className=' lg:w-[60%]'>
              <div>
                <motion.img
                initial={{opacity:0,scale:0,x:-50}}
                animate={{opacity:1,scale:1,x:0}}
                transition={{duration:1,delay:1,ease:'backInOut'}}
                src={about} className=' drop-shadow-lg' alt="" />
              </div>
            </div>
            <div className=' lg:w-[40%]'>
              <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1,delay:1}}
              className=' text-[#e87817] font-semibold mb-7'>- About Absy IT Solutions -</motion.div>
              <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
              transition={{ duration: 2, ease: "easeInOut" }}
              className=' text-xl font-bold mb-5'>We are Focused on <span className=' block'>Exceptional Service and Innovation</span></motion.div>
              <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className='mb-7'>Absy Solutions is a team of forward-thinking professionals dedicated to delivering cutting-edge software 
              and hardware solutions. We leverage the latest technologies to address every aspect of modern business needs, 
              offering comprehensive solutions that drive innovation and efficiency across various industries.
              </motion.div>
              <div className=' flex flex-col gap-4 mb-7'>
                <div className=' flex items-center gap-3'>
                  <div className=' text-[#e87817]'><TiTick/></div>
                  <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                  animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                  className=' font-semibold'>Expert Technical Architects</motion.div>
                </div>
                <motion.div
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className=' flex items-center gap-3'>
                  <div className=' text-[#e87817]'><TiTick/></div>
                  <div className=' font-semibold'>Scalable Software Solutions</div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
                transition={{ duration: 2.6, ease: "easeInOut" }}
                className=' flex items-center gap-3'>
                  <div className=' text-[#e87817]'><TiTick/></div>
                  <div className=' font-semibold'>Advanced Mobility Solutions</div>
                </motion.div>
              </div>
              <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
              transition={{ duration: 2.8, ease: "easeInOut" }}
              >
              At Absy Solutions, we specialize in providing advanced software and hardware solutions designed 
              to optimize business operations. Our offerings include versatile business software for financial management, 
              hospital administration, pharmacy operations, restaurant and hotel management, educational systems, and more. 
              We combine innovative technology with tailored features to enhance efficiency, streamline processes, 
              and support the diverse needs of modern enterprises.
              </motion.div>
            </div>
          </div>
          <div className='-z-10 absolute right-10'>
        <img className=' mix-blend-multiply opacity-30' src={bg3} alt="" />
      </div>
      </section>

      <section className='section md:px-10'>
        <div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,delay:1}}
            className=' text-xl font-bold mb-5 md:text-center text-center'>Meet Our Team</motion.div>
            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className='mb-7 md:text-center md:px-10 lg:px-20 2lg:px-40 text-center'>our team is made up of passionate and experienced professionals committed to excellence. 
            We bring together a blend of skills and expertise to ensure top-quality solutions and exceptional results for our clients.</motion.div>
            {/* Team Members */}
            <div className=' grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 max-w-[1200px] 2lg:grid-cols-3 lg:mx-auto'>
              <div className='ScaleUpImg w-full h-[400px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team1} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </div>
              <div className='ScaleUpImg w-full h-[400px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team2} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </div>
              <div className='ScaleUpImg w-full h-[400px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team3} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </div>
              <div className='ScaleUpImg w-full h-[400px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team4} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </div>
              <div className='ScaleUpImg w-full h-[400px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team5} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </div>
              <div className='ScaleUpImg w-full h-[400px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team6} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </div>
            </div>
        </div>
      </section>

      <section className=' mt-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default About
