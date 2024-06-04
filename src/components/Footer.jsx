import React from 'react'
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";


const Footer = () => {

    return (
        <div className='prime-bg'>
            <div className="container footer-container">
                <div>
                    <h4>Beauty Life</h4>
                    <h6>Салон красоты и косметологии</h6>
                    <p style={{ fontSize: '12px' }}>Все права защищены, 2024</p>
                </div>
                <div>
                    <h6 className="fw-bold text-end">
                        Разработано ARCANE DEVLAB
                    </h6>
                    <div className='d-flex gap-3 justify-content-end'>
                        <a style={{ color: 'white', textDecoration: 'none' }} target='_blank' href="https://t.me/hardnuttocrack"><FaTelegramPlane /></a>
                        <a style={{ color: 'white', textDecoration: 'none' }} target='_blank' href="https://www.instagram.com/arcanedevlab/"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer