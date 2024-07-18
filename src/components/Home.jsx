import React from 'react'
import task from "../assets/task.png"
import shade from "../assets/shade.png"
import dine from "../assets/Dine.png"
import startstay from "../assets/starstay.png"
import auric from "../assets/auric.png"
import clublogic from "../assets/clublogic.png"
import vtask from "../assets/vtask.png"
import magnet from "../assets/magnet.png"
import { TiTick } from "react-icons/ti";
import business from "../assets/business-solution.png"
import digital from "../assets/digital-marketing.png"
import customdevelopment from "../assets/custom-development.jpg"
import hardware from "../assets/hardware.png"
import cctv from "../assets/cctv-security.png"
import intercom from "../assets/intercom.png"
import getintouch from "../assets/getintouch.png"
import Footer from './Footer'
import frame1 from "../assets/absyframe1.png"
import frame2 from "../assets/absyframe2.png"
import circle from "../assets/circle-png-orange.png"
import Line from "../assets/orange-lines.png"
import { useNavigate } from "react-router-dom"
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import homeBanner from "../assets/intro.mp4"
import bannerContent from "../assets/banner-content.png"
import blue from "../assets/blue1.png"
import bottomImg from "../assets/bottompng.png"
import homebanner from "../assets/HomeBanner.png"
import { useState, useEffect } from 'react'
import LogoSlider from './LogoSlider'
import content from "../assets/content.png"
import useMediaQuery from './useMediaQuery'


const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },  // Start hidden and slightly below
        visible: { opacity: 1, y: 0 }   // End visible and at the original position
      };
      
      const LetterByLetterReveal = ({ text }) => (
        <div style={{ display: 'inline', whiteSpace: 'pre-wrap' }}>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.03, duration: 0.03 }} // Staggered reveal
              style={{ display: 'inline', letterSpacing: '0px' }} // Adjust letter spacing as needed
            >
              {char}
            </motion.span>
          ))}
        </div>
      );

      const slideInZoomVariants = {
        hidden: {
          scale: 0.1,          // Start slightly scaled down
          x: '50%',           // Start off-screen to the left
          opacity: 0           // Start invisible
        },
        visible: {
          scale: 1,            // End at normal size
          x: 0,                // End at original position
          opacity: 1,          // End visible
          transition: {
            scale: { duration: 1.2, ease: 'easeOut' },  // Zoom in duration and easing
            x: { duration: 1.2, ease: 'easeOut' },      // Slide in duration and easing
            opacity: { duration: 0.3 }                  // Fade in duration
          }
        }
      };

      const slideInZoomVariants2 = {
        hidden: {
          scale: 0.1,          // Start slightly scaled down
          x: '-50%',           // Start off-screen to the left
          opacity: 0           // Start invisible
        },
        visible: {
          scale: 1,            // End at normal size
          x: 0,                // End at original position
          opacity: 1,          // End visible
          transition: {
            scale: { duration: 1.2, ease: 'easeOut' },  // Zoom in duration and easing
            x: { duration: 1.2, ease: 'easeOut' },      // Slide in duration and easing
            opacity: { duration: 0.3 }                  // Fade in duration
          }
        }
      };

      const slideInUpVariants = {
        hidden: {
          y: 100,       // Start below the final position
          opacity: 0    // Start invisible
        },
        visible: {
          y: 0,         // End at the final position
          opacity: 1,   // End fully visible
          transition: {
            y: { duration: 0.8, ease: 'easeOut' },     // Sliding duration and easing
            opacity: { duration: 0.5, ease: 'easeOut' } // Fade-in duration and easing
          }
        }
      };


      const isMobile = useMediaQuery('(max-width: 768px)');

      const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
      const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
      const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
      const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
      const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
      const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
      const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
      const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
      const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });
      const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: true });
      const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: true });
      const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: true });
      const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: true });
      const { ref: re14, inView: inView14 } = useInView({ triggerOnce: true });
      const { ref: ref15, inView: inView15 } = useInView({ triggerOnce: true });
      const { ref: ref16, inView: inView16 } = useInView({ triggerOnce: true });
      const { ref: ref17, inView: inView17 } = useInView({ triggerOnce: true });
      const { ref: ref18, inView: inView18 } = useInView({ triggerOnce: true });
      const { ref: ref19, inView: inView19 } = useInView({ triggerOnce: true });
      const { ref: ref20, inView: inView20 } = useInView({ triggerOnce: true });
      const { ref: ref21, inView: inView21 } = useInView({ triggerOnce: true });
      const { ref: ref22, inView: inView22 } = useInView({ triggerOnce: true });
      const { ref: ref23, inView: inView23 } = useInView({ triggerOnce: true });
      const { ref: ref24, inView: inView24 } = useInView({ triggerOnce: true });
      const { ref: ref25, inView: inView25 } = useInView({ triggerOnce: true });
      const { ref: ref26, inView: inView26 } = useInView({ triggerOnce: true });
      const { ref: ref27, inView: inView27 } = useInView({ triggerOnce: true });
      const { ref: ref28, inView: inView28} = useInView({ triggerOnce: true });
      const { ref: ref29, inView: inView29 } = useInView({ triggerOnce: true });
      const { ref: ref30, inView: inView30 } = useInView({ triggerOnce: true });
      const { ref: ref31, inView: inView31 } = useInView({ triggerOnce: true });
      const { ref: ref32, inView: inView33 } = useInView({ triggerOnce: true });

      const [imageLoaded, setImageLoaded] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const handleImageLoad = () => setImageLoaded(true);
        const handleVideoLoad = () => setVideoLoaded(true);

        const imgElement = document.getElementById('homeImage');
        const videoElement = document.getElementById('homeVideo');

        if (imgElement.complete) {
            handleImageLoad();
        } else {
            imgElement.addEventListener('load', handleImageLoad);
        }

        if (videoElement.readyState >= 3) {
            handleVideoLoad();
        } else {
            videoElement.addEventListener('loadeddata', handleVideoLoad);
        }

        return () => {
            imgElement.removeEventListener('load', handleImageLoad);
            videoElement.removeEventListener('loadeddata', handleVideoLoad);
        };
    }, []);



      


  return (
   <div>
    {/* Blur Bg */}
    <div className='fixed blur-[30px] w-full h-full bg-[#065c5961] md:hidden hidden -z-50'>

    </div>
    <section className=' mt-20'>
        <div className=' relative'>
            <div className=' h-[550px] lg:h-[1200px] w-full'>
                <img id='homeImage' src={homebanner} className='h-full w-full object-cover z-10 mix-blend-multiply' alt="" />
                <video id='homeVideo' className=' absolute top-0 -z-10 opacity-80' autoPlay loop muted playsInline src={homeBanner} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
                <img className=' absolute top-0 w-full h-full object-cover opacity-50 lg:hidden' src={blue} alt="" />
                <img src={bottomImg} className=' absolute bottom-0' alt="" />
            </div>
            <div className=' flex justify-center items-center'>
                <div className=' absolute top-[10%] lg:top-[15%]'>
                   <div className=' md:justify-center md:items-center md:gap-10 lg:max-w-[1200px]'>
                      {/* Left */}
                    <div className=' flex justify-center items-center lg:mb-5 mb-3 md:w-[50%]'>
                        {/* <div className=''>
                            <motion.div
                            className=' relative flex justify-center homeBannerAnimation'>
                                <motion.img
                                ref={ref26}
                                initial={{scale:0, opacity:0}}
                                animate={inView26 ? {scale:1,opacity:1} : {}}
                                transition={{duration:1,delay:1,ease:"backInOut"}}
                                className=' drop-shadow-2xl mix-blend-multiply' src={content} alt="" />
                            </motion.div>
                        </div> */}
                    </div>
                    
                    {/* Right */}
                    <div className=' flex items-center justify-center'>
                        <div className=' text-center'>
                            <motion.div
                            ref={ref23}
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                            animate={inView23 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {} } 
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className=' lg:text-[102px] text-[42px] font-bold leading-tight lg:mb-5 mb-3 text-[#ffffff]'>Integrating Advanced Tech for Strategic Growth</motion.div>
                            <motion.div
                            ref={ref24}
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                            animate={ inView24 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                            transition={{ delay:1.1, duration: 2, ease: "easeInOut" }}
                            className=' text-[#aba0a0] mb-10 md:text-[18px] lg:max-w-[1200px]'>Absy IT Solutions specialize in integrating advanced tech solutions that propel businesses forward strategically. Our innovative approach ensures operational efficiency and scalable growth, tailored to meet the unique needs of modern enterprises.</motion.div>
                            <motion.div
                            ref={ref25}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView25 ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 1,
                                delay: isMobile ? 2 : .1, // Set delay based on screen size
                                ease: 'backInOut'
                            }}
                            >
                                <button className=' HomeButton bg-white font-bold px-6 py-2 rounded-md cursor-pointer shadow-lg text-[#291770]' onClick={() => document.getElementById('homesection').scrollIntoView({ behavior: 'smooth' })}>Know More</button>
                            </motion.div>
                        </div>
                        
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
     <section className='section lg:mt-20 mt-0' id='homesection'>
       <div className=' absolute -z-10 opacity-30 lg:hidden'>
        <img className=' mix-blend-multiply' src={Line} alt="" />
       </div>
        <div className=' lg:flex lg:max-w-[1200px] lg:mx-auto lg:gap-10 lg:items-center'>
            <motion.div 
            // initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            // animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            // transition={{ duration: 2, ease: "easeInOut" }}
            className=' mt-10 text-center background lg:w-[60%]'>
                <motion.div 
                ref={ref27}
                initial={{ opacity: 0 }}
                animate={inView27 ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className=' text-lg font-medium text-[#e87817]'>- Absy IT Solutions -</motion.div>
                <motion.div 
                    ref={ref28}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView28 ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                    duration: 1, 
                    ease: 'easeOut', 
                    delay: 0.3 }}  className=' pt-5 text-[40px] leading-[47px] font-bold text-[#291770]'>
                    Driving Business Forward with <motion.span 
                    ref={ref32}
                    initial={{ opacity: 0, y: 50 }} 
                    animate={inView23 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5 }} 
                    className=' block'>Advanced Tech Solutions</motion.span>
                </motion.div>
                <motion.div
                ref={ref29}
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                animate={ inView29 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {} }
                transition={{ duration: 2, ease: "easeInOut" }}
                className='text-sm pt-5 text-[#6b6b6b] lg:text-base'>
                    Delivering state-of-the-art software and hardware solutions tailored to propel your business towards unparalleled growth and efficiency. From startups to global enterprises, we bridge the gap between innovation and success.
                </motion.div>
                <motion.div
                ref={ref30}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView30 ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay:1.2, ease:'backInOut' }}
                className=' mt-10 mb-10 md:mt-10'>
                    <button className=' Button bg-[#e87817] px-6 py-2 rounded-md text-white font-medium shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' onClick={() => document.getElementById('about_us').scrollIntoView({ behavior: 'smooth' })}>Discover More</button>
                </motion.div>
                {/* <div className=' flex justify-center items-center'>
                    <div className=' h-[250px] bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4'>
                        <ul className=' flex flex-wrap justify-around'>
                            <li className='m-0'><img src={task} className=' h-32' alt="TASK'OS" /></li>
                            <li className='m-0'><img src={shade} className='h-20' alt="Shade" /></li>
                            <li className='m-0'><img src={dine} className='h-20' alt="DINE" /></li>
                            <li className='m-0'><img src={startstay} className='h-20' alt="STARSTAY" /></li>
                            <li className='m-0'><img src={auric} className='h-20' alt="Auric" /></li>
                            <li className='m-0'><img src={clublogic} className='h-20' alt="Club Logic" /></li>
                            <li className='m-0'><img src={vtask} className='h-20' alt="VTASK" /></li>
                            <li className='m-0'><img src={magnet} className='h-20' alt="Magnet" /></li>
                        </ul>
                    </div>
                </div> */}
            </motion.div>
            <div className='lg:w-[60%]'>
                <motion.img
                ref={ref31}
                src={frame1}
                alt="Decorative Frame"
                initial="hidden"
                animate={inView31 ? "visible" : "hidden" }
                variants={slideInZoomVariants}
                className='drop-shadow-xl lg:w-auto lg:h-[400px]'
                />
            </div>
        </div>
        <div className={` mt-10 bg-[url(${circle})] mb-10`}>
            <div className=' absolute -z-10 mix-blend-multiply opacity-20 md:hidden'>
                <img className='blink-animation' src={circle} alt="" />
            </div>
            <div className=' max-w-[900px] w-full h-[350px] border bg-[#ffffff] rounded-3xl shadow-[inset_-12px_-8px_40px_#46464620] grid px-3 py-5 items-center justify-center place-items-center grid-cols-2 lg:mx-auto lg:grid-cols-4'>
                <motion.div
                ref={ref15}
                initial={{y:-50,opacity:0}}
                animate={inView15 ? { y:0,opacity:1} : {}}
                transition={{duration:.5, delay:.5, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img src={task} className='ScaleUpImg' alt="" />
                </motion.div>
                <motion.div
                ref={ref16}
                initial={{y:-50,opacity:0}}
                animate={inView16 ? {y:0,opacity:1} : {}}
                transition={{duration:.7, delay:.7, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img className='ScaleUpImg' src={shade} alt="" />
                </motion.div>
                <motion.div
                ref={ref17}
                initial={{y:-50,opacity:0}}
                animate={inView17 ? {y:0,opacity:1} : {}}
                transition={{duration:.8, delay:.8, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img src={vtask} className='ScaleUpImg' alt="" />
                </motion.div>
                <motion.div
                ref={ref18}
                initial={{y:-50,opacity:0}}
                animate={inView18 ? {y:0,opacity:1} : {}}
                transition={{duration:.9, delay:.9, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img src={dine} className='ScaleUpImg' alt="" />
                </motion.div>
                <motion.div
                ref={ref19} 
                initial={{y:-50,opacity:0}}
                animate={inView19 ? {y:0,opacity:1} : {}}
                transition={{duration:1, delay:1, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img src={clublogic} className='ScaleUpImg' alt="" />
                </motion.div>
                <motion.div
                ref={ref20}
                initial={{y:-50,opacity:0}}
                animate={inView20 ? {y:0,opacity:1} : {}}
                transition={{duration:1.1, delay:1.1, ease:"easeInOut"}}
                className=' w-[100px]'>
                    <img src={magnet} className='ScaleUpImg' alt="" />
                </motion.div>
                <motion.div 
                ref={ref21}
                initial={{y:-50,opacity:0}}
                animate={inView21 ? {y:0,opacity:1} : {}}
                transition={{duration:1.2, delay:1.2, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img src={auric} className='ScaleUpImg' alt="" />
                </motion.div>
                <motion.div
                ref={ref22}
                initial={{y:-50,opacity:0}}
                animate={inView22 ?  {y:0,opacity:1} : {}}
                transition={{duration:1.3, delay:1.3, ease:"easeInOut"}}
                className=' w-[130px] h-auto'>
                    <img src={startstay} className='ScaleUpImg' alt="" />
                </motion.div>
            </div>
        </div>
    </section>

    <section className='section md:px-10' id='about_us'>
        <div className=' lg:flex lg:flex-row-reverse lg:max-w-[1200px] lg:mx-auto lg:gap-10 lg:items-center'>
            <div className=' mb-10 md:text-center md:grid md:place-items-center lg:w-[50%]'>
                <div className=' text-2xl font-bold mb-5 text-[#291770] lg:text-[52px]'>About Us</div>
                    <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                    animate={inView1 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className=' text-sm text-[#6b6b6b] lg:text-base mb-5 md:px-10'>
                        <LetterByLetterReveal text=""/>Our company specializes in delivering comprehensive software solutions across various industries.
                        From TASK'OS for financial management to Shade for hospital operations, VTASK for pharmacy efficiency,
                        DINE for restaurant management, STARSTAY for hotel administration, Magnet for school operations, Auric 
                        for jewelry retail, and Club Logic for fitness clubs, we provide innovative tools to streamline processes, 
                        enhance efficiency, and drive success in each sector.
                </motion.div>
                <div className=''>
                    <ul className=''>
                        <li className=' mb-5'>
                            <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                            animate={inView1 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                            transition={{ duration: 2.2, ease: "easeInOut" }}
                            className=' flex items-center gap-5'>
                                <div><TiTick className=' text-[#e87817] text-2xl'/></div>
                                <div className=' font-medium'>Scalable Software Solutions</div>
                            </motion.div>
                        </li>
                        <li className=' mb-5'>
                            <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                            animate={inView1 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                            transition={{ duration: 2.4, ease: "easeInOut" }}
                            className=' flex items-center gap-5'>
                                <div><TiTick className=' text-[#e87817] text-2xl'/></div>
                                <div className=' font-medium'>Expert Technical Architects</div>
                            </motion.div>
                        </li>
                        <li className=' mb-5'>
                            <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                            animate={inView1 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                            transition={{ duration: 2.6, ease: "easeInOut" }}
                            className=' flex items-center gap-5'>
                                <div><TiTick className=' text-[#e87817] text-2xl'/></div>
                                <div className=' font-medium'>Advanced Mobility Solutions</div>
                            </motion.div>
                        </li>
                    </ul>
                </div>
                <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView1 ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay:1.2, ease:'backInOut' }}
                className=' mt-5 px-6 py-2 bg-[#e87817] Button text-white font-medium rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Link to="/about">Know More</Link></motion.button>
            </div>
            <div className=' lg:w-[60%]'>
                <motion.img
                ref={ref2}
                alt="Decorative Frame"
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={slideInZoomVariants2}
                className=' drop-shadow-xl lg:h-[400px]' src={frame2} />
            </div>
        </div>
    </section>

    <section className=' mt-10 section mb-10 md:px-10'>
        <div className='2lg:max-w-[1200px] 2lg:mx-auto'>
        <motion.div
        ref={ref3}
        initial={{opacity:0}}
        animate={inView3 ? {opacity:1} : {}}
        transition={{duration:1.5, delay:1}}
        className=' text-2xl font-bold text-[#291770] text-center mb-5 lg:text-[52px]'>Our Creative Services</motion.div>
        <motion.div
        initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
        animate={inView3 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
        transition={{ duration: 2, ease: "easeInOut" }}
        className=' text-center text-sm mb-10 lg:px-20 2lg:px-36 text-[#6b6b6b] md:text-base'>Absy Solutions provides advanced software tailored to elevate business performance. Our commitment to innovation,
        quality development, and exceptional service drives our clients' success and sets us apart in the industry.</motion.div>

        {/* Creative Services */}
        
        <div className=' grid  gap-10 place-items-center grid-cols-1 lg:grid-cols-2 justify-center items-center '>
            <motion.div
            ref={ref4}
            initial={{y:-100, opacity:0}}
            animate={inView4 ? {y:0, opacity:1} : {}}
            transition={{duration:1,delay:1, ease:'backInOut'}}
            className=' w-auto h-[280px] md:h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center BoxHover'>
                <div className=' w-[40%]'><img src={business} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-3 md:mb-5'>Business Softwares</div>
                    <div className=' text-sm text-[#6b6b6b]'>
                    Absy Solutions offers intuitive business software designed to streamline operations and boost efficiency.
                    Our solutions simplify complex tasks, providing you with real-time insights and seamless management.
                    </div>
                </div>
            </motion.div>

            

            <motion.div
            ref={ref5}
            initial={{y:-100, opacity:0}}
            animate={inView5 ? {y:0, opacity:1} : {} }
            transition={{duration:1.1,delay:1.1, ease:'backInOut'}}
            className=' w-auto h-[280px] md:h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center BoxHover'>
                <div className=' w-[40%]'><img src={customdevelopment} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-3 md:mb-5'>Customized Software Development</div>
                    <div className=' text-sm text-[#6b6b6b]'>
                    Absy Solutions creates bespoke software tailored to your unique business needs. 
                    Our custom development ensures a perfect fit, optimizing performance and driving growth for your organization.
                    </div>
                </div>
            </motion.div>
            <motion.div
            ref={ref6}
            initial={{y:-100, opacity:0}}
            animate={inView6 ? {y:0, opacity:1} : {}}
            transition={{duration:1.2,delay:1.2, ease:'backInOut'}}
            className=' w-auto h-[280px] md:h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center BoxHover'>
                <div className=' w-[40%]'><img src={hardware} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-3 md:mb-5'>Computer Hardware Sales & Services</div>
                    <div className=' text-sm text-[#6b6b6b]'>
                    Absy Solutions provides top-notch computer hardware sales and services, ensuring reliable performance and support. 
                    We offer high-quality products and expert assistance to keep your systems running smoothly.
                    </div>
                </div>
            </motion.div>
            <motion.div
            ref={ref7}
            initial={{y:-100, opacity:0}}
            animate={inView7 ? {y:0, opacity:1} : {}}
            transition={{duration:1.3,delay:1.3, ease:'backInOut'}}
            className=' w-auto h-[280px] md:h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center BoxHover'>
                <div className=' w-[40%]'><img src={cctv} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-3 md:mb-5'>CCTV & Security System</div>
                    <div className=' text-sm text-[#6b6b6b]'>
                    Absy Solutions offers advanced CCTV and security systems to safeguard your premises. 
                    Our cutting-edge technology ensures comprehensive protection and peace of mind with reliable monitoring and support
                    </div>
                </div>
            </motion.div>

            <motion.div
            ref={ref8}
            initial={{y:-100, opacity:0}}
            animate={inView8 ? {y:0, opacity:1} : {}}
            transition={{duration:1.4,delay:1.4, ease:'backInOut'}}
            className=' w-auto h-[280px] md:h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center BoxHover'>
                <div className=' w-[40%]'><img src={intercom} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-3 md:mb-5'>Intercom & EPABX</div>
                    <div className=' text-sm text-[#6b6b6b]'>
                    Absy Solutions provides efficient intercom and EPABX systems to streamline communication within your organization. 
                    Our solutions ensure clear, reliable connectivity and enhance internal collaboration
                    </div>
                </div>
            </motion.div>

            <motion.div
            ref={ref9}
            initial={{y:-100, opacity:0}}
            animate={inView9 ? {y:0, opacity:1} : {}}
            transition={{duration:1.5,delay:1.5, ease:'backInOut'}}
            className=' w-auto h-[280px] md:h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center BoxHover'>
                <div className=' w-[40%]'><img src={digital} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-3 md:mb-5'>Digital Marketing</div>
                    <div className=' text-sm text-[#6b6b6b]'>
                    Absy Solutions offers intuitive business software designed to streamline operations and boost efficiency.
                    Our solutions simplify complex tasks, providing you with real-time insights and seamless management.
                    </div>
                </div>
            </motion.div>

        </div>
        </div>
    </section>

    <section className='mt-20 section mb-10 md:px-10 lg:max-w-[1200px]'>
        <div className='flex justify-center items-center'>
            <div>
            <div className='text-center text-xl font-semibold lg:font-bold lg:mb-5 mb-2 text-[#e87817]'>- Our Partners -</div>
            <div className='text-center lg:text-[42px] text-3xl font-bold text-[#291770]'>People Who Trust Us</div>
            <div className='mt-10 lg:mt-16 overflow-hidden'>
                <LogoSlider />
            </div>
            </div>
        </div>
    </section>


    <section className=' section md:px-10'>
       <div className=''>
            <div className=' lg:flex lg:items-center lg:justify-center lg:gap-10 max-w-[1200px] lg:mx-auto'>
                <div>
                    <motion.div
                    ref={ref10}
                    initial={{opacity:0}}
                    animate={inView10 ? {opacity:1} : {}}
                    transition={{duration:1,delay:1}}
                    className=' text-center text-2xl font-bold mb-5 lg:text-[52px] lg:mb-10 text-[#291770]'>Drop Us a Line</motion.div>
                    <motion.div
                    ref={ref11}
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                    animate={inView11 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                    transition={{ duration: 2.6, delay:1, ease: "easeInOut" }}
                    className=' text-center text-sm mb-10 text-[#6b6b6b] md:text-base'>Reach out to Absy Solutions for all your inquiries and support. Our team is here to assist you and provide 
                    the information you need. Contact us today to start a conversation</motion.div>
                    <motion.div
                    ref={ref26}
                    initial={{scale:0, opacity:0}}
                    animate={inView26 ? {scale:1, opacity:1} : {}}
                    transition={{duration:1,delay:1.2,ease:'backInOut'}}
                    className=' hidden lg:flex mt-10 text-center justify-center'><button className=' px-4 py-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#e87817] text-white font-medium'><Link to="/contact">Contact Us</Link></button></motion.div>
                </div>
                <div className=''>
                        <motion.div
                        ref={ref12}
                        initial={{scale:0, opacity:0}}
                        animate={inView12 ? {scale:1,opacity:1} : {}}
                        transition={{duration:1,delay:1,ease:"backInOut"}}
                        >
                            <img className='drop-shadow-xl' src={getintouch} alt="" />
                        </motion.div>
                        <motion.div
                        ref={ref13}
                        initial={{scale:0,opacity:0}}
                        animate={inView13 ? {scale:1,opacity:1} : {}}
                        transition={{duration:1,delay:1,ease:'backInOut'}}
                        onClick={() => navigate('/about')}
                        className=' mt-10 text-center lg:hidden '><button className=' px-6 py-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#e87817] text-white font-medium Button'><Link to="/contact">Contact Us</Link></button></motion.div>
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

export default Home
