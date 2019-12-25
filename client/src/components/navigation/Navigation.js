import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { MenuList, MenuItem } from '@material-ui/core'

import AuthContext from 'context/AuthContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff',
    fontSize: '1.5rem',
    textDecoration: 'none'
  },
  menu: {
    display: 'flex',
  }
}))


const Navigation = props => {
  const { token } = useContext(AuthContext)
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to='/' className={classes.title}>
            MentorshipApp
          </NavLink>
          {token ?
            (
              <MenuItem component={NavLink} to='/logout'>
                Logout
              </MenuItem>
            )
            :
            (
              <MenuList className={classes.menu}>
                <MenuItem
                  component={NavLink}
                  to='/login'
                  selected={pathname === '/login'}
                >
                  Login
                </MenuItem>
                <MenuItem
                  component={NavLink}
                  to='/register'
                  selected={pathname === '/register'}
                >
                  Register
                </MenuItem>
              </MenuList>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation