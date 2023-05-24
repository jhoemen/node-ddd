const { v4: uuidv4 } = require('uuid');

export class UniqueEntityID {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? uuidv4()
  }
}