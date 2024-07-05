import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import { Card } from './components/card/Card';
import { useCarroData } from './hooks/useCarroData';
import CadastrarVeiculo from './CadastrarVeiculo';
import PaginaDetalhes from './PaginaDetalhes';

function App() {
  const { data } = useCarroData();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="CardsApp">
              {data?.map(carroData => (
                <Card
                  id={carroData.id}
                  imagem={carroData.imagem}
                  modelo={carroData.modelo}
                  marca={carroData.marca}
                  ano={carroData.ano}
                  quilometragem={carroData.quilometragem}
                  valor={carroData.valor}
                />
              ))}
            </div>
          } 
        />
        <Route path="/CadastrarVeiculo" element={<CadastrarVeiculo />} />
        <Route path="/PaginaDetalhes/:id" element={<PaginaDetalhes />} />
      </Routes>
    </div>
  );
}

export default App;
