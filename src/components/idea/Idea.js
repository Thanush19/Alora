import React from 'react'
import phto1 from '../../utils/photos/1.jpg'
import phto2 from '../../utils/photos/2.jpg'

import phto3 from '../../utils/photos/3.jpg'
import phto4 from '../../utils/photos/4.jpg'
import './Idea.css'

const Idea = () => {
  return (
    <>
        <div className="cardpage" id="idea">
        <div className="card-container">
            <div className="cardnav">
            <div className="card-nav-item"></div>
            <div className="card-nav-item">CHOOSE YOUR STYLE - SHOP ALL YOU WANT</div>
            <div className="card-nav-item"></div>
            </div>
            <div className="items">
            <div className="item">
                <div className="item-wrapper">
                <img src={phto1} alt="" />
                <div className="img-overlay"></div>
                <div className="item-copy">
                    <div className="item-name">the hitman <span>mdxci</span></div>
                    <div className="num">1</div>
                </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="item">
                <div className="item-wrapper">
                <img src={phto2}alt="" />
                <div className="img-overlay"></div>
                <div className="item-copy">
                    <div className="item-name">gaia <span>mdxcii</span></div>
                    <div className="num">2</div>
                </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="item">
                <div className="item-wrapper">
                <img src={phto3} alt="" />
                <div className="img-overlay"></div>
                <div className="item-copy">
                    <div className="item-name">retro <span>mdxciii</span></div>
                    <div className="num">3</div>
                </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="item">
                <div className="item-wrapper">
                <img src={phto4}  alt="" />
                <div className="img-overlay"></div>
                <div className="item-copy">
                    <div className="item-name">funky <span>mdxciv</span></div>
                    <div className="num">4</div>
                </div>
                </div>
            </div>
            <div className="divider"></div>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default Idea