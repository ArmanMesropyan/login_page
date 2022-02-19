import React, { useState , useEffect}  from 'react'
import '../scss/login.scss'
import SingUp from './singUp';
import Login from './login';

 const LoginPage = () => {
   const [singUp, setSingUp] =  useState(false)
   

// validate settings 
const [username , setUsername ] = useState('')
const [password , setPassword ] = useState('')
const [email , setEmail ] = useState('')
const [usernameDirty , setUsernameDirty ] = useState(false)
const [passwordDirty , setPasswordDirty ] = useState(false)
const [emailDirty , setEmailDirty ] = useState(false)
const [usernameError , setUsernameError ] = useState('Юзернейм не может быть пустым')
const [passwordError , setPasswordError ] = useState('Пароль не может быть пустым')
const [emailError , setEmailError ] = useState('Email не может быть пустым')
const [formValide , setFormValide] = useState(false)
const [newState  , setNewState] = useState('')


    
useEffect(()=>{
  if(usernameError || passwordError    ){
    setFormValide(false)
  }else{
    setFormValide(true)
  }

}, [usernameError , passwordError  ])


const blurHandler = (e) =>{
  switch (e.target.name){
    case 'username':
      setUsernameDirty(true)
      break
    case 'password' :
      setPasswordDirty(true)
      break  
    case 'email':
      setEmailDirty(true)
        break
  }
    
}

const newStateHandler = () => {
  return {...newState , username:username ,  password:password , email:email || null }
}



const usernameHandler = (e) =>{
setUsername(e.target.value)
if(e.target.value.length < 3 || e.target.value.length > 15){
  setUsernameError('Юзернейм не может быть меньше 3 или больше 15')
      if(!e.target.value) {
        setUsernameError(usernameError)}
}else{
  setUsernameError('')
}
}

const passwordHandler = (e) =>{
setPassword(e.target.value)
if(e.target.value.length < 3 || e.target.value.length > 8){
  setPasswordError('Пароль не может быть меньше 3 или больше 8')
    if(!e.target.value){
      setPasswordError(passwordError)
    }
}else{
  setPasswordError('')
}
}

const emailHandler = (e) =>{
  setEmail(e.target.value)
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!re.test((e.target.value).toLowerCase())){
      setEmailError('некоректный емайл')
      if(!e.target.value){
        setEmailError(emailError)
      }
    }else(
      setEmailError('')
    )

}

   const register = () =>{
      setSingUp(!singUp)
      }



  return (
    <div className='loginParent'>
      <div className='form__login'>
       
         {!singUp ?
         <div className='login_form'><Login  username={username} password={password} 
         usernameDirty={usernameDirty} passwordDirty={passwordDirty} 
         usernameError={usernameError} passwordError={passwordError} 
         formValide={formValide} blurHandler={blurHandler} 
         usernameHandler={usernameHandler} passwordHandler={passwordHandler}
         newStateHandler={newStateHandler}/></div> 
          :
         <div className='singUp_form'><SingUp username={username} password={password} 
         usernameDirty={usernameDirty} passwordDirty={passwordDirty} 
         usernameError={usernameError} passwordError={passwordError} 
         formValide={formValide}email={email} emailDirty={emailDirty} emailError={emailError}  blurHandler={blurHandler} 
         usernameHandler={usernameHandler} passwordHandler={passwordHandler} emailHandler={emailHandler}
         newStateHandler={newStateHandler}/></div>
         }
         
        
        <button className='btn__Register' onClick={register}>Register or Login</button>
      </div>
    </div>
  )
}

export default LoginPage
