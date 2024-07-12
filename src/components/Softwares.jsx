import React from 'react'
import task from "../assets/task.png"
import shade from "../assets/shade.png"
import vtask from "../assets/vtask.png"
import dine from "../assets/Dine.png"
import starstay from "../assets/starstay.png"
import auric from "../assets/auric.png"
import clublogoc from "../assets/clublogic.png"
import magnet from "../assets/magnet.png"
import Footer from './Footer'
import services from "../assets/our-services.png"
import { TiTick } from "react-icons/ti";
import animation1 from "../assets/software-business.png"
import animation2 from "../assets/animation3.png"
import animation3 from "../assets/animation2.png"
import { motion } from 'framer-motion'

const Softwares = () => {
  return (
    <div>
      <div className='fixed blur-[30px] w-full h-full bg-[#b6db31a2] -z-50'></div>
      {/* <div className=' w-[85%] md:w-[700px] h-[400px] md:h-[600px] bg-[#ffffffad] rounded-full absolute -z-10 translate-x-[-50%] md:translate-x-[-30%] blur-[30px]'>
      </div> */}
      <section className='section mb-10 md:px-10 lg:max-w-[1200px] mt-24'>
        {/* animation1 */}
        <div className=' absolute -z-10 right-5 blink-software'>
          <img className=' w-auto h-[70px]' src={animation1} alt="" />
        </div>
        <div>
          <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
          transition={{ duration: 2, ease: "easeInOut" }}
          className='font-bold text-2xl mb-5 lg:text-[42px] lg:leading-[45px]'>Elevate Your Business <span className=' block'>with Our Software</span></motion.div>
          <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
          animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
          transition={{ duration: 2.5, ease: "easeInOut" }}
          >At Absy Solutions, our transformative software solutions are crafted to drive business success. 
          We offer innovative, tailored software that enhances efficiency and supports growth, seamlessly integrating into 
          your operations for optimal performance
          </motion.div>
        </div>
      </section>

      <section className='section mb-10 md:px-10 lg:max-w-[1200px]'>
        <div>
          <div className=' grid place-items-center grid-cols-1 items-start justify-center gap-10 md:grid-cols-2 max-w-[1200px] lg:mx-auto'>
            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1,delay:1, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={task} alt="" />
              </div>
              <div>TASK'OS is a Windows-based financial software that aids businesses in managing financial transactions, stock levels, 
              sales, and deliveries. It ensures product availability, generates reports, and provides real-time financial data for 
              informed decision-making, enhancing business operations.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.2,delay:1.2, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={shade} alt="" />
              </div>
              <div>Shade Hospital Management Software is a flexible solution for hospitals and clinics, offering tools for patient management, 
              appointment scheduling, billing, revenue management, and reporting, aiming to streamline processes and improve patient care quality.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.4,delay:1.4, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={vtask} alt="" />
              </div>
              <div>VTASK is a Pharmacy Management software that automates inventory, revenue, and billing processes, providing 
              a trusted solution for wholesale and retail sectors. It generates reports and analytics, improving efficiency, 
              accuracy, and patient safety.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.6,delay:1.6, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={dine} alt="" />
              </div>
              <div>DINE is a restaurant management software that streamlines ordering, billing, and payment processes, 
              integrates with POS systems and Android platforms, and generates reports and analytics for sales, inventory, and customer behavior.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.8,delay:1.8, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={clublogoc} alt="" />
              </div>
              <div>Club Logic is a software designed for fitness clubs and gyms, enhancing operations like membership management, attendance, 
              scheduling, billing, and fee collection, thereby saving time and enhancing customer satisfaction.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:2,delay:2, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[70px]' src={magnet} alt="" />
              </div>
              <div>Magnet is a digital platform that streamlines school operations, improving data accuracy and communication. 
              It streamlines student and teacher records, attendance tracking, and other functions, allowing schools to focus on education.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:2.1,delay:2.1, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={auric} alt="" />
              </div>
              <div>Auric is a software solution for jewellery retailers, wholesalers, and manufacturers, assisting in inventory management, 
              customer tracking, sales, and accounting. It offers features like barcoding, gemstone tracking, and product customization.
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:2.1,delay:2.2, ease:'backInOut'}}
            className='BoxHover w-full h-[250px] border p-5 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]'>
              <div className='font-semibold text-lg mb-5'>
                <img className=' w-[150px]' src={starstay} alt="" />
              </div>
              <div>STARSTAY is a user-friendly hotel management software that streamlines operations like front-desk management, 
              room booking, billing, housekeeping, and reporting, automating manual tasks and integrating with other systems 
              for improved efficiency.
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      <section className='section md:px-10 lg:max-w-[1200px] mb-16'>
        <div className=' absolute -z-10 left-5 blink-software'>
            <img className=' w-auto h-[70px]' src={animation3} alt="" />
          </div>
        <div className=''>
          <div className=' text-2xl font-bold mb-10 text-center lg:text-[42px]'>Why Choose Us ?</div>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center'>
            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1,delay:1, ease:'backInOut'}}
            className='ScaleUpImg w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] rounded-2xl p-5'>
              <div className=''>
                <div className=' mb-5 font-semibold text-xl'>Customizable Solutions</div>
                <div>Our software is designed to be tailored to your specific business challenges, ensuring that it addresses 
                your unique operational needs and goals. We work closely with you to develop solutions that fit seamlessly 
                into your existing workflows.
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.2,delay:1.2, ease:'backInOut'}}
            className='ScaleUpImg w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] rounded-2xl p-5'>
              <div className=''>
                <div className=' mb-5 font-semibold text-xl'>Advanced Features</div>
                <div>We incorporate the latest technology and innovative functionalities into our software to enhance 
                performance and provide you with a competitive advantage. These advanced features are designed 
                to optimize efficiency and support your business’s growth.
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.4,delay:1.4, ease:'backInOut'}}
            className='ScaleUpImg w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] rounded-2xl p-5'>
              <div className=''>
                <div className=' mb-5 font-semibold text-xl'>Dedicated Support</div>
                <div>Our team of experts provides ongoing, proactive support to address any issues promptly and ensure 
                your software operates smoothly. We are committed to offering reliable assistance and resolving 
                any challenges that arise to keep your operations running without interruption.
                </div>
              </div>
            </motion.div>


            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.8,delay:1.8, ease:'backInOut'}}
            className='ScaleUpImg w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] rounded-2xl p-5'>
              <div className=''>
                <div className=' mb-5 font-semibold text-xl'>Scalable Options</div>
                <div>Our software solutions are built to scale with your business, offering flexibility and adaptability 
                as your needs evolve. Whether you’re expanding your operations or adjusting to new requirements, our 
                software can grow and adapt to support your ongoing success.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className=' section md:px-10 mb-10 lg:max-w-[1200px]'>
        {/* Animation2 */}
      <div className=' absolute -z-10 right-5'>
          <img className=' w-auto h-[100px] blink-software' src={animation2} alt="" />
        </div>
        <div>
          <div className=' md:flex md:justify-center md:items-center md:gap-10 mb-10'>
            <div className='md:w-[50%]'>
              <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
              transition={{ duration: 2 }}
               className='font-bold text-2xl mb-5 lg:text-[42px] lg:mb-10'>Our Services & Processing</motion.div>
              <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
              transition={{ duration: 2.4, ease: "easeInOut" }}
              className=' mb-10'>At Absy Solutions, we pride ourselves on delivering top-notch software services that cater to a wide range of business needs. Our comprehensive approach ensures that each solution is tailored to enhance efficiency, drive innovation, and support growth. From initial consultation to ongoing support, our team of experts is dedicated to providing exceptional service and cutting-edge technology. Here’s how we process and deliver our software services:</motion.div>
            </div>
            <div className='md:w-[50%]'>
              <motion.img
              initial={{scale:0,opacity:0}}
              animate={{opacity:1,scale:1}}
              transition={{duration:1,delay:1,ease:'backInOut'}}
              src={services} alt="" />
            </div>
          </div>

          {/* Services */}
          <div className=' grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className=' mb-5 flex items-start justify-center gap-3'>
              <div className=' text-3xl text-[#ff8000]'>
                <TiTick/>
              </div>
              <div>
                <div className='text-xl font-semibold mb-5'>Custom Development</div>
                <div>Tailor-made software solutions designed to meet your specific business needs and challenges, 
                ensuring a perfect fit for your operations.</div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className=' mb-5 flex items-start justify-center gap-3'>
              <div className=' text-3xl text-[#ff8000]'>
                <TiTick/>
              </div>
              <div>
                <div className='text-xl font-semibold mb-5'>Advanced Integration</div>
                <div>Seamless integration with existing systems and applications to enhance functionality and streamline your workflows.</div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 2.4, ease: "easeInOut" }}
            className=' mb-5 flex items-start justify-center gap-3'>
              <div className=' text-3xl text-[#ff8000]'>
                  <TiTick/>
              </div>
              <div>
                <div className='text-xl font-semibold mb-5'>
                User-Friendly Design</div>
                <div>Intuitive and easy-to-navigate interfaces that ensure a smooth user experience and facilitate efficient use of the software.
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 2.6, ease: "easeInOut" }}
            className=' mb-5 flex items-start justify-center gap-3'>
            <div className=' text-3xl text-[#ff8000]'>
                  <TiTick/>
              </div>
              <div>
                <div className='text-xl font-semibold mb-5'>
                Performance Analytics</div>
                <div>Tools and features that offer real-time insights and detailed analytics, helping you 
                make informed decisions and optimize business processes.
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className=' mb-5 flex items-start justify-center gap-3'>
              <div className=' text-3xl text-[#ff8000]'>
                    <TiTick/>
              </div>
              <div>
                <div className='text-xl font-semibold mb-5'>
                Scalable Solutions</div>
                <div>Flexible software that grows with your business, offering scalability to adapt to expanding 
                requirements and new challenges.
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
            transition={{ duration: 3, ease: "easeInOut" }}
            className=' mb-5 flex items-start justify-center gap-3'>
              <div className=' text-3xl text-[#ff8000]'>
                      <TiTick/>
              </div>
              <div>
                <div className='text-xl font-semibold mb-5'>
                Ongoing Support</div>
                <div>Comprehensive support and maintenance services to address issues promptly, provide updates, 
                and ensure continuous software performance.
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

export default Softwares
