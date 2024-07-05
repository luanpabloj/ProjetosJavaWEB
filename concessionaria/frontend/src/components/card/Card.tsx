import "./Card.css"
import {Link} from 'react-router-dom'


interface CardsProps{
  id: number,
  imagem: string,
  modelo: string,
  marca: string,
  ano: number,
  quilometragem: number,
  valor: number
}

export function Card({id, imagem, modelo, marca, ano, quilometragem, valor} : CardsProps){
      return(
        <div className="card">
          <img src={imagem}/>
          <h2><b>Modelo: </b>{modelo}</h2>
          <p><b>Marca: </b>{marca}</p>
          <p><b>Ano: </b>{ano}</p>
          <p><b>Quilometragem: </b>{quilometragem}</p>
          <p><b>Valor: R$</b>{valor}</p>
          <button><Link to={`/PaginaDetalhes/${id}`} className="details-link">Ver detalhes</Link>
          </button>
          </div>
      )
}