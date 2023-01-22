import { faCalendar, faClock, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="hero__content">
                <p>Filmlane</p>
                <h1>Unlimited <strong>Movie</strong>, TVs Shows, & More.</h1>
                <div className="meta__wrapper">
                    <div className="badge__wrapper">
                        <div className='badge'>
                            PG 18
                        </div>
                        <div className='badge badge__outline'>HD</div>
                    </div>
                    <div className="ganre__wrapper">
                        <a href="#">Romance,</a>
                        <a href="#">Drama</a>
                    </div>
                    <div className="date__time">
                        <div>
                            <FontAwesomeIcon icon={faCalendar} className="icon" />
                            <span>2022</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClock} className="icon" />
                            <span>128 min</span>
                        </div>
                    </div>
                </div>

                <button className="button hero__button">
                    <FontAwesomeIcon icon={faPlay} className="play__icon" />
                    <span>Watch Now</span>
                </button>
            </div>
        </div>

    </section>
  )
}

export default Hero