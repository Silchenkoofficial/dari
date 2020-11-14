import React from 'react';

function BoxInfo({info}) {
    return (
        <div className="variants__info">
            <div className="variant__info--left">
                <div className="variant__info--composition">
                    <div className="title">В составе:</div>
                    <ul>
                        {info.composition.map((link, index) => (
                            <li>{link}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="variant__info--center">
                <div className="variant__info--image"></div>
                <div className="variant__info--dots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="active"></span>
                </div>
            </div>
            <div className="variant__info--right">

            </div>
        </div>
    )
}

export default BoxInfo;
