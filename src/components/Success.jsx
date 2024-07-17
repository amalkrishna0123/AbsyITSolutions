import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../Animation.json"
import { px } from 'framer-motion';
import { Link } from 'react-router-dom';
// import blue from "../assets/blue1.png"

const Success = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
  return (
    <div className=' fixed top-0 left-0 w-full h-full bg-[#fff] flex items-center justify-center z-40'>
      <div className=' section h-[500px] w-full bg-[#bdbdbd] mt-10 rounded-3xl border shadow-lg lg:max-w-[900px]'>
       <div className=' mt-10'>
        <Lottie options={defaultOptions} height={200} width={200}/>
       </div>
       <div className=' text-center text-xl font-bold text-white mt-10 mb-3 lg:text-[38px] lg:mb-5'>Your Mail Send Successfully !</div>
       <div className=' text-sm text-center px-10 text-[#565454] lg:max-w-[700px] mx-auto'>Thank you for reaching out to us. We appreciate your patience and will mail you as soon as possible with the information or assistance you need</div>
       <div className=' flex justify-center items-center mt-5'>
        <Link to="/"><button className=' px-8 bg-[#fff] py-2 rounded-3xl shadow-sm font-semibold text-[#ff9100] cursor-pointer'>Go Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Success
