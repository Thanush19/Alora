import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
          <div className="content" id="about">
            <h1>We are Alora,</h1>
      
            <div className="abt">
              <div className="abt-left">
                A CREATIVE <br />COLLECTIVE <br />MADE TO UNLOCK <br />YOUR TRUE <br />INNER DESIRES
              </div>
      
              <div className="abt-right">
                <h2>
                  We weave together bold strategy and creative execution to produce thought-provoking shopping experiences. We take a highly personalized approach to the brands and products to our users. Born in the Chennai - now serving clients worldwide.
                </h2>
      
                <button className="aboutbtn">About US</button>
              </div>
            </div>
          </div>
        </>
      );
}

export default About