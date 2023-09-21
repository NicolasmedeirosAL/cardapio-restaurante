import Image from 'next/image'
import style from './style.module.css'
import Entrada from '@/assets/icones/entrada.png'
import Bebida from '@/assets/icones/bebidas.png'
import Massa from '@/assets/icones/massa.png'
import Salada from '@/assets/icones/salada.png'
import Sobremesa from '@/assets/icones/sobremesa.png'
import Carne from '@/assets/icones/carne.png'

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section id="secao-categorias" className="limitar-secao">
      <div className={style.containerBotoes}>
        <button
          onClick={() => handleFiltro('Entradas')}
          className={
            botaoClicado === 'Entradas'
              ? `${style.acenderBtn}`
              : `${style.apagarBtn}`
          }
        >
          <Image className={style.iconesBtns} src={Entrada} quality={100} />
          Entradas
        </button>
        <button
          onClick={() => handleFiltro('Massas')}
          className={
            botaoClicado === 'Massas'
              ? `${style.acenderBtn}`
              : `${style.apagarBtn}`
          }
        >
          <Image className={style.iconesBtns} src={Massa} quality={100} />
          Massas
        </button>
        <button
          onClick={() => handleFiltro('Carnes')}
          className={
            botaoClicado === 'Carnes'
              ? `${style.acenderBtn}`
              : `${style.apagarBtn}`
          }
        >
          <Image className={style.iconesBtns} src={Carne} quality={100} />
          Carnes
        </button>
        <button
          onClick={() => handleFiltro('Bebidas')}
          className={
            botaoClicado === 'Bebidas'
              ? `${style.acenderBtn}`
              : `${style.apagarBtn}`
          }
        >
          <Image className={style.iconesBtns} src={Bebida} quality={100} />
          Bebidas
        </button>
        <button
          onClick={() => handleFiltro('Saladas')}
          className={
            botaoClicado === 'Saladas'
              ? `${style.acenderBtn}`
              : `${style.apagarBtn}`
          }
        >
          <Image className={style.iconesBtns} src={Salada} quality={100} />
          Saladas
        </button>
        <button
          onClick={() => handleFiltro('Sobremesas')}
          className={
            botaoClicado === 'Sobremesas'
              ? `${style.acenderBtn}`
              : `${style.apagarBtn}`
          }
        >
          <Image className={style.iconesBtns} src={Sobremesa} quality={100} />
          Sobremesas
        </button>
      </div>
    </section>
  )
}

export default Categorias
