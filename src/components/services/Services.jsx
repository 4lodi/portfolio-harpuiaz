import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensamblaje de computadoras a medida del usuario.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Construccion de una correcta area de trabajo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sistema web a medida del usuario.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desarrollador sistemas en Laravel.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desarrollador sistemas en React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PHP, MySql entre otros.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseños de logotipos empresariales a medida.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Edicion de imagenes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creacion de imagenes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fotografo.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services