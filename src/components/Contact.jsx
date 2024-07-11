import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <section className=' section md:px-10 mt-10'>
        <div>
          <div className='mb-10'>
            <div className=' text-2xl font-bold mb-5 text-center'>Our Office</div>
            <div className=' text-center md:px-10 lg:px-20 2lg:px-52'>Reach out to Absy Solutions for any inquiries or support. Our dedicated team is here to assist you. Visit our office, call us, or send an email to connect with us. We look forward to helping you achieve your business goals.</div>
          </div>

          <div className=' grid grid-cols-1 place-items-center gap-10 mb-10 md:grid-cols-2 lg:grid-cols-3'>
            {/* Contact Details-1 */}
            <div className=' w-full h-[200px] shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-xl p-10 flex justify-center items-start gap-5'>
              <div>
                <IoLocationSharp className=' text-3xl text-[#e87817]'/>
              </div>
              <div>
                <div className=' text-xl font-semibold mb-5'>Office Address</div>
                <div><div>Ground Floor No. 57/19, 8th Cross,
                Bharathi Layout, SG Palya, Bangalore - 560029</div></div>
              </div>
            </div>
            {/* Contact Details-2 */}
            <div className=' w-full h-[200px] shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-xl p-10 flex justify-center items-start gap-5'>
              <div>
                <BiSolidPhoneCall className=' text-3xl text-[#e87817]'/>
              </div>
              <div>
                <div className=' text-xl font-semibold mb-5'>Phone Number & Email</div>
                <div><div>+91 7411071274, <span className=''>+91 9632718876,</span><span className='inline-block'>+91 9916245165, </span><span className=' inline-block'>+91 90363 47975</span></div></div>
                <div className='mt-2'>absyitsolutions@gmail.com</div>
              </div>
            </div>
            {/* Contact-Detail-3 */}
            <div className=' w-full h-[200px] shadow-[rgba(0,_0,_0,_0.2)_0px_3px_8px] rounded-xl p-10 flex justify-center items-start gap-5'>
              <div>
                <FaThumbsUp className=' text-3xl text-[#e87817]'/>
              </div>
              <div>
                <div className=' text-xl font-semibold mb-5'>Social Media</div>
                <div><div>Ground Floor No. 57/19, 8th Cross,
                Bharathi Layout, SG Palya, Bangalore - 560029</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' mb-10'>
      <div className='flex justify-center'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6741021527146!2d77.6066919!3d12.9286555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500075f3745%3A0x1f982880ffd46928!2sAbsy%20it%20solutions!5e0!3m2!1sen!2sin!4v1720525464020!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Contact
