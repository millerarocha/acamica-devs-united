import { useState } from 'react';

import './App.scss';

import LikeButton from './components/LikeButton/LikeButton';
import Button from './components/Button/Button';

function App() {
  const [like,setLike] = useState(false);

  const onLike = ()=>{
    setLike(!like);
  }
  return (
    <div className="app">
      <h1>Hola mundo!</h1>
      <LikeButton
        isLiked={like}
        count={120}
        onClick={()=>onLike()}
      />
      <Button/>
    </div>
  );
}

export default App;
