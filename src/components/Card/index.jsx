import Image from 'next/image'
import style from './card.module.css'


const Card = produto => {
  return (
    <div className={style.card}>
      <figure>
        <Image className={style.cardImage} src={produto.imagem} alt={produto.nome} title={produto.nome}/>
      </figure>
      <div className={style.cardInformacoes}>
        <div>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <p>{produto.descricao}</p>
        </div>
        <div>
          <span>
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(produto.preco)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
