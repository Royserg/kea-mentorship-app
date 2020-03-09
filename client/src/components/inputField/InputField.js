import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  field: {
    margin: theme.spacing(1),
    width: 400
  }
}))

// https://material-ui.com/api/text-field/
const InputField = ({ label, name, type = 'text', value, onChange, error }) => {
  const styles = useStyles()

  return (
    <TextField
      className={styles.field}
      name={name}
      label={label}
      type={type}
      variant='outlined'
      value={value}
      onChange={onChange}
      error={error ? true : false}
      helperText={error}
      required
    />
  )
}

export default InputField
