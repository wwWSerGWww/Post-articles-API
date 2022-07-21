// Instruments
import { ValidationError } from '../index.js'

export const getPassword = () => {
  const { PASSWORD } = process.env

  if (!PASSWORD) {
    throw new ValidationError(
      'Environment variable PASSWORD should be specified',
      400
    )
  }

  const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/.test(PASSWORD)

  if (!isValid) {
    throw new ValidationError(
      'Environment variable PASSWORD should have a minimum eight characters, at least one letter, one number and one special character',
      400
    )
  }

  return PASSWORD
}