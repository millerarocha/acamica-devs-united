import {useState} from 'react';
import './User.scss';

import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';
import UserPicture from '../../components/UserPicture/UserPicture';
import TabButton from '../../components/TabButton/TabButton';

import logoutIcon from '../../assets/images/logout.svg'
import backIcon from '../../assets/images/pixelarrow.svg'
import { tabs } from '../../utils/tabs';

const User = ({
    userName='USERNAME'
}) => {
    const [tabsList,setTabsList] = useState(tabs);

    const updateTabChecked = (value) =>{
        const elementIndex = tabsList.findIndex(element => element.name === value);
        let newArray = [...tabsList];        
        newArray.forEach(element=>element.checked = false);
        newArray[elementIndex] = {...newArray[elementIndex], checked: true}
        setTabsList(newArray);
    }

    return (
        <div className='user'>
            <header className="user-header">
                <div className="user-header__info">
                    <IconButton
                        icon={backIcon}
                    />   
                    <p className="user-header__info-text">{userName}</p>
                </div>
                <Button
                    isRed={true}
                    text='LOGOUT'
                    icon={logoutIcon}
                />
            </header>
            <div className="user__container">
                <UserPicture/>
                <p className="user__container-text">USERNAME</p>
            </div>
            <div className="user__tabs">
                {(tabsList||[]).map((tab)=>{
                    return <TabButton
                                text={tab.name}
                                isSelected={tab.checked}
                                onClick={()=>{updateTabChecked(tab.name)}}
                            />
                })}
            </div>
        </div>
    )
}

export default User;
