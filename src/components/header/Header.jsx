import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from'../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Luis Mondaca</h1>
        <h5 className="text-light">Desarrollador web y Mantención de equipos computacionales entre otros.</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header