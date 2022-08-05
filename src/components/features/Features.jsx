import React from 'react'
import "../../App.scss"
import "./features.scss"
function Features() {
  return (
    <div className="container">
      <div className="features">
        <div className="features__row1">
          <div className="features__row1-img1">
            <figcaption>
              <p className="title">INTERIOR</p>
              <p className="text">view more</p>
            </figcaption>
          </div>
          <div className="features__row1-img2">
          <figcaption>
              <p className="title">ANIMALS</p>
              <p className="text">view more</p>
            </figcaption>
          </div>
          <div className="features__row1-img3">
          <figcaption>
              <p className="title">ART</p>
              <p className="text">view more</p>
            </figcaption>
          </div>
          
        </div>
        <div className="features__row2">
          <div className="features__row2-img1">
          <figcaption>
              <p className="title">NATURE</p>
              <p className="text">view more</p>
            </figcaption>
          </div>
          <div className="features__row2-img2">
          <figcaption>
              <p className="title">CREATIVE</p>
              <p className="text">view more</p>
            </figcaption>
          </div>
          <div className="features__row2-img3">
          <figcaption>
              <p className="title">REAL ESTATE</p>
              <p className="text">view more</p>
            </figcaption>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Features