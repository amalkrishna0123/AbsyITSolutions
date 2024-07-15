import React from 'react'
import cctv from "../assets/cctv-security.png"
import networking from "../assets/networking.png"
import intercom from "../assets/intercom.png"
import initial from "../assets/initial-consultant.png"
import designsolution from "../assets/design-solution.png"
import productselection from "../assets/product-selection.png"
import installsetup from "../assets/install-setup.png"
import ongoing from "../assets/ongoing-support.png"
import Footer from './Footer'
import animation1 from "../assets/animation1.png"
import animation2 from "../assets/animation2.png"
import animation3 from "../assets/animation3.png"
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import banner2 from "../assets/company.jpg"
import bottompng from "../assets/bottompng.png"
import blue from "../assets/blue1.png"
import networking1 from "../assets/networking1.jpg" 


const Services = () => {
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
  return (
    <div>
      <div className='fixed blur-[30px] w-full h-full bg-[#2916ff5b] -z-50 hidden'>

      </div>
      <div className=' w-[85%] md:w-[700px] h-[400px] md:h-[600px] bg-[#e87817] rounded-full absolute -z-10 hidden translate-x-[-50%] md:translate-x-[-30%] blur-[30px]'>
      </div>
      
      
      <div className='relative mt-20 w-full h-[500px] flex justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${networking1})`, backgroundPosition: 'bottom' }}>
        <div className='w-full h-full'>
          <img src={blue} className=' w-full h-full' alt="" />
        </div>
        <div className='absolute z-10 text-[52px] font-bold text-[#ffa200] text-center md:top-32'>
          Services
          <span className='block text-sm text-center text-[#ffffff] md:px-20 lg:text-[16px] lg:px-56'>
          We offer a wide range of services, including software development, hardware sales, security systems, and networking solutions. Our expert team is dedicated to delivering high-quality, customized services to meet your business needs and drive success.
          </span>
        </div>
        <div className=' absolute z-10 bottom-0'>
          <img src={bottompng} alt="" />
        </div>
      </div>
      <section className='section mb-10 md:px-10 lg:max-w-[1200px] lg:mx-auto md:text-center z-50 mt-28 lg:mt-0'>
        {/* Animation */}
      <div className=' absolute -z-20 right-5 md:right-24 lg:right-52'>
        <img className=' w-auto h-[50px] blink-software' src={animation1} alt="" />
      </div>
        <div>
          <div>
            <motion.div
            ref={ref1}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView1 ?  { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className=' mb-5 text-2xl font-bold text-[#291770]'>Complete Hardware & Security Solutions</motion.div>
            <motion.div
            ref={ref2}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView2 ?  { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className=' md:px-52 text-[#6b6b6b]'>We offer a complete range of hardware services to meet your needs. From sales 
                and installation of cutting-edge security systems, including CCTV and advanced networking solutions, 
                to intercom and EPABX systems, we provide reliable and comprehensive hardware solutions designed to enhance 
                your operational efficiency and security.
            </motion.div>
          </div>
        </div>
      </section>

      <section className='section mb-10 md:px-10 lg:max-w-[1200px]'>
        <div>

          <motion.div
          className=' md:flex justify-center items-center gap-10 mb-10'>
            <motion.div
            ref={ref2}
            initial={{x:-100, opacity:0, scale:0}}
            animate={inView2 ? {x:0, opacity:1,scale:1} : {}}
            transition={{duration:1.5,delay:1,ease:'circInOut'}}
            className='lg:w-[50%] border rounded-3xl p-10 shadow-lg'>
              <div className=' text-xl font-semibold mb-5'>CCTV & Security Systems</div>
              <div className='text-[#6b6b6b]'>Absy Solutions delivers cutting-edge CCTV and security systems to safeguard your property. Our solutions offer 
              reliable surveillance and comprehensive protection, ensuring peace of mind with advanced monitoring technology.</div>
            </motion.div>
            <motion.div
            ref={ref3}
            initial={{x:100, opacity:0, scale:0}}
            animate={inView3 ? {x:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' lg:w-[50%]'>
              <div>
                <img src={cctv} alt="" />
              </div>
            </motion.div>
          </motion.div>
          {/* Blur Image */}
          {/* <div className=' w-[85%] md:w-[500px] h-[400px] md:h-[400px] bg-[#e87817] rounded-full absolute -z-10 -translate-x-[-50%] translate-x md:-translate-x-[-100%]  blur-[30px]'>
          </div> */}

          <div className=' md:flex md:flex-row-reverse md:justify md:items-center md:gap-10 mb-10'>
            <motion.div
            ref={ref4}
            initial={{x:-100, opacity:0, scale:0}}
            animate={inView4 ? {x:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' lg:w-[50%] border rounded-3xl p-10 shadow-lg'>
              <div className=' text-xl font-semibold mb-5'>Networking</div>
              <div className='text-[#6b6b6b]'>Absy Solutions offers advanced networking solutions to enhance your connectivity and streamline communication. 
              Our services ensure reliable, secure, and efficient network infrastructure tailored to meet your business needs.</div>
            </motion.div>
            <motion.div
            ref={ref5}
            initial={{x:100, opacity:0, scale:0}}
            animate={inView5 ? {x:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='lg:w-[50%]'>
              <div>
                <img src={networking} alt="" />
              </div>
            </motion.div>
          </div>

          <div className='md:flex md:justify-center md:items-center md:gap-10'>
            <motion.div
            ref={ref6}
            initial={{x:-100, opacity:0, scale:0}}
            animate={inView6 ? {x:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='lg:w-[50%] border rounded-3xl p-10 shadow-lg'>
              <div className=' text-xl font-semibold mb-5'>Intercom & EPABX</div>
              <div className='text-[#6b6b6b]'>Absy Solutions provides efficient intercom and EPABX systems to enhance internal communication. 
              Our solutions offer clear, reliable connectivity, simplifying interactions and boosting organizational efficiency</div>
            </motion.div>
            <motion.div
            ref={ref7}
            initial={{x:100, opacity:0, scale:0}}
            animate={inView7 ? {x:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='lg:w-[50%]'>
              <div>
                <img src={intercom} alt="" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section className='section lg:max-w-[1200px] relative'>
        {/* Animation2 */}
        <div className=' absolute -z-10 top-0 blink-software'>
           <img className=' w-auto h-[80px]' src={animation2} alt="" />   
        </div>
        <div>
          <div className='text-center'>
            <motion.div
            ref={ref8}
            initial={{opacity:0}}
            animate={inView8 ? {opacity:1} : {}}
            transition={{duration:1,delay:1.2,ease:'linear'}}
            className='text-2xl font-bold mb-5 text-[#291770]'>Why Choose Us ?</motion.div>
            <motion.div
            ref={ref9}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView9 ?  { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className='mb-10 md:px-52 text-[#6b6b6b]'>From cutting-edge design to seamless execution, we deliver tailor-made web solutions that surpass expectations. 
            Our focus on collaboration, precision, and excellence ensures your project’s success from inception to completion.</motion.div>
          </div>

          <div className=' grid place-items-center gap-10 mb-10 md:grid-cols-2'>
            <motion.div
            ref={ref10}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView10 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' w-full h-[265px] md:h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold md:mb-5 mb-3'>Customizable Solutions</div>
              <div className='text-[#6b6b6b]'>Flexible and personalized solutions designed to perfectly align with your unique business requirements, ensuring 
              that every aspect of your needs is met with precision and efficiency.</div>
            </motion.div>

            <motion.div
            ref={ref11}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView11 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' w-full h-[265px] md:h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold md:mb-5 mb-3'>Experienced Professionals</div>
              <div className='text-[#6b6b6b]'>A team of skilled experts with extensive industry experience dedicated to delivering outstanding results, 
              offering valuable insights and reliable guidance throughout your project.</div>
            </motion.div>

            <motion.div
            ref={ref12}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView12 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' w-full h-[265px] md:h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold md:mb-5 mb-3'>Innovative Approach</div>
              <div className='text-[#6b6b6b]'>Creative and forward-thinking strategies that leverage the latest technologies and trends to tackle evolving 
              business challenges, helping you stay ahead in a competitive market.</div>
            </motion.div>

            <motion.div
            ref={ref13}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView13 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className=' w-full h-[265px] md:h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold md:mb-5 mb-3'>Ongoing Support</div>
              <div className='text-[#6b6b6b]'>After installation, we provide continuous support and maintenance services. This includes troubleshooting any issues, 
              performing regular updates, and offering upgrades as needed to keep your hardware running efficiently and effectively.</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='section mb-10 lg:max-w-[1200px] relative'>
        {/* Animation3 */}
        <div className=' absolute -z-10 right-5 top-0 blink-software'>
            <img className=' w-auto h-[100px]' src={animation3} alt="" />
        </div>
        <div>
          <div className=' mb-10 md:text-center'>
            <motion.div
            ref={ref14}
            initial={{opacity:0}}
            animate={inView14 ? {opacity:1} : {}}
            transition={{duration:1,delay:1.2,ease:'linear'}}
            className=' text-2xl font-bold mb-5 text-[#291770]'>Our Services & Processing</motion.div>
            <motion.div
            ref={ref15}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView15 ?  { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className='md:px-52 text-[#6b6b6b]'>At Absy Solutions, we deliver comprehensive software services that cater to the diverse needs of modern businesses. Our robust process ensures that every solution is designed, developed, and implemented with precision and excellence. From initial consultation to ongoing support, we are committed to providing software that drives efficiency, innovation, and growth.</motion.div>
          </div>
          <div className=' grid grid-cols-1 gap-10 md:grid-cols-2'>
            <motion.div
            ref={ref16}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView16 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[330px] md:h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={initial} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold md:mb-5 mb-3'>Initial Consultation</div>
                <div className='text-[#6b6b6b]'>We begin by engaging in a detailed discussion to understand your specific hardware needs and business objectives. 
                This step helps us identify your challenges and requirements, ensuring we provide a solution that aligns with your goals.</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref17}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView17 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[330px] md:h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={designsolution} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold md:mb-5 mb-3'>Solution Design</div>
                <div className='text-[#6b6b6b]'>Based on the consultation, we design a customized hardware solution tailored to your needs. 
                This involves outlining detailed specifications and recommending the best components and systems to achieve optimal performance.</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref18}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView18 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[330px] md:h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={productselection} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold md:mb-5 mb-3'>Product Selection</div>
                <div className='text-[#6b6b6b]'>We select high-quality hardware products that match the specifications and requirements defined in the solution design phase. 
                This ensures that the hardware you receive is reliable and well-suited to your needs.</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref19}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView19 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[330px] md:h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={installsetup} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold md:mb-5 mb-3 text-[#6b6b6b]'>Installation & Setup</div>
                <div>Our team handles the installation and configuration of the hardware, ensuring that it integrates smoothly with your existing systems. 
                We make sure everything is set up correctly for immediate use and optimal functionality.</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref20}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView20 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='flex items-start justify-center gap-10 p-5 w-full h-[330px] md:h-[300px] rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border'>
                <div className='w-[30%]'>
                  <img src={initial} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold md:mb-5 mb-3'>
                Testing & Validation</div>
                <div className='text-[#6b6b6b]'>We conduct thorough testing of the installed hardware to verify that it meets all performance and quality standards. 
                This step ensures that the hardware operates as expected and is free of issues before going live.</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref21}
            initial={{y:100, opacity:0, scale:0}}
            animate={inView21 ? {y:0, opacity:1,scale:1} : {}}
            transition={{duration:1,delay:1,ease:'circInOut'}}
            className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[330px] md:h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={ongoing} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold md:mb-5 mb-3'>Ongoing Support
                </div>
                <div className='text-[#6b6b6b]'>
                  After installation, we provide continuous support and maintenance services. This includes troubleshooting any issues, 
                  performing regular updates, and offering upgrades as needed to keep your hardware running efficiently and effectively.
                  </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Services
