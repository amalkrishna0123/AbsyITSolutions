import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import blue from "../assets/blue1.png"
import bottompng from "../assets/bottompng.png"
import banner2 from "../assets/company.jpg"
import contact from "../assets/contact.jpg"
import ContactForm from './ContactForm';

const Contact = () => {
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
  const { ref: ref28, inView: inView28 } = useInView({ triggerOnce: true });




  return (
    <div>
      <div className='relative mt-20 w-full h-[500px] lg:h-[650px] flex justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${contact})`, backgroundPosition: 'bottom' }}>
        <div className='w-full h-full'>
          <img src={blue} className=' w-full h-full' alt="" />
        </div>
        <div className='absolute z-10 text-[52px] font-bold text-[#ffa200] text-center md:top-32'>
          Contact Us
          <span className='block text-sm text-center text-[#ffffff] md:px-20 lg:text-[16px] lg:px-56 lg:max-w-[1200px] lg:mx-auto'>
          Get in touch with Absy Solutions for any inquiries or support. Our team is ready to assist you with your needs. Reach out via phone, email, or visit us in person—let’s work together to achieve your business goals.
          </span>
        </div>
        <div className=' absolute z-10 bottom-0'>
          <img src={bottompng} alt="" />
        </div>
      </div>
      <section className=' section md:px-10 mt-24 lg:mt-0 lg:max-w-[1400px]'>
        <div>
          <div className='mb-10'>
            <motion.div
            ref={ref1}
            initial={{opacity:0}}
            animate={inView1 ? {opacity:1} : {}}
            transition={{duration:1,delay:1,ease:'backInOut'}}
            className=' text-2xl font-bold mb-5 text-center text-[#291770] lg:text-[42px]'>Our Office</motion.div>
            <motion.div
            ref={ref2}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView2 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className=' text-center md:px-10 lg:px-20 2lg:px-52 text-[#6b6b6b] lg:text-[18px]'>Reach out to Absy Solutions for any inquiries or support. Our dedicated team is here to assist you. Visit our office, call us, or send an email to connect with us. We look forward to helping you achieve your business goals.</motion.div>
          </div>

          <div className=' grid grid-cols-1 place-items-center gap-10 mb-10 md:grid-cols-2 lg:grid-cols-3'>
            {/* Contact Details-1 */}
            <motion.div
             ref={ref3}
             initial={{y:100, opacity:0, scale:0}}
             animate={inView3 ? {y:0, opacity:1,scale:1} : {}}
             transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' w-full h-[200px] shadow-[inset_-12px_-8px_40px_#46464620] border rounded-xl p-10 flex justify-center items-start gap-5'>
              <div>
                <IoLocationSharp className=' text-3xl text-[#e87817]'/>
              </div>
              <div>
                <div className=' text-xl font-semibold mb-5'>Office Address</div>
                <div className='text-[#6b6b6b]'><div>Ground Floor No. 57/19, 8th Cross,
                Bharathi Layout, SG Palya, Bangalore - 560029</div></div>
              </div>
            </motion.div>
            {/* Contact Details-2 */}
            <motion.div
            ref={ref4}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView4 ? {y:0, opacity:1,scale:1} : {}}
            className=' w-full h-[200px] shadow-[inset_-12px_-8px_40px_#46464620] border rounded-xl p-10 flex justify-center items-start gap-5'>
              <div>
                <BiSolidPhoneCall className=' text-3xl text-[#e87817]'/>
              </div>
              <div>
                <div className=' text-xl font-semibold mb-5'>Phone Number & Email</div>
                <div className='text-[#6b6b6b]'><div>+91 7411071274, <span className=''>+91 9632718876,</span><span className='inline-block'>+91 9916245165, </span><span className=' inline-block'>+91 90363 47975</span></div></div>
                <div className='mt-2 text-[#6b6b6b]'>absyitsolutions@gmail.com</div>
              </div>
            </motion.div>
            {/* Contact-Detail-3 */}
            <motion.div
            ref={ref5}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView5 ? {y:0, opacity:1,scale:1} : {}}
            className=' w-full h-[200px] shadow-[inset_-12px_-8px_40px_#46464620] border rounded-xl p-10 flex justify-center items-start gap-5'>
              <div>
                <FaThumbsUp className=' text-3xl text-[#e87817]'/>
              </div>
              <div>
                <div className=' text-xl font-semibold mb-5'>Social Media</div>
                <div className='text-[#6b6b6b]'><div>Ground Floor No. 57/19, 8th Cross,
                Bharathi Layout, SG Palya, Bangalore - 560029</div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='section md:px-10 lg:max-w-[1200px]'>
        <div className='mb-10 md:flex md:justify-center md:items-center md:gap-10'>
          {/* Left */}
          <div className='flex flex-col justify-center items-center text-center mb-10'>
            <motion.div
            ref={ref25}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView25 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className='text-xl mb-2 text-[#e87817] font-bold'>- Get in Touch -</motion.div>
            <motion.div
            ref={ref26}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView26 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className='text-[42px] font-bold text-[#291770]'>Let's Get in Touch</motion.div>
            <motion.div
            ref={ref27}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView27 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className=' text-[#6b6b6b]'>Maximize your team's efficiency and reduce operating costs with our comprehensive solutions, designed to enhance your entire product.</motion.div>
          </div>
          {/* Right */}
          <motion.div
          className='flex justify-center items-center w-full lg:max-w-[1400px]'>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className=' mb-10'>
      <motion.div
      ref={ref6}
      initial={{y:-100,scale:0, opacity:0}}
      animate={inView6 ? {y:0, opacity:1,scale:1} :{}}
      transition={{duration:.8,delay:1,ease:'anticipate'}}
      className='flex justify-center'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6741021527146!2d77.6066919!3d12.9286555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500075f3745%3A0x1f982880ffd46928!2sAbsy%20it%20solutions!5e0!3m2!1sen!2sin!4v1720525464020!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Contact
