import { Produto } from '../../../domain/entities/produto'
import { PedidoRepository } from '../../repositories/pedidoRepository'
import { ProdutoRepository } from '../../repositories/produtoRepository'
import { Pedido } from '../../../domain/entities/pedido'
import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { ClienteRepository } from '../../repositories/clienteRepository'

interface AdicionarProdutoCarrinhoUseCaseRequest {
  clienteId: UniqueEntityID
  produto: Produto[]
}

export class AdicionarProdutoCarrinho {
  constructor(
    private pedidoRepository: PedidoRepository, 
    private produtoRepository: ProdutoRepository,
    private clienteRepository: ClienteRepository
    ) {}

  async execute({clienteId, produto}: AdicionarProdutoCarrinhoUseCaseRequest): Promise<void> {
    const hasProduto = await this.produtoRepository.findById(produto[0].id);
    const hasCliente = await this.clienteRepository.findById(clienteId);
    const cartPendantId = await this.pedidoRepository.getCartPendant(clienteId);

    if (!hasProduto) {
      throw new Error('Produto não localizado.')
    }

    if (!hasCliente) {
        throw new Error('Cliente não localizado.')
    }

    const situacao = 'Pendente'
    
    if (cartPendantId) {
        const pedido = await this.pedidoRepository.addProductCart(cartPendantId, produto)
    } else {
        const pedido = Pedido.create({
            clienteId,
            produto,
            situacao
        }, cartPendantId)
      
        await this.pedidoRepository.create(pedido)
    }
  }
}