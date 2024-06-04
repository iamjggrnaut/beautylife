import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide from '../assets/slide.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'

const Top = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='top-block'>
            <div className="d-flex w-100">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item style={{ width: '100vw' }}>
                        <img style={{ width: '100%' }} src={slide} alt="" />
                        <Carousel.Caption style={{ color: 'black', top: '20%', left: '10%', textAlign: 'start' }}>
                            <h3 className='custom-caption'>Салон красоты и косметологии <span style={{ fontWeight: 'bold', color: '#5A4E7B' }}>Beauty Life</span> предлагает широкий спектр услуг</h3>
                            <br />
                            <a href='#price' style={{ textDecoration: 'none' }} className='prime-btn prime-link'>
                                Подробнее
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '100vw' }}>
                        <img style={{ width: '100%' }} src={slide2} alt="" />
                        <Carousel.Caption style={{ color: 'black', top: '20%', left: '10%', textAlign: 'start' }}>
                            <h2 style={{ fontSize: '48px' }} className='custom-caption'>Новым клиентам <br /> <span style={{ fontWeight: 'bold', color: '#5A4E7B' }}>Скидка 10%</span></h2>
                            <p className='custom-caption'>Подробнее с нашей системой скидок Вы можете ознакомиться в нашем салоне или связавшись с нами по телефону</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '100vw' }}>
                        <img style={{ width: '100%' }} src={slide3} alt="" />
                        <Carousel.Caption style={{ color: 'black', top: '20%', left: '10%', textAlign: 'start' }}>
                            <h3 style={{ fontSize: '32px' }} className='custom-caption'>Гибкая система скидок на комбинирование услуг</h3>
                            <br />
                            <a href='#price' style={{ textDecoration: 'none' }} className='prime-btn prime-link'>
                                Подробнее
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Top