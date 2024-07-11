import React, {useState} from 'react'
import { RiMenu3Line } from "react-icons/ri";
import Logo from "../assets/absy logo.jpg"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import MobileNav from './MobileNav';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=''>
        {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
        <nav className=' pt-3 flex items-center justify-between mx-5 lg:max-w-[1200px] lg:mx-auto'>
            {/* Logo */}
            <div className=' w-[100px] h-auto cursor-pointer'>
                <img className=' h-full w-full mix-blend-multiply' src={logo} alt="" />
            </div>
            <div>
                <ul className=' hidden md:flex items-center gap-5 text-[#64646e]'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/softwares">Softwares</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className=' cursor-pointer text-[#e87817] md:hidden'><RiMenu3Line onClick={() => setMenuOpen(true)} className=' text-3xl'/></div>
        </nav>
    </header>
  )
}

export default Navbar
