import React from 'react';
import './TabButton.scss';

const TabButton = ({
    text='TabButton',
    isSelected=true,
    onClick
}) => {
    return (
        <button 
            className={`tab-btn ${isSelected?'tab-btn--selected':''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default TabButton;
