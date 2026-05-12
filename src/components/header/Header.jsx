import React, { useState } from 'react';
import Logo from '../../assets/logo3.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
import './Header.css';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);


  return (
    <div className="header">

      <div className="logoImage">
        <img src={Logo} alt="" />
        <h1 className="title">HANI AFIFI FITNESS</h1>
      </div>
      <div className="header-container">
        <ul className={`header-menu ${isOpen ? 'active' : ''}`}>
          <li className='closebar'>
            <Link onClick={closeMenu} to='home'><span>X</span></Link>
          </li>
          <li className='headerLink'> <Link  onClick={closeMenu} smooth={true} 
  duration={500}  to='home'> Home </Link> </li>
          <li className='headerLink'> <Link  onClick={closeMenu} smooth={true} 
  duration={500}  to='programs'> Programs </Link> </li>
          <li className='headerLink'> <Link  onClick={closeMenu} smooth={true} 
  duration={500}  to='reasons'> Why us </Link> </li>
          <li className='headerLink'> <Link  onClick={closeMenu} smooth={true} 
  duration={500}  to='plans'> Plans </Link> </li>
          <li className='headerLink'> <Link  onClick={closeMenu} smooth={true} 
  duration={500}  to='testimonials'> Testimonials </Link> </li>
          <li className='headerLink'> <Link  onClick={closeMenu} smooth={true} 
  duration={500}  to='guide'> Guide </Link> </li>
        </ul>
        <div className="menuBars" onClick={toggleMenu} >
          <img src={Bars} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header