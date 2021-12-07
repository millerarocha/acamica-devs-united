import React from 'react';
import './IconButton.scss';

import image from '../../assets/images/leftarrow.svg';

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
