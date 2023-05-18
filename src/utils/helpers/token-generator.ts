import jwt from 'jsonwebtoken'
import MissingParamError from '../errors/missing-param-error'

export class TokenGenerator<T> {
  protected readonly secret: string

  constructor(secret: string) {
    this.secret = secret
  }

  async generate (id) {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    if (!id) {
      throw new MissingParamError('id')
    }

    return jwt.sign({ _id: id }, this.secret, {  expiresIn : '1h'  })
  }
}
