import React from 'react';
import './ColorButton.scss'

const ColorButton = ({
    selected=false,
    color='purple',
    onClick
}) => {
    return (
        <div
            className={`
                color-btn 
                ${selected?'color-btn--selected':''} 
                ${color?'color-btn--':''}${color}
            `}
            onClick={onClick}
        >
            
        </div>
    )
}

export default ColorButton;
