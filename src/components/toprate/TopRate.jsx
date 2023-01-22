import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./toprate.scss"
import Movie1 from "../../assets/images/movie-1.png"
import Movie2 from "../../assets/images/movie-2.png"
import Movie3 from "../../assets/images/movie-3.png"
import Movie4 from "../../assets/images/movie-4.png"
import Movie5 from "../../assets/images/movie-5.png"
import Movie6 from "../../assets/images/movie-6.png"
import Movie7 from "../../assets/images/movie-7.png"
import Movie8 from "../../assets/images/movie-8.png"

const TopRate = () => {
  return (
    <section id="toprate__section">
        <div className="container toprate">
            <span className='subtitle'>online streaming</span>
            <h1>Top Reated Movies</h1>
            <div className="filters">
                <div className="filter active">Movies</div>
                <div className="filter">Tv show</div>
                <div className="filter">Documentary</div>
                <div className="filter">Sport</div>
            </div>
            <ul className="movies__list">
                <li>
                <div className="movie__card">
                        <div className="movie__banner">
                            <img src={Movie1} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Sonic the Hedgehog 2</span>
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
                            <img src={Movie2} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Morbius</span>
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
                            <img src={Movie3} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>The Adam Project</span>
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
                            <img src={Movie4} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Free Guy</span>
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
                            <img src={Movie5} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>The Batman</span>
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
                            <img src={Movie6} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Uncharted</span>
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
                            <img src={Movie7} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Death on the Nile</span>
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
                            <img src={Movie8} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>The King's Man</span>
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

export default TopRate