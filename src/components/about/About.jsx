import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import "./about.scss"
function About() {
  return (
    <div className="container">
        <div className="about">
        <div className="about__left">
                <div className="imageContainer">
                <div className="imageContainer--img2"></div>
                    <div className="imageContainer--img1"></div>
                    
                </div>
            </div>
            <div className="about__right">
                <div className="about__right--title">ABOUT</div>
                <div className="about__right--text">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi numquam aliquid. Enim dolor qui libero quo in, accusantium illo similique eos ipsum, expedita necessitatibus voluptatem 
                </div>
                <div className="about__right--button">
                    <div className="button">MORE<FaAngleRight size={15}/></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About