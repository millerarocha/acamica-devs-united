import React from 'react';
import './Button.scss';

const Button = ({
    isRed=false,
    isFull=false,
    isPost=false,
    text='Button',
    onClick
}) => {
    return (
        <button 
            className={`btn
                        ${isFull?'btn--full':''}
                        ${isRed?'btn--red':''}
                        ${isPost?'btn--post':''}
                    `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;
