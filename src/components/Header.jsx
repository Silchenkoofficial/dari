import React from 'react';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__top">
                    <div className="header__logo">ДАРИ</div>
                    <div className="header__menu">
                        <ul className="header__menu--list">
                            <li className="header__menu--link"><a href="javascript://">О нас</a></li>
                            <li className="header__menu--link"><a href="javascript://">Варианты коробочек</a></li>
                            <li className="header__menu--link"><a href="javascript://">Доставка/оплата</a></li>
                            <li className="header__menu--link"><a href="javascript://">Контакты</a></li>
                        </ul>
                        <div className="header__button">Перезвоните мне</div>
                    </div>
                </div>
            </div>
            <div className="header__main">
                <div className="header__main--title">
                    <h1>Д а р и</h1>
                    <p>ПОДАРКИ С ДУШОЙ</p>
                </div>
                <div className="header__main--toVariants-btn">
                    Перейти к выбору
                    <i className="icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="long-arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-inline--fa fa-long-arrow-down fa-w-8 fa-2x">
                            <path fill="currentColor" d="M252.485 343.03l-7.07-7.071c-4.686-4.686-12.284-4.686-16.971 0L145 419.887V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v375.887l-83.444-83.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l116 116.485c4.686 4.686 12.284 4.686 16.971 0l116-116.485c4.686-4.686 4.686-12.284-.001-16.97z"></path>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Header;
