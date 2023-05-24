import { UniqueEntityID } from '../core/entities/unique-entity-id'

export abstract class Entity<T> {
    protected readonly _id: UniqueEntityID
    public readonly props: T

    get id() {
        return this._id
    }

    constructor(props: T, id?: UniqueEntityID) {
        this._id = id || new UniqueEntityID()
        this.props = props
    }

    public equals(object?: Entity<T>): boolean {
        if (object === null || object === undefined) {
            return false
        }

        if (this === object) {
            return true
        }

        if (!(object instanceof Entity)) {
            return false
        }

        return this._id === object._id
    }
}
