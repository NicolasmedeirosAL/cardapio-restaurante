import { useState } from 'react'
import Image from 'next/image'
import { buscarProduto, filtrarProduto, produtosEntrada } from '@/services'
import style from './style.module.css'

import Banner from '../../assets/bn.png'
import Categorias from '@/components/Categorias'
import CampoDeBusca from '@/components/CampoDeBusca'
import Card from '@/components/Card'

const Home = () => {
  const [dadosfiltrados, setDadosFiltrados] = useState(produtosEntrada)
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState('')

  const [botaoClicado, setBotaoClicado] = useState('Entradas')

  const handleBusca = textoDigitado => {
    setTextoBuscaDigitado(textoDigitado)
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado))
    setBotaoClicado('')
  }

  const handleFiltro = categoria => {
    setTextoBuscaDigitado('')
    setDadosFiltrados(filtrarProduto(categoria))
    setBotaoClicado(categoria)
  }

  return (
    <>
      <header className={style.banner}>
        <Image
          className={style.imgBanner}
          src={Banner}
          alt="banner"
          quality={100}
        />
        <div className={style.containerTitulo}>
          <h1>Restaurant</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados
          </p>
        </div>
      </header>
      <main>
        <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />
        <CampoDeBusca handleBusca={handleBusca} textoBuscaDigitado={textoBuscaDigitado}/>

        <section className={`${style.cardSecao} limitar-secao`}>
          <div>
            <h2>Cardapio</h2>
          </div>
          <div className={style.cardContainer}>
            {dadosfiltrados.map(produto => (
              <Card
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                descricao={produto.descricao}
                imagem={produto.imagem}
                preco={produto.preco}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
