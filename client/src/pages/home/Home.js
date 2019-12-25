import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import Container from 'components/container/Container'
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AuthContext from 'context/AuthContext'
import { getAll } from 'repos/users'

const useStyles = makeStyles({
  card: {
    marginTop: '.5em',
    width: '60%'
  }
})

const Home = props => {
  const history = useHistory()
  const { userEmail, logout } = useContext(AuthContext)
  const [users, setUsers] = useState([])

  const styles = useStyles()

  useEffect(() => {
    if (userEmail) {
      getAll(userEmail)
        .then(res => {
          setUsers(res.data)
        })
        .catch(err => {
          const { status } = err.response
          if (status === 401 || status === 404) {
            logout()
          }
        })
    }
  }, [userEmail, history, logout])


  return (
    <Container>
      <Typography variant="h4">This is a Protected page, {userEmail}</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Users info:
      </Typography>
      {users && users.map(user => {
        const { name, email, lastLoggedIn } = user
        return (
          <Card key={user._id} className={styles.card}>
            <CardContent>

              <Typography variant="body1" gutterBottom>
                Name: {name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: {email}
              </Typography>
              {lastLoggedIn &&
                <Typography variant="body1" gutterBottom>
                  Last Logged in:
                  {moment(lastLoggedIn).format("MMMM Do YYYY, h:mm:ss a")}
                </Typography>
              }
            </CardContent>
          </Card>
        )
      })
      }
    </Container>
  )
}

export default Home;