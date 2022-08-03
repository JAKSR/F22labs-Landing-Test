import React from 'react'
import male from '../../assets/rectangle3.png'
import female from '../../assets/rectangle-copy4.png'
import './index.css'

const EnjoySection = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='enj_main pt-5'>
                    <div className='col-md-8 col-sm-10'>
                        <h1 className='enj_hd'>Enjoy Your Music</h1>
                    </div>
                    <div className='col-md-5 col-sm-8'>
                        <p className='enj_p'>
                            Create custom landing pages with Omega that converts
                            more visitors than any website. With lots of unique
                            blocks, you can easily build a page without coding.
                        </p>
                    </div>
                    <div className='col-md-8 col-sm-12 d-flex mt-4 mb-div'>
                        <div className='col-md-4 col-sm-8'>
                            <img src={male} alt='imag male' className='enj_male_img' />
                        </div>
                        <div className='col-md-6 col-sm-8'>
                            <img src={female} alt='imag female' className='enj_female_img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnjoySection