import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/ranul-rathnayake-1b1b3a1b0/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
      <a href="https://github.com/RanulRathnayake?tab=overview&from=2023-06-01&to=2023-06-18" target="_blank" rel="noreferrer"><AiFillGithub/></a>
      <a href="https://www.hackerrank.com/ranulrathnayake7?hr_r=1" target="_blank" rel="noreferrer"><FaHackerrank/></a>
      
    </div>
  )
}

export default HeaderSocials 
