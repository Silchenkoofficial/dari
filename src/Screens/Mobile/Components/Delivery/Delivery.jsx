import React from 'react';
import DeliveryImg from '../../../../images/delivery.jpg';

import './Delivery.min.css';

function Delivery() {
    return (
        <section className="delivery" id="delivery">
            <div className="title" style={{marginTop:-10}}>Доставка/оплата</div>
            <div className="delivery__main">
                <div className="delivery__block block">
                    <div className="block__title">
                        доставка по санкт-петербургу осуществляется в пределах кад в день заказа или к определенной дате
                    </div>
                    <div className="block__desc">
                        <p className="block__desc--text">
                            Мы привезем подарок Вам или прямо в руки тому, кому адресована коробочка, ежедневно в&nbsp;любое время с 9.00 до 22.00.
                        </p>
                        <p className="block__desc--text">
                            Ваша коробочка будет упакована и доставлена на следующий день после оформления заказа. Если Вам необходимо получить коробочку в&nbsp;день заказа, пожалуйста, свяжитесь с нашим менеджером. Все контакты указаны в разделе “Контакты”.
                        </p>
                        <p className="block__desc--text" style={{
                            marginTop: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p>Стоимость доставки по СПб<br />в пределах КАД</p>
                            <p style={{fontWeight: 'bold'}}>300₽</p>
                        </p>
                        <p className="block__desc--text" style={{
                            marginTop: 20,
                            marginBottom: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p>Самовывоз со станции<br />метро Ленинский проспект</p>
                            <p style={{fontWeight: 'bold'}}>Бесплатно</p>
                        </p>
                        <p className="block__desc--text" style={{
                            marginTop: 20,
                            marginBottom: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p>Самовывоз c Балтийского<br />бульвара, д. 4</p>
                            <p style={{fontWeight: 'bold'}}>Бесплатно</p>
                        </p>
                        <p className="block__desc--text" style={{
                            marginTop: 20,
                            marginBottom: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p>Самовывоз с Воронежской<br />улицы, д. 37</p>
                            <p style={{fontWeight: 'bold'}}>Бесплатно</p>
                        </p>
                        {/* <p className="block__desc--text" style={{
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>
                            300₽
                        </p> */}
                        {/* <p className="block__desc--text white">
                            Самовывоз осуществляется со ст. м. "Ленинский проспект"
                        </p> */}
                    </div>
                    {/* <div className="block__price">300₽</div> */}
                    <div className="block__img">
                        <img src={DeliveryImg} alt=""/>
                    </div>
                    <div style={{
                        backgroundColor: '#fff',
                        paddingTop: 20,
                        paddingBottom: 20,
                    }}>
                        <p className="block__desc--text">
                            Оплата осуществляется наличными или переводом на карту Сбербанк при получении.
                        </p>
                        <p className="block__desc--text">
                            При 100% предоплате Вы получите<br />скидку 10% на заказ!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Delivery
