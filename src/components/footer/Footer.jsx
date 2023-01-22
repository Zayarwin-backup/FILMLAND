import React from 'react'
import './footer.scss'
import FooterImg from "../../assets/images/footer-bottom-img.png"
import Logo from "../../assets/images/logo.svg"
const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer__top">
            <div className="container">
                <div className="footer__brand__wrapper">
                    <a href="" className='logo'><img src={Logo} alt="" /></a>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#mive">movie</a></li>
                        <li><a href="#tvshow">Tv show</a></li>
                        <li><a href="#webseries">web series</a></li>
                        <li><a href="#pricing">pricing</a></li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="footer__quicklink">
                    <ul className="quicklink__list">
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Help center</a></li>
                        <li><a href="">Terms of us</a></li>
                        <li><a href="">privacy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
            <p>© 2022 <span>FilmLance</span>.All right Reserved.</p>
            <img src={FooterImg} alt="" />
        </div>
        </div>
        
    </footer>
    )
}

export default Footer