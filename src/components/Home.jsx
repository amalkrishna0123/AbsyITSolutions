import React from 'react'
import Orange from "../assets/orange-lines.png"
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

const Home = () => {
  return (
   <div>
    {/* Blur Bg */}
    <div className='fixed blur-[30px] w-full h-full bg-[#065c5961] -z-50'>

    </div>
     <section className='section lg:mt-20'>
       <div className=' absolute -z-10 opacity-30'>
        <img className=' mix-blend-multiply' src={Line} alt="" />
       </div>
        <div className=' lg:flex lg:max-w-[1200px] lg:mx-auto lg:gap-10 lg:items-center'>
            <div className=' mt-10 text-center background lg:w-[60%]'>
                <div className=' text-lg font-medium text-[#e87817]'>- Welcome to Absy Solutions -</div>
                <div className=' pt-5 text-[40px] leading-[47px] font-bold text-[#291770]'>
                    Driving Business Forward with <span className=' block'>Advanced Tech Solutions</span>
                </div>
                <div className=' text-sm pt-5 text-[#ffffff] lg:text-base'>
                    Delivering state-of-the-art software and hardware solutions tailored to propel your business
                    towards unparalleled growth and efficiency. From startups to global enterprises, we bridge the gap
                    between innovation and success.
                </div>
                <div className=' mt-10 mb-10 md:mt-10'>
                    <button className=' bg-[#e87817] px-6 py-2 rounded-md text-white font-medium shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>Discover More</button>
                </div>
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
            </div>
            <div className=' lg:w-[60%]'>
                <img className=' drop-shadow-xl lg:w-auto lg:h-[400px]' src={frame1} alt="" />
            </div>
        </div>
        <div className={`mt-10 bg-[url(${circle})] mb-10`}>
            <div className=' absolute -z-10 mix-blend-multiply opacity-20'>
                <img src={circle} alt="" />
            </div>
            <div className=' max-w-[900px] w-full h-[350px] border bg-[#ffffff] rounded-3xl shadow-[inset_-12px_-8px_40px_#46464620] grid gap-5 px-3 py-5 items-center justify-center place-items-center grid-cols-2 lg:mx-auto lg:grid-cols-3'>
                <div className=' w-[130px] h-auto'>
                    <img src={task} alt="" />
                </div>
                <div className=' w-[130px] h-auto'>
                    <img src={shade} alt="" />
                </div>
                <div className=' w-[130px] h-auto'>
                    <img src={vtask} alt="" />
                </div>
                <div className=' w-[130px] h-auto'>
                    <img src={dine} alt="" />
                </div>
                <div className=' w-[130px] h-auto'>
                    <img src={clublogic} alt="" />
                </div>
                <div className=' w-[100px]'>
                    <img src={magnet} alt="" />
                </div>
                <div className=' w-[130px] h-auto'>
                    <img src={auric} alt="" />
                </div>
                <div className=' w-[130px] h-auto'>
                    <img src={startstay} alt="" />
                </div>
            </div>
        </div>
    </section>

    <section className='section md:px-10'>
        <div className=' lg:flex lg:flex-row-reverse lg:max-w-[1200px] lg:mx-auto lg:gap-10 lg:items-center'>
            <div className=' mb-10 md:text-center md:grid md:place-items-center lg:w-[50%]'>
                <div className=' text-2xl font-bold mb-5 text-[#291770] lg:text-[52px]'>About Us</div>
                    <div className=' text-sm text-[#fff] lg:text-base mb-5 md:px-10'>
                        Our company specializes in delivering comprehensive software solutions across various industries.
                        From TASK'OS for financial management to Shade for hospital operations, VTASK for pharmacy efficiency,
                        DINE for restaurant management, STARSTAY for hotel administration, Magnet for school operations, Auric 
                        for jewelry retail, and Club Logic for fitness clubs, we provide innovative tools to streamline processes, 
                        enhance efficiency, and drive success in each sector.
                </div>
                <div className=''>
                    <ul className=''>
                        <li className=' mb-5'>
                            <div className=' flex items-center gap-5'>
                                <div><TiTick className=' text-[#e87817] text-2xl'/></div>
                                <div className=' font-medium'>Scalable Software Solutions</div>
                            </div>
                        </li>
                        <li className=' mb-5'>
                            <div className=' flex items-center gap-5'>
                                <div><TiTick className=' text-[#e87817] text-2xl'/></div>
                                <div className=' font-medium'>Expert Technical Architects</div>
                            </div>
                        </li>
                        <li className=' mb-5'>
                            <div className=' flex items-center gap-5'>
                                <div><TiTick className=' text-[#e87817] text-2xl'/></div>
                                <div className=' font-medium'>Advanced Mobility Solutions</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <button className=' mt-5 px-3 py-2 bg-[#e87817] text-white font-medium rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>Know More</button>
            </div>
            <div className=' lg:w-[60%]'>
                <img className=' drop-shadow-xl lg:h-[400px]' src={frame2} alt="" />
            </div>
        </div>
    </section>

    <section className=' mt-10 section mb-10 md:px-10'>
        <div className='2lg:max-w-[1200px] 2lg:mx-auto'>
        <div className=' text-2xl font-bold text-[#291770] text-center mb-5 lg:text-[52px]'>Our Creative Services</div>
        <div className=' text-center text-sm mb-10 lg:px-20 2lg:px-36 text-[#fff] md:text-base'>Absy Solutions provides advanced software tailored to elevate business performance. Our commitment to innovation,
        quality development, and exceptional service drives our clients' success and sets us apart in the industry.</div>
        <div className=' grid  gap-10 place-items-center grid-cols-1 lg:grid-cols-2 justify-center items-center '>
            <div className=' w-auto h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center'>
                <div className=' w-[40%]'><img src={business} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-5'>Business Softwares</div>
                    <div className=' text-sm text-[#7a7a7a]'>
                    Absy Solutions offers intuitive business software designed to streamline operations and boost efficiency.
                    Our solutions simplify complex tasks, providing you with real-time insights and seamless management.
                    </div>
                </div>
            </div>

            

            <div className=' w-auto h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center'>
                <div className=' w-[40%]'><img src={customdevelopment} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-5'>Customized Software Development</div>
                    <div className=' text-sm text-[#7a7a7a]'>
                    Absy Solutions creates bespoke software tailored to your unique business needs. 
                    Our custom development ensures a perfect fit, optimizing performance and driving growth for your organization.
                    </div>
                </div>
            </div>
            <div className=' w-auto h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center'>
                <div className=' w-[40%]'><img src={hardware} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-5'>Computer Hardware Sales & Services</div>
                    <div className=' text-sm text-[#7a7a7a]'>
                    Absy Solutions provides top-notch computer hardware sales and services, ensuring reliable performance and support. 
                    We offer high-quality products and expert assistance to keep your systems running smoothly.
                    </div>
                </div>
            </div>
            <div className=' w-auto h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center'>
                <div className=' w-[40%]'><img src={cctv} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-5'>CCTV & Security System</div>
                    <div className=' text-sm text-[#7a7a7a]'>
                    Absy Solutions offers advanced CCTV and security systems to safeguard your premises. 
                    Our cutting-edge technology ensures comprehensive protection and peace of mind with reliable monitoring and support
                    </div>
                </div>
            </div>

            <div className=' w-auto h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center'>
                <div className=' w-[40%]'><img src={intercom} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-5'>Intercom & EPABX</div>
                    <div className=' text-sm text-[#7a7a7a]'>
                    Absy Solutions provides efficient intercom and EPABX systems to streamline communication within your organization. 
                    Our solutions ensure clear, reliable connectivity and enhance internal collaboration
                    </div>
                </div>
            </div>

            <div className=' w-auto h-[250px] bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-3xl flex items-center justify-center'>
                <div className=' w-[40%]'><img src={digital} className=' w-[180px]' alt="" /></div>
                <div className=' w-[50%]'>
                    <div className=' font-semibold text-lg mb-5'>Digital Marketing</div>
                    <div className=' text-sm text-[#7a7a7a]'>
                    Absy Solutions offers intuitive business software designed to streamline operations and boost efficiency.
                    Our solutions simplify complex tasks, providing you with real-time insights and seamless management.
                    </div>
                </div>
            </div>

        </div>
        </div>
    </section>

    <section className=' section md:px-10'>
       <div className=''>
            <div className=' lg:flex lg:items-center lg:justify-center lg:gap-10 max-w-[1200px] lg:mx-auto'>
                <div>
                    <div className=' text-center text-2xl font-bold mb-5 lg:text-[52px] lg:mb-10 text-[#291770]'>Drop Us a Line</div>
                    <div className=' text-center text-sm mb-10 text-[#fff] md:text-base'>Reach out to Absy Solutions for all your inquiries and support. Our team is here to assist you and provide 
                    the information you need. Contact us today to start a conversation</div>
                    <div className=' hidden lg:flex mt-10 text-center justify-center'><button className=' px-4 py-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#e87817] text-white font-medium'>Contact Us</button></div>
                </div>
                <div className=''>
                        <div>
                            <img className='drop-shadow-xl' src={getintouch} alt="" />
                        </div>
                        <div className=' mt-10 text-center lg:hidden'><button className=' px-4 py-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#e87817] text-white font-medium'>Contact Us</button></div>
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
