import React, { useState } from 'react'

const Price = () => {

    const [active, setActive] = useState(0)


    return (
        <div id='price'>
            <div className="container">
                <h3>Прайс-лист</h3>
                <div className="row buttons-row">
                    <button className={active === 0 ? 'prime-btn col' : 'secondary-btn col'} onClick={() => setActive(0)}>
                        Парикмахерский зал
                    </button>
                    <button className={active === 1 ? 'prime-btn col' : 'secondary-btn col'} onClick={() => setActive(1)}>
                        Брови
                    </button>
                    <button className={active === 2 ? 'prime-btn col' : 'secondary-btn col'} onClick={() => setActive(2)}>
                        Маникюр
                    </button>
                    <button className={active === 3 ? 'prime-btn col' : 'secondary-btn col'} onClick={() => setActive(3)}>
                        Педикюр
                    </button>
                </div>

                <div >
                    {
                        active === 0 ?
                            <div className="price-list">
                                <h5 className="fw-bold">Парикмахерский зал</h5>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Стиль ( мытья головы , стрижка , укладка )</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2500 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Коррекции челки</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>500 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Укладка дневная</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1500 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Укладка коктейльная</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2800 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Прическая свадебная</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2800 - 3500 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Окрашеванние Корней ( до 40 гр.)</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>5000 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Окрашивание 1 (в один тон до 60 гр.)</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>7000 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Окрашивание 2 (в один тон до 100 гр.)</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>9000 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Блондирование ,мелирование</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>5000 - 8500 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Творческая работа</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>10 000 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Тонирование 1 ( до 40гр.)</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>5000 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Тонирование 2 ( до 80гр.)</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>7000 руб</p>
                                </div>
                                <br />
                                <br />
                                <h5 className="fw-bold">Уход</h5>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Счастье для волос</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>5000 - 7000 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Davines OI Liquid Luster</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>3500 руб</p>
                                </div>
                                <div className="price-line">
                                    <p style={{ width: '45%' }} className='mb-0'>Экспресс уход Xiaomoxuan Silky Smooth</p>
                                    <hr className='price-dash' />
                                    <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1500 руб</p>
                                </div>
                            </div>
                            : active === 1 ?
                                <div className="price-list">
                                    <h5 className="fw-bold">Брови</h5>
                                    <div className="price-line">
                                        <p style={{ width: '45%' }} className='mb-0'>Коррекция бровей</p>
                                        <hr className='price-dash' />
                                        <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>800 руб</p>
                                    </div>
                                    <div className="price-line">
                                        <p style={{ width: '45%' }} className='mb-0'>Окрашивания хной</p>
                                        <hr className='price-dash' />
                                        <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1000 руб</p>
                                    </div>
                                    <div className="price-line">
                                        <p style={{ width: '45%' }} className='mb-0'>Окрашевание краской</p>
                                        <hr className='price-dash' />
                                        <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>800 руб</p>
                                    </div>
                                    <div className="price-line">
                                        <p style={{ width: '45%' }} className='mb-0'>Ламинирование бровей</p>
                                        <hr className='price-dash' />
                                        <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2500 руб</p>
                                    </div>
                                    <div className="price-line">
                                        <p style={{ width: '45%' }} className='mb-0'>Ламинирование ресниц</p>
                                        <hr className='price-dash' />
                                        <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>3000 руб</p>
                                    </div>
                                </div>
                                : active === 2 ?
                                    <div className="price-list">
                                        <h5 className="fw-bold">Комплексные услуги</h5>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Комплекс (маникюр комбинированный/аппаратный/класический + снятие гель-лака + покрытие гель-лаком</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2550 - 3050 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Классический маникюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1600 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Аппаратный/комбинированный маникюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2100 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Пилочный маникюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>3000 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Мужской маникюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1600 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Baby-маникюр (для детей до 12 лет)</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>750 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Покрытие лаком</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>500 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Покрытие лечебным лаком</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>250 - 300 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Лечебное покрытие IBX</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>900 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Покрытие гель-лаком luxio</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2300 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Покрытие гель-лаком</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1700 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Покрытие French гель-лаком</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2000 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Снятие гель-лака</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>450 руб</p>
                                        </div>
                                        <br />
                                        <br />
                                        <h5 className="fw-bold">Дополнительные услуги</h5>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Выравнивание ногтевой пластины</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>Бесплатно</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Укрепление ногтей гель</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1000 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Укрепление ногтей акрил</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>500 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Коррекция формы ногтей</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>250 - 300 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Дизайн 1го ногтя</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>50 - 150 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Дизайн стразы (1 ноготь)</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>100 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Художественный дизайн</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>700 - 800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Лунный French</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>700 - 800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Втирка</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>50 руб</p>
                                        </div>
                                        <br />
                                        <br />
                                        <h5 className="fw-bold">Уходы</h5>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>SPA-уход (скрабирование, парафинотерапия, масло, массаж)</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Глубокое питание рук/стоп (парафинотерапия)</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>500 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Скраб для рук/стоп</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>300 руб</p>
                                        </div>
                                        <br />
                                        <br />
                                        <h5 className="fw-bold">Моделирование и коррекция</h5>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Моделирование</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>4000 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Моделирование одного ногтя</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>400 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Снятие нарощенных ногтей</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>1000 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Ремонт 1 ногтя</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>200 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Ремонт 1 ногтя French</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>300 руб</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="price-list">
                                        <h5 className="fw-bold">Комплексные услуги</h5>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Комплекс (педикюр комбинированный/аппаратный/класический + снятие гель-лака + покрытие гель-лаком</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2550 - 4050 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Классический педикюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Аппаратный/комбинированный педикюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>SMART педикюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>3800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Мужской педикюр</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>2800 руб</p>
                                        </div>
                                        <br />
                                        <br />
                                        <h5 className="fw-bold">Уходы</h5>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>SPA-уход (скрабирование, парафинотерапия, масло, массаж)</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>800 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Глубокое питание рук/стоп (парафинотерапия)</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>500 руб</p>
                                        </div>
                                        <div className="price-line">
                                            <p style={{ width: '45%' }} className='mb-0'>Скраб для рук/стоп</p>
                                            <hr className='price-dash' />
                                            <p style={{ width: '20%', textAlign: 'end' }} className='mb-0 fw-bold'>300 руб</p>
                                        </div>
                                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Price