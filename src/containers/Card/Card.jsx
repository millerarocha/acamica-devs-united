import React from 'react';
import './Card.scss';

import LikeButton from '../../components/LikeButton/LikeButton';
import IconButton from '../../components/IconButton/IconButton';
import UserPicture from '../../components/UserPicture/UserPicture';

import trashIcon from '../../assets/images/trash.svg';

const Card = () => {
    return (
        <div className='card'>
            <div className="card__user">
                <UserPicture
                    isBig={false}
                    isSmall={true}
                />
            </div>
            <div className="card__container">
                <div className="card__header">
                    <div className="card__header-username">
                        <h3 className="card__header-title">USERNAME</h3>   
                        <p className="card__header-date"> - 5 Jun.</p>
                    </div>
                    <IconButton
                        icon={trashIcon}
                        isSmall={true}
                    />
                </div>
                <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur pariatur inventore tempore quis vero sunt omnis repudiandae, itaque consectetur voluptatibus repellendus nobis deleniti quasi fuga dolorum maxime. Accusantium, cumque?</p>
                <LikeButton/>
            </div>
            
        </div>
    )
}

export default Card;
