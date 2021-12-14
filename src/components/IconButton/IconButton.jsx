import React from 'react';
import './IconButton.scss';

const IconButton = ({
    icon,
    isSmall=false
}) => {
    return (
        <>
            <img 
                src={icon} 
                alt="icon"
                className={`icon-btn ${isSmall?'icon-btn--small':''}`}
            />
        </>
    )
}

export default IconButton;
