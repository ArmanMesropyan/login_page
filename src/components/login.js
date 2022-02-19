import React from 'react'



const  Login = ({usernameHandler ,username , blurHandler ,usernameError ,usernameDirty,
  passwordHandler , password ,passwordDirty  , passwordError ,formValide , newStateHandler})=> {

    const obj = newStateHandler()
    const handleLoginSubmit = (e) =>{
        e.preventDefault()
        alert( 'you have successfully logined ' + '\n'
        +  'username: ' + obj.username + '\n'
        + 'password: ' + obj.password );
    }


  return (
    <form className='form_log ' onSubmit={handleLoginSubmit}>
        <h5>Login Page</h5>    
        
        <div className='filed'>
        
        <label>Username</label>
        <input className='loginText' onChange={usernameHandler} value={username} 
        onBlur={e => blurHandler(e)}  name='username' type={'text'} placeholder='Your Login'/>
        {(usernameDirty && usernameError) && <div style={{color:'red', margin:'5px' , backgroundColor:'rgba(235,76,66,0.5)' , padding:'5px'}}>{usernameError}</div>}
        </div>   
        
        <div className='filed'>
        
        <label>Password</label>
        <input className='loginPass' onChange={passwordHandler} value={password} 
        onBlur={e => blurHandler(e)} name='password'  type={'password'} placeholder='Your Password'/>
        {(passwordDirty && passwordError) && <div style={{color:'red', margin:'5px' , backgroundColor:'rgba(235,76,66,0.5)' , padding:'5px'}}>{passwordError}</div>}
        </div>     
       
     
        <button disabled={!formValide} type='submit' className='loginBtn' >Login</button>
    </form> 
  )
}
export default Login