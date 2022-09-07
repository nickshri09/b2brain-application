import React from 'react'
import { companySvg, footerSvg, heroSvg } from '../assets';
import { Companies, Footer, HeroIMG } from './styles';

const HomeStatic = () => {
  return (
    <div>

      <HeroIMG>
        <img alt='Hero' src={heroSvg} />
      </HeroIMG>
      <Companies>
        <img alt='Company' src={companySvg} />
      </Companies>
      <Footer>
        <img alt='Company' src={footerSvg} />
      </Footer>

    </div>
  )
}

export default HomeStatic;