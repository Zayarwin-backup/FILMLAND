import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faClose, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faGlobe} from "@fortawesome/free-solid-svg-icons"
import "./Navbar.scss"

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
  return (
    <header>

    <div className="container">

        <a href="/" className='logo'><img src={logo} alt="FlimLane" /></a>

        <nav className="navbar">
            <ul className="navbar__list">
                <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#movie">MOVIE</a>
                </li>
                <li>
                    <a href="#tw-show">TV SHOW</a>
                </li>
                <li>
                    <a href="#web-series">WEB SERIES</a>
                </li>
                <li>
                    <a href="#pricing">PRICING</a>
                </li>
            </ul>
        </nav>

        <div className={`mobile__nav ${openMenu ? 'active' : ''}`}>
            <div className="nav__top">
                <a href=""><img src={logo} alt="" /></a>
                <FontAwesomeIcon icon={faClose} className='close' onClick={() => setOpenMenu(false)} />
            </div>
            <ul className="navbar__list">
            <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#movie">MOVIE</a>
                </li>
                <li>
                    <a href="#tw-show">TV SHOW</a>
                </li>
                <li>
                    <a href="#web-series">WEB SERIES</a>
                </li>
                <li>
                    <a href="#pricing">PRICING</a>
                </li>
            </ul>
        </div>

        <div className="header__action">
            <button className="search__icon"><FontAwesomeIcon icon={faMagnifyingGlass}   /></button>
            <div className="lang">
                <FontAwesomeIcon icon={faGlobe} className="global__icon" />
                <select name="language" id="language">

                    <option value='en'>EN</option>
                    <option value='au'>AU</option>
                    <option value='ar'>AR</option>
                    <option value='tu'>TU</option>

                </select>
            </div>
            <button className='button'>SIGN IN</button>
        </div>

        <a className='menu' onClick={() => setOpenMenu(true)}><FontAwesomeIcon icon={faBars} /></a>

        

    </div>

    </header>
  )
}

export default Navbar