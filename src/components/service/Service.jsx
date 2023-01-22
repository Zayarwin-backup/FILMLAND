import React from 'react'
import "./service.scss"
import ServiceBanner from "../../assets/images/service-banner.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
  return (
    <section id="service__section">

        <div className="container service">
            <div className="service__banner">
                    <img src={ServiceBanner} alt="" />
                <a href="#" className='download__button'>
                    <span>Download</span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </a>
            </div>
            <div className="service__content">
                <span>Our services</span>
                <h1>Download Your Shows Watch Offline.</h1>
                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                <ul className='service__list'>
                <li>
                    <div className="service__card">
                        <div className="servicecard__icon">
                            <FontAwesomeIcon icon={faTv} />
                        </div>
                        <div className="servicecard__content">
                            <h2>Enjoy on Your TV.</h2>
                            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="service__card">
                        <div className="servicecard__icon">
                            <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="servicecard__content">
                            <h2>Watch Everywhere.</h2>
                            <p>LLorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
            
        </div>

    </section>
  )
}

export default Service