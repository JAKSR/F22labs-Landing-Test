import React from 'react'
import pMale from '../../assets/male.png'
import pFemale from '../../assets/female.png'
import './index.css'

const Feedback = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='fb_main'>
          <div className='col-md-8 col-sm-6'>
            <h1 className='fb_hd'>What User Say</h1>
            <p className='fb_p'>Create custom landing pages
              with Omega that converts more visitors than
              any website.</p>
          </div>
          <div className='col-md-8 col-sm-12 style'>
            <div className='col-md-5 col-sm-12 div1'>
              <p className='div_p'>OMG! I cannot believe that I have got a
                brand new landing page after getting Omega.
                It was super easy to edit and publish.</p>
              <div className='pro_div'>
                <img src={pMale} alt='profile' className='pMale' />
                <div className='ml-2'>
                  <span className='sp1'>Jonathan Taylor</span><br/>
                  <span className='sp2'>CEO at Creativex</span>
                </div>
              </div>
            </div>
            <div className='col-md-5 col-sm-12 div1'>
              <p className='div_p'>OMG! I cannot believe that I have got a
                brand new landing page after getting Omega.
                It was super easy to edit and publish.</p>
              <div className='pro_div'>
                <img src={pFemale} alt='profile' className='pMale' />
                <div className='ml-2'>
                  <span className='sp1'>Marie Satnley</span><br/>
                  <span className='sp2'>Digital Marketer, Writer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-sm-12 bars_div mt-5'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar2'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback