import React from 'react'
import './index.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <h2 className='nav_hd'>Omega</h2>
        <ul className='nav_ul'>
            <li className='nav_li'>Demose</li>
            <li className='nav_li'>Pages</li>
            <li className='nav_li'>Support</li>
        </ul>
        <div className='cart_div'>
        <p className='cart_name'>Cart</p>
          <p className='cart_num'>3</p>
        </div>
    </div>
  )
}

export default Navbar