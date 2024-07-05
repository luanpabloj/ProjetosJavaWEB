import React from 'react';
import { useParams } from 'react-router-dom';
import { useCarroDataDetalhes } from './hooks/useCarroDataDetalhes';
import { Detalhes } from './components/detalhes/Detalhes';

export function PaginaDetalhes() {
    const { id } = useParams<{ id: string }>();

    const carroId = parseInt(id, 10);

    const { data } = useCarroDataDetalhes(carroId);

    return (
        <div className="Cards">
            {data ? (
                <Detalhes
                    imagem={data.imagem}
                    modelo={data.modelo}
                    marca={data.marca}
                    ano={data.ano}
                    quilometragem={data.quilometragem}
                    valor={data.valor}
                    combustivel={data.combustivel}
                    transmissao={data.transmissao}
                    motor={data.motor}
                    cor={data.cor}
                    condicao={data.condicao}
                    arCondicionado={data.arCondicionado}
                    vidrosEletricos={data.vidrosEletricos}
                    portas={data.portas}
                    carroceria={data.carroceria}
                    tracao={data.tracao}
                />
            ) : (
                <div>Carro não encontrado</div>
            )}
        </div>
    );
}

export default PaginaDetalhes;
