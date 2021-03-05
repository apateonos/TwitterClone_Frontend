import React from 'react';

interface props {
  onChange: Function;
  onSubmit: Function;
  userEmail: string,
  password: string,
  checkPassword: string,
  userName: string,
  profile: string,
  errorMessage: string
}

export default ({onChange, onSubmit, userEmail, password, checkPassword, userName, profile, errorMessage}: props) => {
  return (
    <>
      <form onSubmit={(e)=>onSubmit(e)}  name='createAccount'>
        <input onChange={(e)=>onChange(e)} name='userEmail' value={userEmail} placeholder='email...'/>
        <input onChange={(e)=>onChange(e)} name='userName' value={userName} placeholder='name...'/>
        <input onChange={(e)=>onChange(e)} name='password' value={password} placeholder='password...'/>
        <input onChange={(e)=>onChange(e)} name='checkPassword' value={checkPassword} placeholder='check password again...'/>
        <input onChange={(e)=>onChange(e)} name='profile' value={profile} placeholder='profile...'/>
        <button type='submit'>Create Account</button>
      </form>

      <form onSubmit={(e)=>onSubmit(e)} name='loginAccount'>
        <input onChange={(e)=>onChange(e)} name='userEmail' value={userEmail} placeholder='email...'/>
        <input onChange={(e)=>onChange(e)} name='password' value={password} placeholder='password...'/>
        <button type='submit'>login</button>
      </form>
      <div>{errorMessage}</div>
    </>
  )
}