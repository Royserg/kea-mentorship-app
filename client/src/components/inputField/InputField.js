import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  field: {
    margin: theme.spacing(1),
    width: 400
  }
}))

const InputField = ({ label, type, value, onChange }) => {
  const styles = useStyles()

  return (
    <TextField
      className={styles.field}
      label={label}
      type={type ? type : ''}
      variant='outlined'
      value={value}
      onChange={onChange}
      required
    />
  )
}

export default InputField
