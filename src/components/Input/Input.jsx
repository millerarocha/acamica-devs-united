import React from 'react';
import './Input.scss';

const Input = ({
    labelText='Label',
    placeholder='Type your placeholder'
}) => {
    return (
        <div className='input__wrapper'>
            <label 
                for="" 
                className="input__label"
                hidden
            >
                {labelText}
            </label> 
            <input 
                id="" 
                type="text" 
                className="input"
                placeholder={placeholder}
            />          
        </div>
    )
}

export default Input;
