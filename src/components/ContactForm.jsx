import React, { useState } from 'react';
import Success from './Success';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b06ceeff-457c-4782-9c9b-b7d9fcfd633b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormSubmitted(true);
    }
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });



  return (
    <div className='w-full max-w-[700px]'>
      {formSubmitted ? (
        <Success />
      ) : (
        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center gap-10 w-full'>
          <motion.input
          ref={ref1}
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={inView1 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
          transition={{ duration: 2, ease: "easeInOut" }} 
            className='inputOutline outline-none border w-full h-[50px] pl-5 rounded-md' 
            type="text" 
            name="name" 
            placeholder='Your Name : *' 
            required 
          />
          <motion.input 
          ref={ref2}
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={inView2 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
          transition={{ duration: 2, ease: "easeInOut" }} 
            className='inputOutline outline-none border w-full h-[50px] pl-5 rounded-md' 
            type="email" 
            name="email" 
            placeholder='Your Email : *' 
            required 
          />
          <motion.input 
          ref={ref3}
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={inView3 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
          transition={{ duration: 2, ease: "easeInOut" }} 
            className='inputOutline outline-none border w-full h-[50px] pl-5 rounded-md' 
            type="number" 
            name="phone" 
            placeholder='Your Number :' 
          />
          <motion.input
          ref={ref4}
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={inView4 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
          transition={{ duration: 2, ease: "easeInOut" }}  
            className='inputOutline outline-none border w-full h-[50px] pl-5 rounded-md' 
            type="text" 
            name="subject" 
            placeholder='Subject :' 
          />
          <motion.textarea 
          ref={ref5}
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={inView5 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
          transition={{ duration: 2, ease: "easeInOut" }} 
            className='inputOutline outline-none border w-full h-[100px] pl-5 rounded-md resize-none' 
            name="message" 
            placeholder='Message : *' 
            required 
          />
          <motion.button
          ref={ref6}
          initial={{ opacity: 0, scale:0 }} 
          animate={inView6 ? { opacity: 1, scale:1 } : {}} 
          transition={{ delay:1, duration: 1, ease:"backInOut" }} 
          className='bg-[#ffae18] px-8 py-2 rounded-md text-white font-bold shadow-md cursor-pointer' type="submit">
            Send Now
          </motion.button>
        </form>
      )}
    </div>
  )
}

export default ContactForm;
