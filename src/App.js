import { useState } from 'react';

import './App.scss';

import LikeButton from './components/LikeButton/LikeButton';
import Button from './components/Button/Button';
import LoginButton from './components/LoginButton/LoginButton';
import ColorButton from './components/ColorButton/ColorButton';
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import UserPicture from './components/UserPicture/UserPicture';
import IconButton from './components/IconButton/IconButton';

function App() {
  const [like,setLike] = useState(false);

  const onLike = ()=>{
    setLike(!like);
  }

  const buttonTest = () =>{
    alert('Button Ok!');
  }
  return (
    <div className="app">
      <h1>Hola mundo!</h1>
      <LikeButton
        isLiked={like}
        count={120}
        onClick={()=>onLike()}
      />
      <Button
        onClick={buttonTest}
      />
      <LoginButton
        onClick={buttonTest}
      />
      <ColorButton
        onClick={buttonTest}
        selected={false}
        color='orange'
      />
      <Input/>
      <TextArea/>
      <UserPicture
        onClick={buttonTest}
      />
      <IconButton/>
    </div>
  );
}

export default App;
