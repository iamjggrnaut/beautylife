import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import reviewbg from '../assets/reviewbg.png'
import data from '../assets/reviews.json'

const Reviews = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='reviews'>
            <div className="prime-bg">
                <h3 className="text-center">Что о нас говорят</h3>
            </div>
            <div className="d-flex w-100">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        data ?
                            data.map((item, i) => (
                                <Carousel.Item style={{ height: '65vh', width: '100vw' }} key={i}>
                                    <img style={{ height: '65vh', width: '100%', objectFit: 'cover' }} src={reviewbg} alt="" />
                                    <Carousel.Caption style={{ color: 'black', backgroundColor: 'rgba(245, 245, 245, 0.75)', padding: '30px' }}>
                                        <h4 className="fw-bold">{item.name}</h4>
                                        <p>{item.review}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )) : null
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Reviews