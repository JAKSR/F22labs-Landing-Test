import React from 'react'
import uniqPara from '../../assets/phone.png'
import './index.css'

const Specifications = () => {
  return (
    <div className='spc_bg'>
      <div className='container'>
        <div className='row'>
          <div className='spc_main_div'>

            <div className='col-md-4 col-sm-10'>
              <h2 className='spc_hd'>It’s everything you’ll ever need</h2>
            </div>

            <div className='col-md-9 col-sm-12'>
              <div className='grid'>
                <div className='spc_items'>
                  <div className='spc_img_div'>
                    <img src={uniqPara} alt='cards para' className='spc_phone' />
                  </div>
                  <p className='p'>50+ Unique Design Blocks</p>
                </div>
                <div className='spc_items'>
                  <div className='spc_img_div'>
                    <img src={uniqPara} alt='cards para' className='spc_phone' />
                  </div>
                  <p className='p'>Multiple Layouts</p>
                </div>
                <div className='spc_items'>
                  <div className='spc_img_div'>
                    <img src={uniqPara} alt='cards para' className='spc_phone' />
                  </div>
                  <p className='p'>Mobile First Design</p>
                </div>
              </div>
            </div>

            <div className='col-md-9 col-sm-10 grid'>
              <div className='spc_items'>
                <div className='spc_img_div'>
                  <img src={uniqPara} alt='cards para' className='spc_phone' />
                </div>
                <p className='p'>Fully Responsive</p>
              </div>
              <div className='spc_items ml-0'>
                <div className='spc_img_div'>
                  <img src={uniqPara} alt='cards para' className='spc_phone' />
                </div>
                <p className='p'>Bootstrap 4 Framework</p>
              </div>
            </div>

            <div className='col-md-9 grid'>
              <div className='spc_items'>
                <div className='spc_img_div'>
                  <img src={uniqPara} alt='cards para' className='spc_phone' />
                </div>
                <p className='p'>Humanly Support</p>
              </div>
              <div className='spc_items'>
                <div className='spc_img_div'>
                  <img src={uniqPara} alt='cards para' className='spc_phone' />
                </div>
                <p className='p'>Lifetime Update</p>
              </div>
              <div className='spc_items'>
                <div className='spc_img_div'>
                  <img src={uniqPara} alt='cards para' className='spc_phone' />
                </div>
                <p className='p'>Rich Documentation</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Specifications