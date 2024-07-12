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

const Services = () => {
  return (
    <div>
      <div className='fixed blur-[30px] w-full h-full bg-[#2916ff5b] -z-50'>

      </div>
      <div className=' w-[85%] md:w-[700px] h-[400px] md:h-[600px] bg-[#e87817] rounded-full absolute -z-10 translate-x-[-50%] md:translate-x-[-30%] blur-[30px]'>
      </div>
      {/* Animation */}
      <div className=' absolute -z-20 right-5 md:right-24 lg:right-52'>
        <img className=' w-auto h-[50px] blink-software' src={animation1} alt="" />
      </div>
      <section className='section mt-10 mb-10 md:px-10 lg:max-w-[1200px] lg:mx-auto md:text-center z-50'>
        <div>
          <div>
            <div className=' mb-5 text-2xl font-bold'>Complete Hardware & Security Solutions</div>
            <div className=' md:px-52'>We offer a complete range of hardware services to meet your needs. From sales 
                and installation of cutting-edge security systems, including CCTV and advanced networking solutions, 
                to intercom and EPABX systems, we provide reliable and comprehensive hardware solutions designed to enhance 
                your operational efficiency and security.
            </div>
          </div>
        </div>
      </section>

      <section className='section mb-10 md:px-10 lg:max-w-[1200px]'>
        <div>

          <div className=' md:flex justify-center items-center gap-10 mb-10'>
            <div className='lg:w-[50%] border rounded-3xl p-10 shadow-lg'>
              <div className=' text-xl font-semibold mb-5'>CCTV & Security Systems</div>
              <div>Absy Solutions delivers cutting-edge CCTV and security systems to safeguard your property. Our solutions offer 
              reliable surveillance and comprehensive protection, ensuring peace of mind with advanced monitoring technology.</div>
            </div>
            <div className=' lg:w-[50%]'>
              <div>
                <img src={cctv} alt="" />
              </div>
            </div>
          </div>
          {/* Blur Image */}
          {/* <div className=' w-[85%] md:w-[500px] h-[400px] md:h-[400px] bg-[#e87817] rounded-full absolute -z-10 -translate-x-[-50%] translate-x md:-translate-x-[-100%]  blur-[30px]'>
          </div> */}

          <div className=' md:flex md:flex-row-reverse md:justify md:items-center md:gap-10 mb-10'>
            <div className=' lg:w-[50%] border rounded-3xl p-10 shadow-lg'>
              <div className=' text-xl font-semibold mb-5'>Networking</div>
              <div>Absy Solutions offers advanced networking solutions to enhance your connectivity and streamline communication. 
              Our services ensure reliable, secure, and efficient network infrastructure tailored to meet your business needs.</div>
            </div>
            <div className='lg:w-[50%]'>
              <div>
                <img src={networking} alt="" />
              </div>
            </div>
          </div>

          <div className='md:flex md:justify-center md:items-center md:gap-10'>
            <div className='lg:w-[50%] border rounded-3xl p-10 shadow-lg'>
              <div className=' text-xl font-semibold mb-5'>Intercom & EPABX</div>
              <div>Absy Solutions provides efficient intercom and EPABX systems to enhance internal communication. 
              Our solutions offer clear, reliable connectivity, simplifying interactions and boosting organizational efficiency</div>
            </div>
            <div className='lg:w-[50%]'>
              <div>
                <img src={intercom} alt="" />
              </div>
            </div>
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
            <div className='text-2xl font-bold mb-5'>Why Choose Us ?</div>
            <div className='mb-10 md:px-52'>From cutting-edge design to seamless execution, we deliver tailor-made web solutions that surpass expectations. 
            Our focus on collaboration, precision, and excellence ensures your project’s success from inception to completion.</div>
          </div>

          <div className=' grid place-items-center gap-10 mb-10 md:grid-cols-2'>
            <div className=' w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold mb-5'>Customizable Solutions</div>
              <div>Flexible and personalized solutions designed to perfectly align with your unique business requirements, ensuring 
              that every aspect of your needs is met with precision and efficiency.</div>
            </div>

            <div className=' w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold mb-5'>Experienced Professionals</div>
              <div>A team of skilled experts with extensive industry experience dedicated to delivering outstanding results, 
              offering valuable insights and reliable guidance throughout your project.</div>
            </div>

            <div className=' w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold mb-5'>Innovative Approach</div>
              <div>Creative and forward-thinking strategies that leverage the latest technologies and trends to tackle evolving 
              business challenges, helping you stay ahead in a competitive market.</div>
            </div>

            <div className=' w-full h-[250px] shadow-[inset_-12px_-8px_40px_#46464620] p-10 rounded-xl border'>
              <div className=' text-lg font-semibold mb-5'>Ongoing Support</div>
              <div>After installation, we provide continuous support and maintenance services. This includes troubleshooting any issues, 
              performing regular updates, and offering upgrades as needed to keep your hardware running efficiently and effectively.</div>
            </div>
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
            <div className=' text-2xl font-bold mb-5'>Our Services & Processing</div>
            <div className='md:px-52'>At Absy Solutions, we deliver comprehensive software services that cater to the diverse needs of modern businesses. Our robust process ensures that every solution is designed, developed, and implemented with precision and excellence. From initial consultation to ongoing support, we are committed to providing software that drives efficiency, innovation, and growth.</div>
          </div>
          <div className=' grid grid-cols-1 gap-10 md:grid-cols-2'>
            <div className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={initial} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold mb-5'>Initial Consultation</div>
                <div>We begin by engaging in a detailed discussion to understand your specific hardware needs and business objectives. 
                This step helps us identify your challenges and requirements, ensuring we provide a solution that aligns with your goals.</div>
              </div>
            </div>

            <div className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={designsolution} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold mb-5'>Solution Design</div>
                <div>Based on the consultation, we design a customized hardware solution tailored to your needs. 
                This involves outlining detailed specifications and recommending the best components and systems to achieve optimal performance.</div>
              </div>
            </div>

            <div className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={productselection} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold mb-5'>Product Selection</div>
                <div>We select high-quality hardware products that match the specifications and requirements defined in the solution design phase. 
                This ensures that the hardware you receive is reliable and well-suited to your needs.</div>
              </div>
            </div>

            <div className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={installsetup} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold mb-5'>Installation & Setup</div>
                <div>Our team handles the installation and configuration of the hardware, ensuring that it integrates smoothly with your existing systems. 
                We make sure everything is set up correctly for immediate use and optimal functionality.</div>
              </div>
            </div>

            <div className='flex items-start justify-center gap-10 p-5 w-full h-[300px] rounded-xl shadow-[inset_-12px_-8px_40px_#46464620] border'>
                <div className='w-[30%]'>
                  <img src={initial} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold mb-5'>
                Testing & Validation</div>
                <div>We conduct thorough testing of the installed hardware to verify that it meets all performance and quality standards. 
                This step ensures that the hardware operates as expected and is free of issues before going live.</div>
              </div>
            </div>

            <div className='flex items-start justify-center gap-10 shadow-[inset_-12px_-8px_40px_#46464620] border p-5 w-full h-[300px] rounded-xl'>
                <div className='w-[30%]'>
                  <img src={ongoing} alt="" />
                </div>
                <div className='w-[70%]'>
                <div className='text-xl font-semibold mb-5'>Ongoing Support
                </div>
                <div>
                  After installation, we provide continuous support and maintenance services. This includes troubleshooting any issues, 
                  performing regular updates, and offering upgrades as needed to keep your hardware running efficiently and effectively.
                  </div>
              </div>
            </div>
            
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
