import Image from 'next/image'
import Lupa from '@/assets/icones/lupa.png'
import style from './style.module.css'

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }) => {
  return (
    <div className={`${style.campoDeBusca} limitar-secao`}>
      <Image className="imagem-busca" src={Lupa} width={30} />
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={event => handleBusca(event.target.value)}
        placeholder="Pesquise pelo seu prato favorito aqui"
      />
    </div>
  )
}

export default CampoDeBusca