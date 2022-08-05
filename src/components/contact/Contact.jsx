import React from 'react'
import "./contact.scss"
function Contact() {
  return (
    <div className="container">
        <div className="title">Contact Me</div>
        <div className="contact">
            <div className="contact__left">
                <div className="contact__left--img"></div>
            </div>
            <div className="contact__right">
                <div className="contact__right--form">
                    <form action="" className="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description</label>
                            <textarea name="" id="desc" rows={6}/>
                        </div>
                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact