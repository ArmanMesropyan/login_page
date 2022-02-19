import React  from 'react'


const  SingUp = ({usernameHandler ,username , blurHandler ,usernameError ,usernameDirty,
   passwordHandler , password ,passwordDirty  , passwordError ,formValide , email ,
   emailDirty ,emailError , emailHandler , newStateHandler})=> {
    
      const obj = newStateHandler()
    const handleSingUpSubmit = (e) =>{
        e.preventDefault()
        alert( 'you have successfully registered ' + '\n'
         + 'email: '  + obj.email + '\n'
         +  'username: ' + obj.username + '\n'
         + 'password: ' + obj.password);
    }
  return (
    <form className='form_sing' onSubmit={handleSingUpSubmit}>   
            <h5>Sing Up Page</h5> 
            <div className='filed'>
               <label>Email</label>
               <input className='singUpEmail' onChange={emailHandler } value={email} 
               onBlur={e => blurHandler(e)}  name='email' type={'email'} placeholder='Your Email'/>
               {(emailDirty && emailError) && <div style={{color:'red' , margin:'5px'}}>{emailError}</div>}
            </div>  
            <div className='filed'>
               <label>Username</label>
               <input className='singUpLogin' onChange={usernameHandler} value={username}
                onBlur={e => blurHandler(e)}  name='username' type={'text'} placeholder='Your Login'/>
               {(usernameDirty && usernameError) && <div style={{color:'red' , margin:'5px'}}>{usernameError}</div>}
            </div>  
            <div className='filed'>
               <label>Password</label>
               <input className='singUpPass'  onChange={passwordHandler} value={password} 
               onBlur={e => blurHandler(e)} name='password' type={'password'} placeholder='Your Password'/>
               {(passwordDirty && passwordError) && <div style={{color:'red', margin:'5px'}}>{passwordError}</div>}
            </div>  
         
            <button disabled={!formValide} type='submit' className='singUpBtn'>SingUp</button>
            
    </form>
  )
}
export default SingUp