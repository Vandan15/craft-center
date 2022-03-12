import React, { useState } from 'react'
import sliderImg from '../public/assets/images/slider.png';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselItem() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='carousel-wrapper'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image
                        src={sliderImg}
                        className="d-block w-100"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={sliderImg}
                        className="d-block w-100"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={sliderImg}
                        className="d-block w-100"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <span className='floating-arrow-left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.621" height="22.243" viewBox="0 0 12.621 22.243">
                    <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M22.5,27l-9-9,9-9" transform="translate(-12 -6.879)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                </svg>
            </span>
            <span className='floating-arrow-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.621" height="22.243" viewBox="0 0 12.621 22.243">
                    <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left" d="M13.5,27l9-9-9-9" transform="translate(-11.379 -6.879)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                </svg>
            </span>
        </div>
    )
}
