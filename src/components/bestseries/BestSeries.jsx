import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './bestseries.scss'
import Movie1 from '../../assets/images/series-1.png'
import Movie2 from '../../assets/images/series-2.png'
import Movie3 from '../../assets/images/series-3.png'
import Movie4 from '../../assets/images/series-4.png'

const BestSeries = () => {
  return (
    <section id="bestseries__section">
        <div className="container bestseries">
            <span className="subtitle">best tv series</span>
            <h1>World Best TV Series</h1>
            <ul className="movies__list">
            <li>
                <div className="movie__card">
                        <div className="movie__banner">
                            <img src={Movie1} alt="" />
                        </div>
                        <div className="movie__title">
                            <span className='title'>Moon Knight</span>
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
                            <span className='title'>Halo</span>
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
                            <span className='title'>Vikings: Valhalla</span>
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
                            <span className='title'>Money Heist</span>
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

export default BestSeries