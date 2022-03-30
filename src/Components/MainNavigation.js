import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Link to='/' >
        <div className={classes.logo} >
          Firebase Auth
        </div>
      </Link>
      <nav>
        <ul className={classes.headerUl} >
          <li className={classes.headerLi}>
            <Link to='/auth' style={{
              color: 'white', textDecoration: 'none'
            }} >Login</Link>
          </li>
          <li className={classes.headerLi} >
            <Link to='/profile' style={{
              color: 'white', textDecoration: 'none'
            }} >Profile</Link>
          </li>
          <li>
            <button className={classes.button} >Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: '5rem',
    backgroundColor: '#38015c',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10%',
  },
  logo: {
    fontFamily: 'Lato',
    fontSize: '2rem',
    color: 'white',
  },
  headerUl: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'baseline'
  },
  headerLi: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    margin: '0 1rem'
  },

  button: {
    font: 'inherit',
    color: 'whitesmoke',
    backgroundColor: 'transparent',
    border: '1px solid white',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '0.5rem 1.5rem',
    '&hover': {
      color: 'red'
    }
  }
})

export default MainNavigation