import React from 'react';
import './Detalhes.css';

interface DetalhesProps {
  marca: string,
  modelo: string,
  ano: number,
  valor: number,
  quilometragem: number,
  combustivel: string,
  transmissao: string,
  motor: number,
  cor: string,
  condicao: string,
  imagem: string,
  arCondicionado: string,
  vidrosEletricos: string,
  portas: number,
  carroceria: string,
  tracao: string
}

export function Detalhes({ 
  marca, modelo, ano, valor, quilometragem, combustivel, transmissao,
  motor, cor, condicao, imagem, arCondicionado, vidrosEletricos, portas, carroceria, tracao 
}: DetalhesProps) {
  return (
    <div className="car-details">
      <div className="imagem">
        <img src={imagem} alt={`${marca} ${modelo}`} />
      </div>
        <div className="descricao">
        <h2>{marca} {modelo}</h2>
        <p>Ano: {ano}</p>
        <p>Valor: R${valor}</p>
        <p>Quilometragem: {quilometragem} km</p>
        <p>Combustível: {combustivel}</p>
        <p>Transmissão: {transmissao}</p>
        <p>Motor: {motor}</p>
        <p>Cor: {cor}</p>
        <p>Condição: {condicao}</p>
        <p>Ar Condicionado: {arCondicionado}</p>
        <p>Vidros Elétricos: {vidrosEletricos}</p>
        <p>Portas: {portas}</p>
        <p>Carroceria: {carroceria}</p>
        <p>Tração: {tracao}</p>
      </div>
    </div>
  );
}
