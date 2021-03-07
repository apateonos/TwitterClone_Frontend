import React from 'react';

interface props {
  onChange: Function,
  onSubmit: Function,
  onClick: Function,
  userEmail: string,
  password: string,
  checkPassword: string,
  userName: string,
  profile: string,
  errorMessage: string,
  isModal: boolean,
}

export default ({onChange, onSubmit, onClick, userEmail, password, checkPassword, userName, profile, errorMessage, isModal}: props) => {
  return (
    <>
      {isModal && <form onSubmit={(e)=>onSubmit(e)}  name='createAccount'>
        <div> Create Account Modal </div>
        <input onChange={(e)=>onChange(e)} name='userEmail' value={userEmail} placeholder='email...'/>
        <input onChange={(e)=>onChange(e)} name='userName' value={userName} placeholder='name...'/>
        <input onChange={(e)=>onChange(e)} name='password' value={password} placeholder='password...'/>
        <input onChange={(e)=>onChange(e)} name='checkPassword' value={checkPassword} placeholder='check password again...'/>
        <input onChange={(e)=>onChange(e)} name='profile' value={profile} placeholder='profile...'/>
        <button type='submit'>Create Account</button>
      </form>}
      <div> Login Page </div>
      <form onSubmit={(e)=>onSubmit(e)} name='loginAccount'>
        <input onChange={(e)=>onChange(e)} name='userEmail' value={userEmail} placeholder='email...'/>
        <input onChange={(e)=>onChange(e)} name='password' value={password} placeholder='password...'/>
        <button type='submit'>login</button>
      </form>
      <button onClick={(e)=>onClick(e)} name='modal'>Create Account</button>
      <div>msg: {errorMessage}</div>
    </>
  )
}