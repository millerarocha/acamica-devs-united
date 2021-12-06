import {useState} from 'react';

import './ColorPicker.scss';

import ColorButton from '../../components/ColorButton/ColorButton';

import {colors} from '../../utils/colors';

const ColorPicker = ({
    title='Select your favorite color'
}) => {

    const [colorsList,setColorsList] = useState(colors);

    const updateColorChecked = (value) =>{
        const elementIndex = colorsList.findIndex(element => element.name === value);
        let newArray = [...colorsList];        
        newArray.forEach(element=>element.checked = false);
        newArray[elementIndex] = {...newArray[elementIndex], checked: true}
        setColorsList(newArray);
    }

    return (
        <div className='color-picker'>
            <h3 className="color-picker__title">{title}</h3>
            <div className="color-picker__container">
                {(colorsList || []).map(color=>
                    <ColorButton
                        key={color.id}
                        color={color.name}
                        selected={color.checked}
                        onClick={()=>{updateColorChecked(color.name)}}
                    />    
                )}
                
            </div>
        </div>
    )
}

export default ColorPicker;
