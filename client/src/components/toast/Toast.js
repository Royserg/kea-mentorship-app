import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import { amber, green } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(10)
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const Toast = forwardRef((props, ref) => {
  const classes = useStyles()
  const [toastArgs, setToastArgs] = useState(false)

  useImperativeHandle(ref, () => ({
    show (message, type) {
      setToastArgs({ open: true, message, type })
    }
  }))

  useEffect(() => {
    let timer
    if (toastArgs.open) {
      timer = setTimeout(() => {
        setToastArgs(toastArgs => ({ ...toastArgs, open: false }))
      }, 2000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [toastArgs.open])

  const handleClose = (event, reason) => {}

  return (
    <Snackbar
      className={classes.root}
      open={toastArgs.open}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes[toastArgs.type]}
        aria-describedby='feedback-snackbar'
        message={
          <span className={classes.messageContainer}>{toastArgs.message}</span>
        }
      />
    </Snackbar>
  )
})

export default Toast
