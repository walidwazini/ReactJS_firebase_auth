import React, { Fragment, useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import MainNavigation from './Components/MainNavigation'
import AuthPage from './Components/pages/AuthPage'
import HomePage from './Components/pages/HomePage'
import UserProfile from './Components/pages/UserProfile'
import AuthContext from './Contexts/auth-context'

const App = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {!isLoggedIn && (
            <Route path='/auth' element={<AuthPage />} />
          )}
          <Route
            path='/profile'
            element={isLoggedIn ? <UserProfile /> : <Navigate to='/' replace />}
          />
          <Route />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App