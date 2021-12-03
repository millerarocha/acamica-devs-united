import React from 'react';
import './UserPicture.scss';

import photo from '../../assets/images/ornacia.png';

const UserPicture = ({
    picture,
    username='username',
    isSmall=false,
    isBig=true,
    onClick
}) => {
    return (
        <img 
            src={photo} 
            alt={`${username} profile picture`} 
            className={`user-picture ${isSmall?'user-picture--small':''} ${isBig?'user-picture--big':''}`}
            onClick={onClick}
        />
    )
}

export default UserPicture
