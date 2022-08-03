import React from 'react'
import redCards from '../../assets/cards.png'
import uniqPara from '../../assets/50Unic.png'
import bluePhone from '../../assets/phone.png'
import mobilePara from '../../assets/mobile-first.png'
import detailsImg from '../../assets/bitmap2.png'
import './index.css'

const Details = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='main_div'>
                <div className='col-md-4 col-sm-10'>
                    <h1 className='details_content_hd'>Get noise free sound everytime</h1>
                    <p className='details_c_p'>
                     Create custom landing pages with Omega
                     that converts more visitors than any website. 
                     With lots of unique blocks, you 
                     can easily build a page without coding.
                    </p>
                    <div className='details_c_item'>
                        <div className='cards_bg'>
                            <img src={redCards} alt='cards' className='red_cards' />
                        </div>
                        <div className='d_i_data'>
                            <img src={uniqPara} alt='cards para' className='uniqPara' />
                        </div>
                    </div>

                    <div className='details_c_item mt-3'>
                        <div className='phone_bg cards_bg'>
                            <img src={bluePhone} alt='phone' className='phone' />
                        </div>
                        <div className='d_i_data'>
                            <img src={mobilePara} alt='phone para' className='mobilePara' />
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-sm-10 bitmap_img2'>
                    <img src={detailsImg} alt='headphone imag' className='hdp_img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details