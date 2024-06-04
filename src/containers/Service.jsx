import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hair from '../assets/hair.jpg'
import nails from '../assets/nails.jpg'

const Service = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='service'>
            <h3 className="text-center mb-3">Наши услуги</h3>
            <div className="prime-bg">
                <div className="container">
                    <p>
                        В салоне красоты и косметологии Bellucci мы предлагаем широкий спектр услуг, которые помогут вам выглядеть и чувствовать себя великолепно. Наши профессиональные мастера используют только лучшие косметические средства и современные технологии, чтобы обеспечить вам наивысшее качество обслуживания.
                    </p>
                </div>
            </div>
            <div className="d-flex w-100" style={{ height: '80vh' }}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item style={{ width: '100vw' }}>
                        <img style={{ width: '100%', height: '80vh', objectFit: 'cover', }} src={hair} alt="" />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(19, 19, 19, 0.65)' }} >
                            <h3 className=''>Парикмахерский зал</h3>
                            <p>
                                Мы предлагаем услуги по созданию стиля, различных вариаций укладок - от дневной до свадебной, окрашиванию и еще ряду профессиональных услуг, с которыми Вы можете ознакомиться ниже
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '100vw' }}>
                        <img style={{ width: '100%', height: '80vh', objectFit: 'cover', }} src={nails} alt="" />
                        <Carousel.Caption style={{ backgroundColor: 'rgba(19, 19, 19, 0.65)' }} >
                            <h2 className=''>Маникюр и брови</h2>
                            <p className=''>
                                Наши профессионалы помогут Вам подобрать интересный стиль и выполнят качественную работу.
                                <br />
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Service