import { ClientesRepository } from "../../../src/application/repositories/clientesRepository";
import { Cliente } from "../../../src/domain/entities/cliente";
const bcrypt = require('bcrypt')

export class InMemoryClienteRepository implements ClientesRepository {    
    public items: Cliente[] = []

    constructor(){
        let cliente = Cliente.create({
            nome: 'jonathan da silva pereira',
            cpf: '038.905.131-40',
            email: 'jhoemen@gmail.com',
            endereco: 'rua da escola, bairro dom aquino',
            password: '03890513140'
        })

        const salt = bcrypt.genSaltSync(10);
        cliente.password = bcrypt.hashSync(cliente.password, salt);

        this.items.push(cliente)
    }

    async findByCpf(cpf: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.cpf === cpf)

        if(!cliente) {
            return null
        }

        return cliente
    }

    async findByEmail(email: string): Promise<Cliente | null> {
        

        const cliente = this.items.find((cliente) => cliente.email === email)

        if(!cliente) {
            return null
        }

        return cliente
    }

    async findById(id: string): Promise<Cliente | null> {
        const cliente = this.items.find((cliente) => cliente.id.toString() === id)

        if(!cliente) {
            return null
        }

        return cliente
    }

    async create(cliente: Cliente) {
        this.items.push(cliente)
    }

}