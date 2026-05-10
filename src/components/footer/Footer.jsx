import React from 'react'
import './Footer.css'
import Instagram from '../../assets/instagram.png';
// import Logo from '../../assets/logo.png';
// import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="Footer-container">
        
        <div className="footer">
            <div className="social-links">
                <Link class="link" to="https://www.instagram.com/p/DC7u7VZo3ab/">
                <img src={Instagram}  alt=""/>
                </Link>
                <p>Wadi El Zayni-Saida</p>
                <p>+961 71-342-627</p>
            </div>
            <div className="logo-f">
                <img src={Logo3} alt=""/>
                <h1>Hani Afifi Fitness</h1>

            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer