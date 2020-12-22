import React from 'react';

import blockImg1 from './../../../../images/block-img-1.png';
import blockImg2 from './../../../../images/block-img-2.png';
import snowIcon from './../../../../images/snow-icon.png';
import giftIcon from './../../../../images/gift-icon.png';

import './About.min.css';

function About() {
    return (
        <section className="about" id="about">
            <div className="title">ДАРИ – ЭТО ПРОСТО И С ДУШОЙ</div>
            <div className="about__main">
                <div className="about__block block">
                    <div className="block__title">
                        <div className="block__title--icon">
                            <img src={snowIcon} alt=""/>
                        </div>
                        <h1>Больше не нужно думать над подарком</h1>
                    </div>
                    <div className="block__desc">
                        Порой так непросто выбрать подарок даже родному человеку! Поэтому мы позаботились о Вас и о Ваших близких. Теперь дарить подарки это не проблема, а приятная традиция, которая оставит тёплые воспоминания о любом празднике, ведь наши коробочки универсальны во всем и в каждую вложена частичка души. 
                    </div>
                    <div className="block__img">
                        <img src={blockImg1} alt=""/>
                    </div>
                </div>
                <div className="about__block block">
                    <div className="block__title">
                        <div className="block__title--icon">
                            <img src={giftIcon} alt=""/>
                        </div>
                        <h1>Упакуем любой подарок</h1>
                    </div>
                    <div className="block__desc">
                    Если у Вас уже есть подарок, но Вы не знаете, как его преподнести, мы поможем! Упакуем его в красивую деревянную коробочку с  мягким наполнителем, дополнив именной открыткой. Оформление «Дари» выделит Ваш подарок красотой и душевностью среди других! 
                    </div>
                    <div className="block__img">
                        <img src={blockImg2} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
