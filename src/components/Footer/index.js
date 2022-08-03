import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className='ftr_main'>
      <div className='ftr_upper'>
        <h1 className='ftr_hd'>Enjoy every beat. <br />
          Get a new headphone.</h1>
        <button type='button' className='buy_btn'>Buy Now</button>

      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-sm-12 ftr_lower'>
            <h1 className='ftr_lwr_hd'>Omegel</h1>
            <ul className='ftr_ul'>
              <li className='ftr_li'>Support</li>
              <li className='ftr_li'>Privacy Policy</li>
              <li className='ftr_li'>Terms and Conditions</li>
            </ul>
            <p className='ftr_lwr_p'>© 2020 UXTheme, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer