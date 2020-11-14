import React from 'react';

import slide1 from '../images/slide1.png';

function WhatInside() {
    return (
        <div className="inside section">
            <div className="title">что внутри коробочек?</div>
            <div className="inside__slider slider">
                <div className="slider__arrow--left">
                    <svg width="32" height="77" viewBox="0 0 32 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.601 75.8972L31.5355 74.6848C32.1548 73.8812 32.1548 72.5782 31.5355 71.7745L5.69811 38.2499L31.5355 4.72539C32.1548 3.92181 32.1548 2.61885 31.5355 1.8151L30.601 0.602688C29.9816 -0.200896 28.9774 -0.200896 28.3581 0.602688L0.464495 36.7949C-0.154832 37.5984 -0.154832 38.9014 0.464495 39.7052L28.3581 75.8973C28.9774 76.7009 29.9816 76.7009 30.601 75.8972Z" fill="black"/>
                    </svg>
                </div>
                <div className="slider__arrow--right">
                    <svg width="32" height="77" viewBox="0 0 32 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39903 75.8972L0.464493 74.6848C-0.154834 73.8812 -0.154834 72.5782 0.464493 71.7745L26.3019 38.2499L0.464493 4.72539C-0.154834 3.92181 -0.154834 2.61885 0.464493 1.8151L1.39903 0.602688C2.01836 -0.200896 3.02255 -0.200896 3.64188 0.602688L31.5355 36.7949C32.1548 37.5984 32.1548 38.9014 31.5355 39.7052L3.64188 75.8973C3.02255 76.7009 2.01836 76.7009 1.39903 75.8972Z" fill="black"/>
                    </svg>
                </div>
                <div className="slide slide-1">
                    <div className="slide__image">
                        <img src={slide1} alt=""/>
                    </div>
                    <div className="slide__in">
                        <div className="slide__title">Домашняя карамель</div>
                        <div className="slide__subtitle">ВКУСЫ: КЛАССИЧЕСКАЯ, СОЛЁНАЯ, С АПЕЛЬСИНОМ</div>
                        <div className="slide__text">
                            Вкуснейшая мягкая карамель нашего фирменного производства никого
                            не оставит равнодушным! Она особенно вкусная, ведь мы сами создали ее идеальный секретный рецепт.<br /> 
                            <br />
                            Нашу карамель можно использовать для бутербродов на завтрак 
                            или в качестве самостоятельного десерта.<br />
                            <br />
                            Объём баночек: 0,1л
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatInside;
