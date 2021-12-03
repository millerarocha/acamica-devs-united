import React from 'react';
import './Button.scss';

const Button = ({
    icon,
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
            {icon?
                <img src={icon} alt="icon" className='btn__icon'/>
                :""
            }
        </button>
    )
}

export default Button;
