import React, { Fragment, useContext, useRef } from 'react'

import classes from './ProfileForm.module.css'
import AuthContext from '../../Contexts/auth-context'
import { useNavigate } from 'react-router-dom'

const ProfileForm = () => {
  const navigate = useNavigate()
  const newPwInputRef = useRef()
  const API_KEY = ''
  const changePwUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`

  const { token } = useContext(AuthContext)

  const submitHandler = ev => {
    ev.preventDefault()

    const enteredNewPw = newPwInputRef.current.value

    fetch(changePwUrl, {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredNewPw,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assume always succeed
      navigate('/')
    })
  }

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler} >
        <div className={classes.control} >
          <label htmlFor='new-password' >New Password</label>
          <input
            type='password'
            id='new-password'
            ref={newPwInputRef}
            minLength='7'
          />
        </div>
        <div className={classes.action} >
          <button type='submit' >Change Password</button>
        </div>
      </form>
    </Fragment>
  )
}

export default ProfileForm