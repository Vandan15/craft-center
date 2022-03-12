import React from 'react'
import BannerImg from '../public/assets/images/slider.png'
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='banner-wrapper'>
        <Image src={BannerImg}></Image>
    </div>
  )
}
