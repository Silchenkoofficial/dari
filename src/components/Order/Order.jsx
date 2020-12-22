import React, {useEffect, useState} from 'react';
import cx from 'classnames';
import InputMask from 'react-input-mask';

import emailjs, { init } from 'emailjs-com';

import AddressInput from '../AddressInput';

import './Order.min.css';
import { AddressSuggestions } from 'react-dadata';

const token = '1bf93b8ba4f31ad2102f71ac66f759d0e9905d6d';

function Order({closeOrderModal, optional}) {

    const checkItems = [
        {
            "text": "Овсяные мини-печеньки",
            "price": 100
        },
        {
            "text": "Домашняя карамель 0,1л",
            "price": 200
        },
    ];
    const [activeChoice, setActiveChoice] = useState(null);
    const [delivery, setDelivery] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderData, setOrderData] = useState({
        boxSize: '',
        optional: optional,
        name: '',
        tel: '',
        email: '',
        check0: false,
        check1: false,
        check4: '',
        delivery: false,
        pickUp: false,
        address: '',
        date: ''
    });
    const onSelectedChoice = (index, box) => {
        setActiveChoice(index);
        setOrderData({
            ...orderData,
            boxSize: box
        });
    };
    const onChangeCheck = index => {
        switch (index) {
            case 0:
                setOrderData({
                    ...orderData,
                    "check0": !orderData.check0
                });
                break;
            case 1:
                setOrderData({
                    ...orderData,
                    "check1": !orderData.check1
                });
                break;
            case 2:
                setOrderData({
                    ...orderData,
                    "check2": !orderData.check2
                });
                break;
            case 3:
                setOrderData({
                    ...orderData,
                    "check3": !orderData.check3
                });
                break;
        
            default:
                break;
        }
    }
    const openAddInput = () => {
        setOpenAdd(!openAdd);
        console.log(1);
    };
    const deliveryHandler = () => {

    }
    const onSubmit = () => {

        if (orderData.boxSize === '') {
            return alert('Выберите размер коробочки');
        }
        if (orderData.name === '') {
            return alert('Введите Ваше имя');
        }
        if (orderData.tel === '') {
            return alert('Введите номер телефона');
        }
        if (orderData.email === '') {
            return alert('Введите Ваш email');
        }
        setLoading(true);

        // emailjs.send('service_8qrb08u', 'template_qrgz929', orderData)
        // .then(function(response) {
        //     setSending(true);
        //     setLoading(false);
        // }, function(error) {
        //     setError(true);
        // });

        console.log(orderData);
    }

    useEffect(() => {
        init("user_ap2zxSQdyStkWvv8sKk3X");
    }, []);

    return (
        <div className="order">
            <div className="order__wrapper" onClick={closeOrderModal}></div>
            {!sending ? <div className="order__main main">
                <div className="main__title">Сделать заказ</div>
                <div className="order__close" onClick={closeOrderModal}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-times fa-w-11 fa-2x"><path fill="#94000A" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" className=""></path></svg>
                </div>
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Ваш выбор:
                    </div>
                    <div className="main__form-group--buttons">
                        {
                            [
                                "Коробочка S",
                                "Коробочка XL"
                            ].map((item, index) => (
                                <div
                                    key={`choice-${index}`}
                                    className={cx(
                                        'main__form-group--button', {
                                            active: activeChoice === index && 'active'
                                        }
                                    )}
                                    onClick={() => {
                                        onSelectedChoice(index, index === 0 ? 'Коробочка S' : index === 1 ? 'Коробочка XL' : 'Свой подарок');
                                    }} >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Представьтесь, пожалуйста:
                    </div>
                    <input
                        type="text"
                        className="main__form-group--input"
                        placeholder="Ваше имя"
                        onChange={(e) => setOrderData({
                            ...orderData,
                            name: e.target.value
                        })} />
                </div>
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Ваш номер телефона:
                    </div>
                    <InputMask
                        className="main__form-group--input"
                        placeholder="+7 (***) ***-**-**"
                        mask="+7\(999) 999-99-99"
                        onChange={(e) => setOrderData({
                            ...orderData,
                            tel: e.target.value
                        })} />
                </div>
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Адрес электронной почты:
                    </div>
                    <input
                        type="text"
                        className="main__form-group--input"
                        placeholder="Введите почту"
                        onChange={(e) => setOrderData({
                            ...orderData,
                            email: e.target.value
                        })} />
                </div>
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Дополните свою коробочку:
                    </div>
                    {
                        checkItems.map((item, index) => (
                            <div
                                key={`checkbox-${index}`}
                                className="main__form-group--checkbox" >
                                <input type="checkbox" name="additional" id={`check${index}`} onChange={() => {
                                    onChangeCheck(index);
                                }} />
                                <label htmlFor={`check${index}`} className="checkbox-btn">
                                    <p className="text">{item.text}</p>
                                    <p className="price">+&nbsp;{item.price}р.</p>
                                </label>
                            </div>
                        ))
                    }
                    <div
                        onClick={openAddInput}
                        className={cx('main__form-group--checkbox', {
                            active: openAdd && 'active'
                        })}
                        style={{
                            marginTop: 18
                        }} >
                        <label htmlFor='check5' className="checkbox-btn">
                            <p className="text" style={{
                                width: '70%'
                            }}>Именная открытка с&nbsp;пожеланием на 2021 год</p>
                            <p className="price">+&nbsp;70р.</p>
                        </label>
                    </div>
                    {openAdd ? (
                        <input
                            type="text"
                            className="main__form-group--input"
                            style={{
                                marginTop: 10
                            }}
                            placeholder="Ваше пожелание"
                            onChange={(e) => setOrderData({
                                ...orderData,
                                "check4": e.target.value
                            })} />
                    ) : ''}
                </div>
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Как заберете коробочку?
                    </div>
                    <div className="main__form-group--buttons" style={{
                        marginBottom: 25
                    }}>
                        {
                            [
                                "Доставка",
                                "Самовывоз"
                            ].map((item, index) => (
                                <div
                                    key={`delivery-${index}`}
                                    className={cx(
                                        'main__form-group--button', {
                                            active: delivery === index && 'active'
                                        }
                                    )}
                                    onClick={() => {
                                        setDelivery(index);
                                        setOrderData({
                                            ...orderData,
                                            delivery: index === 0 ? 'Доставка' : 'Самовывоз'
                                        })
                                    }} >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                    {
                            delivery === 0 && 
                            <div className="address">
                                <AddressSuggestions
                                    token={token}
                                    defaultQuery="Введите адрес доставки"
                                    value={orderData.address}
                                    onChange={(e) => setOrderData({
                                        ...orderData,
                                        address: e.value
                                    })}
                                    count={5}
                                    filterLocations={[{"kladr_id": "78"}]} />
                            </div>
                    }
                    { 
                            delivery === 1 &&
                            <div className="pick-point">
                                <select className="main__form-group--select">
                                    <option
                                        onSelect={() => {
                                            setOrderData({
                                                ...orderData,
                                                address: 'Балтийский бульвар, д. 4'
                                            });
                                        }}
                                    >Балтийский бульвар, д. 4</option>
                                    <option
                                        onSelect={() => {
                                            setOrderData({
                                                ...orderData,
                                                address: 'Воронежская улица, д. 37'
                                            });
                                        }}
                                    >Воронежская улица, д. 37</option>
                                </select>
                                {/* <input
                                    type="text"
                                    className="main__form-group--input"
                                    style={{
                                        marginTop: 10
                                    }}
                                    placeholder="Ваше пожелание"
                                    onChange={(e) => setOrderData({
                                        ...orderData,
                                        "check4": e.target.value
                                    })} /> */}
                            </div>
                        }
                </div>
                {/* TODO: Дата получения */}
                <div className="main__form-group">
                    <div className="main__form-group--label">
                        Дата получения:
                    </div>
                    <InputMask
                        className="main__form-group--input"
                        placeholder="дд.мм.гггг"
                        mask="99.99.9999"
                        onChange={(e) => setOrderData({
                            ...orderData,
                            date: e.target.value
                        })} />
                </div>
                <div className="main__submit">
                    {/* <div className="price">{price} ₽</div> */}
                    <div className="btn-submit" onClick={onSubmit}>
                        {!loading ?  'Отправить заказ' : 'Загрузка...'}
                    </div>
                </div>
            </div> : 
            <div className="order__main main">
                {
                    !error ? <div className="ok">
                        <div className="order__close" onClick={closeOrderModal}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-times fa-w-11 fa-2x"><path fill="#94000A" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" className=""></path></svg>
                        </div>
                        <div className="main__title">ваш заказ принят!</div>
                        <p className="main__text">В течение ближайшего времени наш менеджер свяжется с&nbsp;Вами для уточнения деталей заказа и доставки.</p>
                        <p className="main__text">Если у Вас остались вопросы, свяжитесь с нами удобным для Вас способом!<br />Вся информация указана в разделе “Контакты”.</p>
                        <p className="main__text">Хорошего дня!☺</p>
                    </div> :
                    <div className="error">
                        <div className="order__close" onClick={closeOrderModal}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-times fa-w-11 fa-2x"><path fill="#94000A" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" className=""></path></svg>
                        </div>
                        <div className="main__title">Ой, что-то пошло не так...</div>
                        <p className="main__text">Попробуйте отправить Ваш заказ еще раз.</p>
                    </div>
                }
            </div>
            }
            
        </div>
    )
}

export default Order;
