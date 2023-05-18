import validator from 'validator'
import MissingParamError from '../errors/missing-param-error'

export class EmailValidator {
  isValid (email) {
    if (!email) {
      throw new MissingParamError('email')
    }

    return validator.isEmail(email)
  }
}