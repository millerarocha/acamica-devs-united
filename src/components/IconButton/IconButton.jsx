import React from 'react';
import './IconButton.scss';

import image from '../../assets/images/leftarrow.svg';

const IconButton = ({
    icon,
    text=''
}) => {
    return (
        <>
            <img 
                src={image} 
                alt="icon"
                className='icon-btn'
            />
            <p className="icon-btn__text">
                {text}
            </p>
        </>
    )
}

export default IconButton;
