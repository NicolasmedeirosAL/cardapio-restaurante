import { produtos } from '@/data/data-produtos.js'

export const buscarProduto = textoDiditado => {
  return produtos.filter(
    produto =>
      produto.nome.toLowerCase().includes(textoDiditado.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(textoDiditado.toLowerCase())
  )
}

export const filtrarProduto = categoria => {
  return produtos.filter(produto => produto.categoria === categoria)
}

export const produtosEntrada = filtrarProduto('Entradas')
