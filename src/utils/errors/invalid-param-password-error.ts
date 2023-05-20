export = class InvalidParamPasswordError extends Error {
    constructor() {
        super(`Parâmetro senha inválido`)
        this.name = 'InvalidParamPasswordError'
    }
}
