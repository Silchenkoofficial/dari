import React, {useState, useRef, forwardRef, createRef} from 'react';
import cx from 'classnames';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import BlockImg from './../../../../images/block-img-2.png';
import BoxSImg from './../../../../images/box-s.jpg';
import BoxXlImg from './../../../../images/box-xl.jpg';

import {
    book, brezel, champagne, cookies, cup, diary, ginderbread,
    honey, hotChocolate, light, scarf, beze, candle
} from '../../../../images/includes';

import './Variants.min.css';
import {Order} from '../../../../components';

function Variants() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeBlockTab, setActiveBlockTab] = useState(0);
    const [isDesc, setDesc] = useState(true);
    const [openOrder, setOpenOrder] = useState(false);
    const [optional, setOptional] = useState('Бутылочка игристого');

    const orderModal = createRef();

    const onSelectedTab = (index) => setActiveTab(index);
    const onSelectedBlockTab = (index) => {
        setActiveBlockTab(index);
        setDesc(!isDesc);
    };
    const openOrderModal = () => {
        setOpenOrder(!openOrder);
        // !openOrder ? disableBodyScroll(orderModal) : enableBodyScroll(orderModal);
        console.log(1);
    };

    return (
        <>
            <section className="variants" id="variants">
            <div className="title">ВАРИАНТЫ КОРОБОЧЕК</div>
            <div className="tabs">
                {['Коробочка S', 'Коробочка XL'].map((item, index) => (
                    <div className={cx('tab', {
                        active: activeTab === index && 'active'
                    })} key={item} onClick={() => onSelectedTab(index)}>{item}</div>
                ))}
            </div>
            <div className="variants__main">
                {activeTab === 0 && <React.Fragment>
                    <div className="variants__main--block block">
                        <div className="slider">
                            <div className="slide">
                                <img src={BoxSImg} alt=""/>
                            </div>
                            <div className="slider__dots">
                                <span></span>
                                <span></span>
                                <span className="active"></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="block__wrapper">
                            <div className="block__tabs">
                                { ["Описание:", "Состав:"].map((item, index) => (
                                    <div
                                    key={item}
                                    className={cx('block__tab', {
                                        active: activeBlockTab === index && 'active'
                                    })}
                                    onClick={() => onSelectedBlockTab(index)}
                                    >{item}</div>
                                ))}
                            </div>
                            {
                                isDesc ? <div className="block__desc">
                                    <p>
                                        Коробочка S - небольшая, но очень вместительная. Мы наполнили его уютом, заботой и духом праздника! Мы используем деревянные коробочки, которые отлично подойдут для хранения или в качестве декора. Каждая коробочка дополнена новогодними леденцами, еловой веточкой и другими украшениями.
                                    </p>
                                    <div className="block__desc--add">
                                        Вы также можете скорректировать состав коробочки, добавив в нее дополнительные компоненты или именное поздравление в виде открытки.
                                    </div>
                                </div> : 
                                <div className="block__include">
                                    <ul>
                                        <li>
                                            <img src={honey} alt=""/>
                                            <p>
                                            Баночка домашней карамели 0,1л
                                            </p>
                                        </li>
                                        <li>
                                            <img src={cup} alt=""/>
                                            <p>
                                            Кружечка в теплом свитере
                                            </p>
                                        </li>
                                        <li>
                                            <img src={cookies} alt=""/>
                                            <p>
                                            Набор имбирных пряничков ручной работы 4 шт.
                                            </p>
                                        </li>
                                        <li>
                                            <img src={beze} alt=""/>
                                            <p>
                                            Мешочек воздушных безе
                                            </p>
                                        </li>
                                        <li>
                                            <img src={candle} alt=""/>
                                            <p>
                                            Свеча с ароматом приходящего Нового года
                                            </p>
                                        </li>
                                        <li onClick={() => setOptional('Бутылочка игристого')}>
                                            <img src={champagne} alt=""/>
                                            <input type="radio" id="champagne" name="optional" defaultChecked/>
                                            <label htmlFor="champagne" >
                                            Бутылочка вина (опционально) 
                                            </label>
                                        </li>
                                        <li onClick={() => setOptional('Набор для какао')}>
                                            <img src={hotChocolate} alt=""/>
                                            <input type="radio" id="hot-chocolate" name="optional"/>
                                            <label htmlFor="hot-chocolate" >
                                            Набор для какао (опционально) 
                                            </label>
                                        </li>
                                        <li>
                                            <img src={light} alt=""/>
                                            <p>
                                            Сияющая гирлянда (с&nbsp;батарейками)
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            <div className="block__bottom">
                                <div className="block__price">
                                    <div className="old">2000 ₽</div>
                                    <div className="new">1600 ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>}
                {activeTab === 1 && <React.Fragment>
                    <div className="variants__main--block block">
                        <div className="slider">
                            <div className="slide">
                                <img src={BoxXlImg} alt=""/>
                            </div>
                            <div className="slider__dots">
                                <span></span>
                                <span></span>
                                <span className="active"></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="block__wrapper">
                            <div className="block__tabs">
                                { ["Описание:", "Состав:"].map((item, index) => (
                                    <div
                                    key={item}
                                    className={cx('block__tab', {
                                        active: activeBlockTab === index && 'active'
                                    })}
                                    onClick={() => onSelectedBlockTab(index)}
                                    >{item}</div>
                                ))}
                            </div>
                            {
                                isDesc ? <div className="block__desc">
                                    <p>
                                        Коробочка XL - большой подарочный набор для самых любимых. В ней есть все для создания праздника вокруг. Мы используем деревянные коробочки, которые отлично подойдут для хранения или в качестве декора. Каждая коробочка дополнена новогодними леденцами, еловой веточкой и другими украшениями.
                                    </p>
                                    <div className="block__desc--add">
                                    Вы также можете скорректировать состав коробочки, добавив в нее дополнительные компоненты или именное поздравление 
в виде открытки.
                                    </div>
                                </div> : 
                                <div className="block__include">
                                    <ul>
                                        <li>
                                            <img src={honey} alt=""/>
                                            <p>
                                            Набор домашней карамели 2х0,1л (соленая каремелька + с&nbsp;апельсином)
                                            </p>
                                        </li>
                                        <li>
                                            <img src={cup} alt=""/>
                                            <p>
                                            Кружечка в теплом свитере
                                            </p>
                                        </li>
                                        <li>
                                            <img src={candle} alt=""/>
                                            <p>
                                            Свеча с ароматом приходящего Нового года
                                            </p>
                                        </li>
                                        <li>
                                            <img src={light} alt=""/>
                                            <p>
                                            Сияющая гирлянда (с&nbsp;батарейками)
                                            </p>
                                        </li>
                                        <li>
                                            <img src={ginderbread} alt=""/>
                                            <p>
                                            Набор имбирных пряников ручной работы 4 шт.
                                            </p>
                                        </li>
                                        <li>
                                            <img src={scarf} alt=""/>
                                            <p>
                                            Мягкий плед
                                            </p>
                                        </li>
                                        <li>
                                            <img src={book} alt=""/>
                                            <p>
                                            Книга рождественских историй
                                            </p>
                                        </li>
                                        <li>
                                            <img src={diary} alt=""/>
                                            <p>
                                            Ежедневник для планов на 2021 год
                                            </p>
                                        </li>
                                        <li>
                                            <img src={brezel} alt=""/>
                                            <p>
                                            Мини-брецели в пакетике
                                            </p>
                                        </li>
                                        <li onClick={() => setOptional('Бутылочка игристого')}>
                                            <img src={champagne} alt=""/>
                                            <input type="radio" id="champagne" name="optional" defaultChecked/>
                                            <label htmlFor="champagne" >
                                            Большая бутылочка игристого (опционально) 
                                            </label>
                                        </li>
                                        <li onClick={() => setOptional('Набор для какао')}>
                                            <img src={hotChocolate} alt=""/>
                                            <input type="radio" id="hot-chocolate" name="optional"/>
                                            <label htmlFor="hot-chocolate" >
                                            Набор для какао (опционально) 
                                            </label>
                                        </li>
                                        <li onClick={() => setOptional('Набор для глинтвейна')}>
                                            <img src={hotChocolate} alt=""/>
                                            <input type="radio" id="glintwine" name="optional"/>
                                            <label htmlFor="glintwine" >
                                            Набор для глинтвейна (опционально) 
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            }
                            <div className="block__bottom">
                                <div className="block__price">
                                    <div className="old">3500 ₽</div>
                                    <div className="new">2950 ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>}
                <div
                    className="block__buy"
                    onClick={openOrderModal}>Купить</div>
                {openOrder && <Order optional={optional} ref={orderModal} closeOrderModal={openOrderModal} />}
            </div>
        </section>
        </>
    )
}

export default Variants;
