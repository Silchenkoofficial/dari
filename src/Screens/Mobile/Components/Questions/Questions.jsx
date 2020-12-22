import React from 'react';

import {InstagramIcon, WhatsappIcon, MailIcon} from './../../../../images/social';
import './Questions.min.css';

function Questions() {
    return (
        <section className="questions" id="contacts">
            <div className="title" style={{
                marginTop: -20
            }}>остались вопросы?</div>
            <div className="subtitle">Свяжитесь с нами удобным<br />для Вас способом!</div>
            <div className="questions__social">
                <div className="social__icon">
                    <a href="https://www.instagram.com/dari.spb/" target="_blank">
                        <img src={InstagramIcon} alt=""/>
                    </a>
                </div>
                <div className="social__icon">
                    <a href="https://wa.me/79817107127" target="_blank">
                        <img src={WhatsappIcon} alt=""/>
                    </a>
                </div>
                <div className="social__icon">
                    <a href="mailto:dari-box.spb@yandex.ru">
                        <img src={MailIcon} alt=""/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Questions
