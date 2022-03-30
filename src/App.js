import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainNavigation from './Components/MainNavigation'
import AuthPage from './Components/pages/AuthPage'
import HomePage from './Components/pages/HomePage'
import UserProfile from './Components/pages/UserProfile'

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App