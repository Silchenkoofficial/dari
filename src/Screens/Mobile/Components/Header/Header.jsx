import React, {useState, useRef} from 'react';
import cx from 'classnames';

import './Header.min.css';

function Header() {
    const [isOpen, setOpen] = useState(false);
    const Dropdown = useRef(null);

    const openMenu = () => {
        setOpen(!isOpen);
        !isOpen ? Dropdown.current.style.left = '0' : Dropdown.current.style.left = '-100%';
    }

    return (
        <section className="header">
            <div className="header__top">
                <div className="header__logo">Д А Р И</div>
                <div className="header__buttons">
                    <a href="tel:79817107127" className="header__call header__btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-phone-alt fa-w-16 fa-2x"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" className=""></path></svg>
                    </a>
                    <div className={cx('header__menu', 'header__btn', {
                        active: isOpen ? 'active' : ''
                    })}
                    onClick={openMenu} >
                        <span className="menu-line"></span>
                    </div>
                    <ul className="header__dropdown" ref={Dropdown} style={{
                        left: '-100%'
                    }}>
                        {
                            [
                                {
                                    "text": 'О нас',
                                    "link": "#about"
                                },
                                {
                                    "text": 'Варианты коробочек',
                                    "link": "#variants"
                                },
                                {
                                    "text": 'Доставка/оплата',
                                    "link": "#delivery"
                                },
                                {
                                    "text": 'Контакты',
                                    "link": "#contacts"
                                },
                            ].map((item, index) => (
                                <li key={item.text} className="header__dropdown--item" onClick={openMenu}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="header__main">
                <div className="header__main--title">
                    <h1>Дари</h1>
                    <p>Подарки с душой</p>
                </div>
                <a href="#variants" className="header__main--button">
                    Перейти к выбору
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-inline--fa fa-long-arrow-alt-down fa-w-8 fa-2x"><path fill="currentColor" d="M20.485 372.485l99.029 99.03c4.686 4.686 12.284 4.686 16.971 0l99.029-99.03c7.56-7.56 2.206-20.485-8.485-20.485H156V44c0-6.627-5.373-12-12-12h-32c-6.627 0-12 5.373-12 12v308H28.97c-10.69 0-16.044 12.926-8.485 20.485z" className=""></path></svg>
                </a>
            </div>
        </section>
    )
}

export default Header
