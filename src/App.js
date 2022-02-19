import React, { useState } from 'react';
import './scss/App.scss'
import background from './img/background.png'
import LoginPage from './components/loginPage.js';


function App() {
  const [state , setState] = useState(false)
  const loginPage = () =>{
    setState(!state)
  }
  return (
    <div className="App">
        <div className='wrapper'>
            <img className='wrapper__img' src={background}/>
            <h4 className='title'>Welcome To Login Page</h4>
            <div className='login__btn'>
              <button onClick={loginPage}>Login</button>
            </div>
            {!state ? null : <div className='login__page'>
              <LoginPage/>
            </div>}
          
        
        </div>

    </div>
  );
}

export default App;
