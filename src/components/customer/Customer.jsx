import React from 'react'
import "./customer.scss"
function Customer() {

    const todayDate =new Date().toUTCString().toString()
  return (
    <div className="container">
    <div className="customer">
        <div className="customer__left">
            <div className="customer__left--title">
                <img src="/photography/web/quote.png" alt="" srcset="" />
                <div className="text">
                CUSTOMER
                </div>
            </div>
            <div className="customer__left--text">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi numquam aliquid. Enim dolor qui libero quo in, accusantium illo similique eos ipsum, expedita necessitatibus voluptatem
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatem et distinctic dolor sit amet consectetur, adipisicing elit. Ipsum explicab</p>
            </div>
            <div className="customer__left--name">
                <div className="name">Roggers Ogao</div>
                <div className="date">{todayDate}</div>
            </div>
            
        </div>
        <div className="customer__right">
            <div className="imageContainer">
                <div className="imageContainer--img1"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Customer