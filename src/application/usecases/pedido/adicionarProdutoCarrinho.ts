import { Produto } from '../../../domain/entities/produto'
import { PedidoRepository } from '../../repositories/pedidoRepository'
import { ProdutoRepository } from '../../repositories/produtoRepository'
import { Pedido } from '../../../domain/entities/pedido'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClientesRepository } from '../../repositories/clientesRepository'

interface AdicionarProdutoCarrinhoUseCaseRequest {
  clienteId: UniqueEntityID
  produto: Produto
}

interface AdicionarProdutoCarrinhoUseCaseResponse {
  pedido: Pedido
}

export class AdicionarProdutoCarrinho {
  constructor(
    private pedidoRepository: PedidoRepository, 
    private produtoRepository: ProdutoRepository,
    private clienteRepository: ClientesRepository
    ) {}

  async execute({clienteId, produto}: AdicionarProdutoCarrinhoUseCaseRequest): Promise<AdicionarProdutoCarrinhoUseCaseResponse> {
    const hasProduto = await this.produtoRepository.findById(produto.id);
    const hasCliente = await this.clienteRepository.findById(clienteId);
    
    if (!hasProduto) {
      throw new Error('Produto não localizado.')
    }

    if (!hasCliente) {
        throw new Error('Cliente não localizado.')
      }

    const situacao = 'Pendente'
    
    const pedido = Pedido.create({
      clienteId,
      produto,
      situacao
    })

    await this.pedidoRepository.adicionarProdutoCarrinho(pedido)

    return {
        pedido,
    }
  }
}