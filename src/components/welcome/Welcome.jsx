import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import "./welcome.scss"
function Welcome() {
  return (
    <div className="container">
        <div className="welcome">
            <div className="welcome__left">
                <div className="welcome__left--title">WELCOME</div>
                <div className="welcome__left--text">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi numquam aliquid. Enim dolor qui libero quo in, accusantium illo similique eos ipsum, expedita necessitatibus voluptatem 
                </div>
                <div className="welcome__left--button">
                    <div className="button">DISCOVER<FaAngleRight size={15}/></div>
                </div>
            </div>
            <div className="welcome__right">
                <div className="imageContainer">
                    <div className="imageContainer--img1"></div>
                    <div className="imageContainer--img2"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome