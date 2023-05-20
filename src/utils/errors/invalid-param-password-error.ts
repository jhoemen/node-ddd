export = class InvalidParamPasswordError extends Error {
    constructor(paramName: string) {
        super(`Parâmetro senha inválido: ${paramName}`)
        this.name = 'InvalidParamPasswordError'
    }
}
