import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/im_alodi/" target="_blank"><BsInstagram/></a>
        <a href="https://www.instagram.com/im_alodi/" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/im_alodi/" target="_blank"><AiFillLinkedin/></a>
    </div>
  )
}

export default HeaderSocials