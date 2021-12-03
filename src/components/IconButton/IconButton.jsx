import React from 'react';
import './IconButton.scss';

import image from '../../assets/images/leftarrow.svg';

const IconButton = ({
    icon,
    
}) => {
    return (
        <>
            <img 
                src={image} 
                alt="icon"
                className='icon-btn'
            />
        </>
    )
}

export default IconButton;
