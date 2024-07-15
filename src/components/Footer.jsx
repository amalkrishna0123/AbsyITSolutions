import React from 'react'
import logo from "../assets/logo.png"
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


const Footer = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  return (
    <motion.div
    ref={ref1}
    initial={{height:0,opacity:0}}
    animate={inView1 ? {height:"100%",opacity:1} : {}}
    transition={{duration:1, delay:1,ease:'backInOut'}}
    className=''>
      <div className=' section md:px-10 md:grid md:grid-cols-2 md:place-items-start md:gap-10 border-b-2 pb-5 border-[#494949] pr-5 2lg:grid-cols-4 2lg:mx-auto'>
        <div className=' mb-7'>
            <div className=' mb-7'>
                <img className=' h-auto w-[200px]' src={logo} alt="" />
            </div>
            <div className=' text-sm text-[#6b6b6b]'>
                At Absy Solutions, we are dedicated to providing innovative software and hardware solutions that drive business success. Our commitment to quality, expertise, and customer satisfaction sets us apart. Contact us today to discover how our tailored solutions can enhance your operations and support your growth.
            </div>
        </div>

        <div className=' mb-7'>
            <div className=' text-xl font-semibold mb-5'>Our Services</div>
            <div>
                <ul className=' leading-[35px] text-[#6b6b6b]'>
                    <li>Business Softwares</li>
                    <li>Digital Marketing</li>
                    <li>Customized Software Development</li>
                    <li>Computer Hardware Sales & Services</li>
                    <li>CCTV & Security System</li>
                    <li>Intercom & EPABX</li>
                </ul>
            </div>
        </div>
        <div className=' mb-7'>
            <div className=' font-semibold text-xl mb-7'>Our Company</div>
            <div>
                <ul className=' leading-[35px] text-[#6b6b6b]'>
                    <li className='companyhover'><Link to="/">Home</Link></li>
                    <li className='companyhover'><Link to="/about">About Us</Link></li>
                    <li className='companyhover'><Link to="/softwares">Softwares</Link></li>
                    <li className='companyhover'><Link to="/services">Services</Link></li>
                    <li className='companyhover'><Link to="/clients">Clients</Link></li>
                    <li className='companyhover'><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>

        <div className=' mb-5'>
            <div className=' text-xl font-semibold mb-7'>Contact Us</div>
            <div className=' flex items-center gap-3 mb-7'>
                <div><MdLocationOn className=' text-2xl text-[#e87817]'/></div>
                <div className='text-[#6b6b6b]'>Ground Floor No. 57/19, 8th Cross,
                Bharathi Layout, SG Palya, Bangalore - 560029</div>
            </div>
            <div className=' flex items-center gap-3 mb-3'>
                <div><IoMdCall className=' text-xl font-bold text-[#e87817]'/></div>
                <div className='text-[#6b6b6b]'>+91 7411071274</div>
            </div>
            <div className=' flex items-center gap-3 mb-3'>
                <div><IoMdCall className=' text-xl font-bold text-[#e87817]'/></div>
                <div className='text-[#6b6b6b]'>+91 9632718876</div>
            </div>
            <div className=' flex items-center gap-3 mb-3'>
                <div><IoMdCall className=' text-xl font-bold text-[#e87817]'/></div>
                <div className='text-[#6b6b6b]'>+91 9916245165</div>
            </div>
            <div className=' flex items-center gap-3 mb-7'>
                <div><IoMdCall className=' text-xl font-bold text-[#e87817]'/></div>
                <div className='text-[#6b6b6b]'>+91 90363 47975</div>
            </div>
            <div className=' flex items-center gap-3'>
                <div><MdEmail className=' text-xl text-[#e87817]'/></div>
                <div className='text-[#6b6b6b]'>absyitsolutions@gmail.com</div>
            </div>
        </div>
      </div>
      {/* Social Media */}
      <div className='section flex gap-5 text-lg mb-10 md:px-10 md:pt-5 md:justify-center mt-5'>
        <a href="https://web.whatsapp.com/"><div className='socialLinks  p-3 rounded-full border border-black text-black cursor-pointer'><IoLogoWhatsapp/></div></a>
        <a href="https://www.facebook.com/"><div className='socialLinks  p-3 rounded-full border border-black text-black cursor-pointer'><FaFacebook/></div></a>
        <a href="https://www.instagram.com/"><div className='socialLinks  p-3 rounded-full border border-black text-black cursor-pointer'><AiFillInstagram/></div></a>
        <a href="https://www.linkedin.com/"><div className='socialLinks  p-3 rounded-full border border-black text-black cursor-pointer'><FaLinkedin/></div></a>
      </div>
      {/* Copyright */}
      <div className=' border-t border-[#6b6b6b] pt-5 pb-3'>
        <div className=' text-center'>copyright©2024 <span className=' font-semibold text-[#e87817]'>Absy IT Solutions</span></div>
      </div>
    </motion.div>
  )
}

export default Footer
