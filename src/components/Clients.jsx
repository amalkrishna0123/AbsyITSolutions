import React,{useEffect} from 'react'
import clientimg from "../assets/clients.png"
import clientsbanner from "../assets/clients-banner.png"
import logo1 from "../assets/Mb logo.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import logo8 from "../assets/logo8.png"
import logo9 from "../assets/logo9.png"
import logo10 from "../assets/logo10.png"
import logo11 from "../assets/logo11.png"
import logo12 from "../assets/logo12.png"
import logo13 from "../assets/logo14-1.png"
import logo14 from "../assets/logo14-2.png"
import logo15 from "../assets/logo15.png"
import logo16 from "../assets/logo16.png"
import logo17 from "../assets/logo17.png"
import logo18 from "../assets/logo18.png"
import logo19 from "../assets/logo19.png"
import logo20 from "../assets/logo20.png"
import logo21 from "../assets/logo21.png"
import logo22 from "../assets/logo22.png"
import logo23 from "../assets/logo23.png"
import logo24 from "../assets/logo24.png"
import logo225 from "../assets/logo25.png"
import Footer from './Footer'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import blue from "../assets/blue1.png"
import bottompng from "../assets/bottompng.png"
import banner2 from "../assets/company.jpg"
import clients from "../assets/clients.jpg"



const Clients = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const { ref: ref14, inView: inView14 } = useInView({ triggerOnce: true });
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

  return (
    <div>
      <div className='relative mt-20 w-full h-[500px] lg:h-[650px] flex justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${clients})`, backgroundPosition: 'bottom' }}>
        <div className='w-full h-full'>
          <img src={blue} className=' w-full h-full' alt="" />
        </div>
        <div className='absolute z-10 text-[52px] font-bold text-[#ffa200] text-center md:top-32'>
          Clients
          <span className='block text-sm text-center text-[#ffffff] md:px-20 lg:text-[16px] lg:px-56 lg:max-w-[1200px] lg:mx-auto'>
          Our clients include a diverse range of industries, each benefiting from our tailored software and hardware solutions. We are proud to support their success with innovative, reliable, and effective technology solutions.
          </span>
        </div>
        <div className=' absolute z-10 bottom-0'>
          <img src={bottompng} alt="" />
        </div>
      </div>
      <section className='mt-28 lg:mt-0 section lg:max-w-[1200px] mx-auto '>
        {/* <div className=' absolute -z-20 blur top-0 flex justify-center items-center mx-auto md:gap-10'>
          <img src={clientsbanner} alt="" />
        </div> */}
        <div className=' md:flex md:justify-center md:items-center'>
          <div>
            <motion.div
            ref={ref1}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView1 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className='text-center text-[42px] font-bold mb-5 text-[#291770]'>Our Clients</motion.div>
            <motion.div
            ref={ref2}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView2 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className=' text-center p-5 Clients-bg text-[#6b6b6b]'>At Absy Solutions, we take pride in our diverse and esteemed client base. Our commitment to delivering top-notch software and hardware solutions has earned us the trust and loyalty of businesses across various industries. We are dedicated to fostering long-term partnerships and helping our clients achieve their goals with innovative and reliable solutions.</motion.div>
          </div>
          <div>
            <motion.img
            ref={ref3}
            initial={{scale:0,opacity:0,x:-100}}
            animate={inView3 ? {scale:1,opacity:1,x:0} : {}}
            transition={{duration:1,delay:2,ease:'backInOut'}}
            src={clientimg} alt="" />
          </div>
        </div>
        <div className=' grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          <motion.div
          ref={ref4}
          initial={{y:-50,opacity:0}}
          animate={inView4 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo1} alt="" />
          </motion.div>
          <motion.div
          ref={ref5}
          initial={{y:-50,opacity:0}}
          animate={inView5 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo2} alt="" />
          </motion.div>
          <motion.div
          ref={ref6}
          initial={{y:-50,opacity:0}}
          animate={inView6 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo3} alt="" />
          </motion.div>
          <motion.div
          ref={ref7}
          initial={{y:-50,opacity:0}}
          animate={inView7 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo4} alt="" />
          </motion.div>
          <motion.div
          ref={ref8}
          initial={{y:-50,opacity:0}}
          animate={inView8 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain' src={logo5} alt="" />
          </motion.div>
          <motion.div
          ref={ref9}
          initial={{y:-50,opacity:0}}
          animate={inView9 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo6} alt="" />
          </motion.div>
          <motion.div
          ref={ref10}
          initial={{y:-50,opacity:0}}
          animate={inView10 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo7} alt="" />
          </motion.div>
          <motion.div
          ref={ref11}
          initial={{y:-50,opacity:0}}
          animate={inView11 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo8} alt="" />
          </motion.div>
          <motion.div
          ref={ref12}
          initial={{y:-50,opacity:0}}
          animate={inView12 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo9} alt="" />
          </motion.div>
          <motion.div
          ref={ref13}
          initial={{y:-50,opacity:0}}
          animate={inView13 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo10} alt="" />
          </motion.div>
          <motion.div
          ref={ref14}
          initial={{y:-50,opacity:0}}
          animate={inView14 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo11} alt="" />
          </motion.div>
          <motion.div
          ref={ref15}
          initial={{y:-50,opacity:0}}
          animate={inView15 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo12} alt="" />
          </motion.div>
          <motion.div
          ref={ref16}
          initial={{y:-50,opacity:0}}
          animate={inView16 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo13} alt="" />
          </motion.div>
          <motion.div
          ref={ref17}
          initial={{y:-50,opacity:0}}
          animate={inView17 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo14} alt="" />
          </motion.div>
          <motion.div
          ref={ref18}
          initial={{y:-50,opacity:0}}
          animate={inView18 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo15} alt="" />
          </motion.div>
          <motion.div
          ref={ref19}
          initial={{y:-50,opacity:0}}
          animate={inView19 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain' src={logo16} alt="" />
          </motion.div>
          <motion.div
          ref={ref20}
          initial={{y:-50,opacity:0}}
          animate={inView20 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo17} alt="" />
          </motion.div>
          <motion.div
          ref={ref21}
          initial={{y:-50,opacity:0}}
          animate={inView21 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo18} alt="" />
          </motion.div>
          <motion.div
          ref={ref22}
          initial={{y:-50,opacity:0}}
          animate={inView22 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain mix-blend-multiply' src={logo19} alt="" />
          </motion.div>
          <motion.div
          ref={ref23}
          initial={{y:-50,opacity:0}}
          animate={inView23 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-contain' src={logo20} alt="" />
          </motion.div>
          <motion.div
          ref={ref24}
          initial={{y:-50,opacity:0}}
          animate={inView24 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo21} alt="" />
          </motion.div>
          <motion.div
          ref={ref25}
          initial={{y:-50,opacity:0}}
          animate={inView25 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border' src={logo22} alt="" />
          </motion.div>
          <motion.div
          ref={ref26}
          initial={{y:-50,opacity:0}}
          animate={inView26 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo23} alt="" />
          </motion.div>
          <motion.div
          ref={ref27}
          initial={{y:-50,opacity:0}}
          animate={inView27 ? {y:0,opacity:1} : {}}
          transition={{duration:1,delay:1,ease:'backInOut'}}
          className=' w-[60%] h-[250px] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-[#ffffff]'>
            <img className=' rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border w-full h-full object-cover' src={logo24} alt="" />
          </motion.div>
        </div>
      </section>

      <section className=' mt-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default Clients
