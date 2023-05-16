import { Cliente } from "../../domain/entities/cliente";
import { IServiceCliente } from "../interfaceService/iServiceCliente";

export class ServiceCliente implements IServiceCliente {
    findById(id: string): Promise<Cliente | null> {
        throw new Error("Method not implemented.");
    }
    create(cliente: Cliente): Promise<void> {
        throw new Error("Method not implemented.");
    }

}