import React from 'react'
import './Ctg.scss'

const Ctg = () => {
  return (
      <section id="ctgform">
          <div className="container ctg">
              <div className="title__wrapper">
                  <h2>TRIAL START FIRST 30 DAYS.</h2>
                  <p>Enter your email to create or restart your membership.</p>
              </div>
              <form className="ctg__form">
                  <input type="email" placeholder='Enter your email' />
                  <button>Get Started</button>
              </form>
          </div>
      </section>
  )
}

export default Ctg