import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileNav = ({setMenuOpen}) => {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <div className=' z-[200] fixed w-full h-full bg-[#ff9100] flex justify-center items-center flex-col'>
        <div className='absolute top-20 right-20 cursor-pointer'>
            <IoIosCloseCircle onClick={() => setMenuOpen(false)} className=' text-3xl text-[#070022]'/>
        </div>
        <ul className=' flex flex-col justify-center items-center gap-7 text-xl text-white font-semibold'>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/softwares" onClick={() => setMenuOpen(false)}>Softwares</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/clients" onClick={() => setMenuOpen(false)}>Clients</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default MobileNav
