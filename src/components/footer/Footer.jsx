import React from 'react'
import "./footer.scss"

function Footer() {
    const yearNow = new Date().getFullYear().toString()
  return (
    <div className="container">
        <footer className="footer">
            <div className="footer__rows">
                <div className="footer__rows--1">
                    <div className="logo">
                        <img src="/photography/web/logowsm.png" alt="" srcset="" />
                        INTELLISIRN
                    </div>
                 <div className="list">
                <ul>
                    <li>Location: Kenya</li>
                    <li>Address: Nairobi</li>
                    <li>Phone: +254700601885</li>
                    <li>Email: roggersog@gmail.com</li>
                </ul>
                </div>
                </div>
                <div className="footer__rows--2">DISCOVER
                <div className="list">
                <ul>
                    <li>World of photography</li>
                    <li>Art at its best</li>
                    <li>Camera's used</li>
                </ul>
                </div>
                </div>
                <div className="footer__rows--3">MORE
                <div className="list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Art Gallery</li>
                </ul>
                </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer__bottom">
                <div className="copy">
                    &copy; copyright {yearNow} All rights reserved
                </div>
              <div className="footer__bottom-icons">
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
              
            </div>
        </footer>
    </div>
  )
}

export default Footer