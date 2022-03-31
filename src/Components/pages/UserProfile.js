import React from 'react'

import ProfileForm from '../Profile/ProfileForm'
import classes from './UserProfile.module.css'

const UserProfile = () => {
  return (
    <section className={classes.profile} >
      <h1>User Profile</h1>
      <ProfileForm />
    </section>
  )
}

export default UserProfile