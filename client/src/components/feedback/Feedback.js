import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar'
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(10)
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const Feedback = ({ message, open, type }) => {

  const classes = useStyles()

  const handleClose = (event, reason) => { }

  return (
    <Snackbar
      className={classes.root}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <SnackbarContent
        className={classes[type]}
        aria-describedby="feedback-snackbar"
        message={
          <span className={classes.messageContainer}>
            {message}
          </span>
        }
      />
    </Snackbar>
  )
}

export default Feedback;