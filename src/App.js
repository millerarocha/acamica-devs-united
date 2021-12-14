import { useEffect } from 'react';
import { firestore } from './firebase';

import './App.scss';

import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';

function App() {

  useEffect(()=>{
    firestore.collection('tweets')
    .get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        console.log(doc.data());
      })
    })
    console.log('llamar a firebase')
  },[]);

  return (
    <div className="app">
      <Main/>
    </div>
  );
}

export default App;
