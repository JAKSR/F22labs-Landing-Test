import React, { useState } from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'
import bitmap1 from '../../assets/bitmap.png'
import './index.css'

const Home = () => {
  const [num, setNum] = useState(1)
  const onClickIncrement = () => {
    setNum((prev) => prev + 1)
  }
  const onClickDecrement = () => {
    setNum((prev) => prev - 1)
  }
  return (
    <div className='home_bg'>
      <div className='home_main_div'>
        <div className='home_img_div'>
        <img src={bitmap1} alt='headset imag' className='home_img' />
        </div>
        <div className='home_content_div'>
          <h1 className='home_c_hd'>Enjoy every single<br/>beat on headphone!</h1>
          <p className='home_c_p'>For iPhone, iPad, and Android users, be sure your
           product’s firmware is up to date through the Bose connect app.</p>
           <div className='home_price_card'>
              <div className='home_p_div'>
                <h1 className='home_p'>$299</h1>
                <button type='button' className='save_btns'>Save 30% today</button>
              </div>
              <p className='home_p_para'>Original price $399</p>
           </div>
           <div className='add_btn_div'>
            <div className='input_div'>
              <p className='input'>{num}</p>
              <div className='input_btns_div'>
                <button type='button' onClick={onClickIncrement} className='btns btns_pls'><GrFormAdd /></button>
                <button type='button' onClick={onClickDecrement} className='btns btns_mins'><GrFormSubtract /></button>
              </div>
            </div>
            <button type='button' className='add_btn'>Add to cart</button>
           </div> 
        </div>
      </div>
    </div>
  )
}

export default Home