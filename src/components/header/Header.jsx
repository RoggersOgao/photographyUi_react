import React from 'react'
import "./header.scss"
function Header() {
  return (
    <div className="container">
        <div className="header">
          
            <div className="header__top">
              <div className="header__top-icons">
                <a href="https://facebook.com">
                <img src="/photography/web/facebook.png" alt="facebook"/>
                </a>
                <a href="https://instagram.com">
                <img src="/photography/web/instagram.png" alt="instagram"/>
                </a>
                <a href="https://twitter.com">
                <img src="/photography/web/twitter.png" alt="twitter"/>
                </a>
              </div>
              <div className="line"></div>
            </div>
            <div className="header__bottom">
              <div className="header__bottom-logo">
                  <img src="/photography/web/logowsm.png" alt="logo-img" />
                  <div className="text">
                    INTELLISIRN
                  </div>
              </div>
              <div className="header__bottom-text">
                <div className="textSection">
                 <div className="textSection__logo">
                 <div className="textSection__logo-img"></div>
                 </div>
                 <div className="textSection__title">
                  PHOTOGRAPHY
                 </div>
                 <div className="textSection__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nemo temporibus sapiente provident fugit dignissimos pariatur aperiam, corporis soluta accusantium magnam porro beatae exercitationem
                 </div>
                 <div className="textSection__button">
                <button>DISCOVER</button>
              </div>  
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Header