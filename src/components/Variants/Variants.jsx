import React, {useState} from 'react';
import cx from 'classnames';

import BoxInfo from '../BoxInfo';

function Variants() {

    const boxes = [
        {
            "name": "Коробочка S",
            "composition": [
                "Термокружка",
                "волшебная печенька с предсказанием",
                "мешочек воздушных безе",
                "свеча  с ароматом приходящего нового года",
                "мягкий талисма года – бычок"
            ],
            "description": "Волшебная коробочка от ДАРИ подарит Вашим близким незабываемые эмоции на любой праздник. В набор S входят самые вкусные и атмосферные составляющие наступающего праздника.",
            "additional": "Вы также можете скорректировать состав коробочки, добавив в нее дополнительные компоненты или именное поздравление в виде открытки.",
            "salePrice": 1000,
            "price": 1500
        },
        {
            "name": "Коробочка XL",
            "composition": [
                "сияющая гирлянда",
                "домашняя карамель 3х вкусов (классика, соленая, апельсин)",
                "имбирная печенька с предсказанием",
                "мягкий плед",
                "рождественская книга или ежедневник на 2021 год",
                "кружка в теплом свитере",
                "мини-брецели"
            ],
            "description": "Невероятная коробочка большого размера для самых любимых и близких. Никто не останется равнодушным! Дари подарит Вашим друзьям настоящий праздник.",
            "additional": "Вы также можете скорректировать состав коробочки, добавив в нее дополнительные компоненты или именное поздравление в виде открытки.",
            "salePrice": 3000,
            "price": 4000
        }
    ];

    const [activeBox, setActiveBox] = useState(boxes[0]);
    const [activeTab, setActiveTab] = useState(0);

    const onSelectedTab = index => {
        setActiveTab(index);
    }

    return (
        <div className="variants section">
            <div className="title">ВАРИАНТЫ КОРОБОЧЕК</div>
            <div className="container">
                <div className="variants__main">
                    <div className="variants__tabs">
                        {
                            boxes.map((item, index) => (
                                <div className={cx('variants__tabs--tab', {
                                    active: activeTab === index && 'active'
                                })} onClick={() => {
                                    onSelectedTab(index);
                                    setActiveBox(item);
                                }}>
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                    <BoxInfo info={activeBox} />
                </div>
            </div>
        </div>
    )
}

export default Variants;
