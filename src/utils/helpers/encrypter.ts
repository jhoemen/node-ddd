import bcrypt from 'bcrypt'
import MissingParamError from '../errors/missing-param-error'

export class Encrypter {
  async compare (value: string, hash: string) {
    if (!value) {
      throw new MissingParamError('value')
    }
    if (!hash) {
      throw new MissingParamError('hash')
    }
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }

  async criptografar (value: string) {
    const salt = await bcrypt.genSalt(10);
    value = await bcrypt.hash(value, salt);

    return value
  }
}
