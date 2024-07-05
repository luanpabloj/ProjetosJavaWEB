package com.example.Concessionaria.Vehicles.DTO;

public record CarroRequestDTO(String marca, String modelo, Integer ano, Double valor, Double quilometragem,
                              String combustivel, String transmissao, String motor, String cor, String condicao,
                              String arCondicionado, String vidrosEletricos, Integer portas, String carroceria, String tracao, String imagem) {
}
