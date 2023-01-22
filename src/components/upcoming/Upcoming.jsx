import React from 'react'
import './upcoming.scss'
import TheNorthMan from '../../assets/images/upcoming-1.png';
import DoctorStrange from '../../assets/images/upcoming-2.png'
import Memory from "../../assets/images/upcoming-3.png"
import MassiveTalent from "../../assets/images/upcoming-4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';

const Upcoming = () => {
  return (
    <section id="upcoming">
        <div className="container">
            <div className="flex__wrapper">
                <div className="title__wrapper">
                    <p>ONLINE STREAMING</p>
                    <h1>Upcoming Movies</h1>
                </div>
                <div className="filter__wrapper">
                    <div className="filter__item">
                        Movies
                    </div>
                    <div className="filter__item">
                        TV Shows
                    </div>
                    <div className="filter__item">
                        Anime
                    </div>
                </div>
            </div>
            <ul className='movie__list'>
                <li>
                    <div className="movie__card">
                        <div className="movie__banner">
                            <img src={TheNorthMan} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>The Northman</span>
                            <span>2022</span>
                        </div>
                        <div className="movie__details">
                            <div className="badge badge__outline">HD</div>
                            <div className="movie__data">
                                <div className='time'>
                                    <FontAwesomeIcon icon={faClock} className="clock" />
                                    <span>129 min</span>
                                </div>
                                <div className="rate">
                                    <FontAwesomeIcon icon={faStar} className="star" />
                                    <span>8.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="movie__card">
                        <div className="movie__banner">
                            <img src={DoctorStrange} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Doctor Strange in the Multiverse of Madness</span>
                            <span>2022</span>
                        </div>
                        <div className="movie__details">
                            <div className="badge badge__outline">HD</div>
                            <div className="movie__data">
                                <div className='time'>
                                    <FontAwesomeIcon icon={faClock} className="clock" />
                                    <span>129 min</span>
                                </div>
                                <div className="rate">
                                    <FontAwesomeIcon icon={faStar} className="star" />
                                    <span>8.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="movie__card">
                        <div className="movie__banner">
                            <img src={Memory} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Memory</span>
                            <span>2022</span>
                        </div>
                        <div className="movie__details">
                            <div className="badge badge__outline">HD</div>
                            <div className="movie__data">
                                <div className='time'>
                                    <FontAwesomeIcon icon={faClock} className="clock" />
                                    <span>129 min</span>
                                </div>
                                <div className="rate">
                                    <FontAwesomeIcon icon={faStar} className="star" />
                                    <span>8.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="movie__card">
                        <div className="movie__banner">
                            <img src={MassiveTalent} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>MassiveTalent</span>
                            <span>2022</span>
                        </div>
                        <div className="movie__details">
                            <div className="badge badge__outline">HD</div>
                            <div className="movie__data">
                                <div className='time'>
                                    <FontAwesomeIcon icon={faClock} className="clock" />
                                    <span>129 min</span>
                                </div>
                                <div className="rate">
                                    <FontAwesomeIcon icon={faStar} className="star" />
                                    <span>8.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Upcoming