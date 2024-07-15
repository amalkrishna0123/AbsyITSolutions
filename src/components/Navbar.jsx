import React, { useState, useEffect } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import MobileNav from './MobileNav';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener('scroll', scrollActive);
    }, []);

    const getLinkClassName = (path) => {
        return location.pathname === path
            ? 'NavbarHover active-link'
            : 'NavbarHover';
    };

    return (
        <header className={`fixed top-[-20px] left-0 w-full z-50 transition-all duration-500 ${active ? "bg-white shadow-lg" : ""}`}>
            <div className={`${active ? "py-2" : "py-4"} transition-all duration-500`}>
                {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
                <nav className='pt-3 flex items-center justify-between mx-5 lg:max-w-[1200px] lg:mx-auto'>
                    {/* Logo */}
                    <div className='w-[100px] h-auto cursor-pointer'>
                        <img className='h-full w-full mix-blend-multiply' src={logo} alt="Logo" />
                    </div>
                    <div>
                        <ul className='hidden md:flex items-center gap-5 text-[#64646e]'>
                            <li className={getLinkClassName("/")}><Link to="/">Home</Link></li>
                            <li className={getLinkClassName("/about")}><Link to="/about">About</Link></li>
                            <li className={getLinkClassName("/softwares")}><Link to="/softwares">Softwares</Link></li>
                            <li className={getLinkClassName("/services")}><Link to="/services">Services</Link></li>
                            <li className={getLinkClassName("/clients")}><Link to="/clients">Clients</Link></li>
                            <li className={getLinkClassName("/contact")}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='cursor-pointer text-[#e87817] md:hidden'>
                        <RiMenu3Line onClick={() => setMenuOpen(true)} className='text-3xl'/>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
