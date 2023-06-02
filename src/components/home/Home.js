import React from 'react'
import Navbar from '../navbar/Navbar';
import { AbortedDeferredError } from 'react-router-dom';
import About from '../about/About';

const Home = () => {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.content');
        nextSection.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
        <div class="loader">
            <div class="loader-clip clip-top">
                <div class="marquee">
                    <div class="marquee-container">
                        <span>Alora</span>
                        <span>Alora</span>
                        Alora
                        <span>Alora</span>
                        <span>Alora</span>
                        
                    </div>
                </div>
            </div>
            <div class="loader-clip clip-bottom">
                <div class="marquee">
                    <div class="marquee-container">
                        <span>Alora</span>
                        <span>Alora</span>
                        Alora
                        <span>Alora</span>
                        <span>Alora</span>
                        
                    </div>
                </div>
            </div>
            <div class="clip-center">
                <div class="marquee">
                    <div class="marquee-container">
                        <span>Alora</span>
                        <span>Alora</span>
                        Alora
                        <span>Alora</span>
                        <span>Alora</span>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
      <div className="nav">
        <div className="logo"></div>
        <Navbar />
        <About />
      </div>
      {/* <div
        id="scroll-down-btn"
        style={{ display: 'none', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <button onClick={scrollToNextSection} className="scrollbtn">
          Scroll Down
        </button>
      </div>

      <div className="footer">
        <p>
          Choose your mood
          <br />
          Shop Your Brands
        </p>
      </div> */}
    </div>
    <Navbar />
    </>
    )
}

export default Home