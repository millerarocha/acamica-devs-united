import React from 'react';

import './ColorPicker.scss';

import ColorButton from '../../components/ColorButton/ColorButton';

import {colors} from '../../utils/colors';

const ColorPicker = ({
    title='Select your favorite color'
}) => {
    return (
        <div className='color-picker'>
            <h3 className="color-picker__title">{title}</h3>
            <div className="color-picker__container">
                {(colors || []).map(color=>
                    <ColorButton
                        color={color.name}
                        selected={color.checked}
                    />    
                )}
                
            </div>
        </div>
    )
}

export default ColorPicker;
