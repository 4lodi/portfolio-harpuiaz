import React from 'react'
import './about.css'
import ME from'../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Desarrollador web independiente, mantencion de equipos entre otros</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ clientes</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Laboratorio Dental</small>
            </article>
          </div>

          <p>Soy un Desarrollador Web independiente y hago mantencion a equipos como PC's, impresoras entre otros perifericos.
            <br/>Tengo clientes a los cuales ayudo a; enzamblar o reparar sus equipos; capcitacion basica de Microsoft Word y Excel o usar sistemas de sus empresas. 
            <br />Al momento tengo un sistema con unos clientes que es un sistema web de ingreso de ordenes para la creacion o reparacion de piezas dentales, el cual consiste en un formulario para ingresar las ordenes un CRUD para visualizar estas ordenes o modificar, descargar un Excel e imprimirlas para asi tener un orden en su trabajo y sacar cuentas a final de mes.
          </p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About