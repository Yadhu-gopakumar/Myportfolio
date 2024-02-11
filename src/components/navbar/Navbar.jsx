import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../../../src/components/assets/logo1.png';
import '../navbar/Navbar.css';
import { IoIosArrowUp } from "react-icons/io";


import { IoCloseOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {

    let [menuopen, setMenuopen] = useState(true);
    let menuopenfunction = (e) => {
        setMenuopen = setMenuopen(!menuopen);

        if (!e) {

            document.getElementById("popupmenu").style.display = "flex";

        }
        else {

            document.getElementById("popupmenu").style.display = "none";

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                document.getElementById("scrollupbtn").classList.add("scrolledvisible");
                document.getElementById("navBar").classList.add("scrolled");
            }
            else {
                document.getElementById("scrollupbtn").classList.remove("scrolledvisible");

                document.getElementById("navBar").classList.remove("scrolled");

            }
        })
    }, [])
const isscrolled =(e)=>{
window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

    return (
        <>
            <nav className='navbar' id='navBar'>
                <div className="imgcontainer">
                    <img src={logo} alt="logo" className='logoimg' />

                </div>
                <div className="menulinks">

                    <Link className='link' to='home' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} >  Home  </Link>
                    <Link className='link' to='about' activeClass='active' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                    <Link className='link' to='projects' activeClass='active' spy={true} smooth={true} offset={-70} duration={500}>projects</Link>
                    <Link className='link' to='contact' activeClass='active' spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>

                </div>
                <div className="menubtn" id="menubtn" onClick={() => menuopenfunction(menuopen)}>
                    {!(menuopen) ? <IoCloseOutline /> : <HiMenu />}
                </div>
                <div className="popupmenulinks" id="popupmenu" style={!(menuopen) ? { display: "flex" } : { display: "none" }}>

                    <Link className='link' to='home' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={() => (menuopenfunction(true))}>  Home  </Link>
                    <Link className='link' to='about' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} onClick={() => (menuopenfunction(true))}>About</Link>
                    <Link className='link' to='projects' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={() => (menuopenfunction(true))}>Portfolio</Link>
                    <Link className='link' to='contact' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} onClick={() => (menuopenfunction(true))}>Contact</Link>

                </div>
               
                <div className="scrollupbtn" id='scrollupbtn' onClick={(e)=>(isscrolled(e))}>

                        <IoIosArrowUp />
                 
                </div>
            </nav>
        </>
    );
}
export default Navbar