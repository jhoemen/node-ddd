export = class MissingParamError extends Error {
    constructor(paramName: string) {
        super(`Parâmetro não localizado: ${paramName}`)
        this.name = 'MissingParamError'
    }
}
