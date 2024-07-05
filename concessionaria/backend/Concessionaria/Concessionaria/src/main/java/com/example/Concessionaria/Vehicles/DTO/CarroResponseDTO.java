package com.example.Concessionaria.Vehicles.DTO;

import com.example.Concessionaria.Vehicles.Carro;

public record CarroResponseDTO(Long id, String marca, String modelo, Integer ano, Double valor, Double quilometragem,
                               String combustivel, String transmissao, String motor, String cor, String condicao,
                               String arCondicionado, String vidrosEletricos, Integer portas, String carroceria, String tracao, String imagem) {

    public CarroResponseDTO(Carro carro) {
        this(carro.getId(), carro.getMarca(), carro.getModelo(), carro.getAno(), carro.getValor(), carro.getQuilometragem(),
                carro.getCombustivel(), carro.getTransmissao(), carro.getMotor(), carro.getCor(), carro.getCondicao(),
                carro.getArCondicionado(), carro.getVidrosEletricos(), carro.getPortas(), carro.getCarroceria(),
                carro.getTracao(), carro.getImagem());
    }

}
