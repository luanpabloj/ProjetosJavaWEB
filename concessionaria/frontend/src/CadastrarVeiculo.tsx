import React, { useState } from 'react';
import './CadastrarVeiculo.css';
import { useCarroData } from './hooks/useCarroDataMutate';
import { CarroData } from './interfaces/CarroData';

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <div className="input-container">
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        className="input-field"
      />
    </div>
  );
};

export function CadastrarVeiculo() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState(0);
  const [valor, setValor] = useState(0);
  const [quilometragem, setQuilometragem] = useState(0);
  const [combustivel, setCombustivel] = useState("");
  const [transmissao, setTransmissao] = useState("");
  const [motor, setMotor] = useState(0);
  const [cor, setCor] = useState("");
  const [condicao, setCondicao] = useState("");
  const [imagem, setImagem] = useState("");
  const [arCondicionado, setArCondicionado] = useState("");
  const [vidrosEletricos, setVidrosEletricos] = useState("");
  const [portas, setPortas] = useState(0);
  const [carroceria, setCarroceria] = useState("");
  const [tracao, setTracao] = useState("");
  const { mutate } = useCarroData();

  const submit = () => {
    const carroData: CarroData = {
      marca,
      modelo,
      ano,
      valor,
      quilometragem,
      combustivel,
      transmissao,
      motor,
      cor,
      condicao,
      imagem,
      arCondicionado,
      vidrosEletricos,
      portas,
      carroceria,
      tracao,
    };
    mutate(carroData);
  };

  return (
    <form className="car-form">
      <Input label="Marca" value={marca} updateValue={setMarca} />
      <Input label="Modelo" value={modelo} updateValue={setModelo} />
      <Input label="Ano" value={ano} updateValue={setAno} />
      <Input label="Valor" value={valor} updateValue={setValor} />
      <Input label="Quilometragem" value={quilometragem} updateValue={setQuilometragem} />
      <Input label="Combustível" value={combustivel} updateValue={setCombustivel} />
      <Input label="Transmissão" value={transmissao} updateValue={setTransmissao} />
      <Input label="Motor" value={motor} updateValue={setMotor} />
      <Input label="Cor" value={cor} updateValue={setCor} />
      <Input label="Condição" value={condicao} updateValue={setCondicao} />
      <Input label="Imagem" value={imagem} updateValue={setImagem} />
      <Input label="Ar Condicionado" value={arCondicionado} updateValue={setArCondicionado} />
      <Input label="Vidros Elétricos" value={vidrosEletricos} updateValue={setVidrosEletricos} />
      <Input label="Portas" value={portas} updateValue={setPortas} />
      <Input label="Carroceria" value={carroceria} updateValue={setCarroceria} />
      <Input label="Tração" value={tracao} updateValue={setTracao} />
      <button onClick={submit} type="button">Enviar</button>
    </form>
  );
}

export default CadastrarVeiculo;
