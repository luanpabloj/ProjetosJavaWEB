package com.example.Concessionaria.Vehicles;

import com.example.Concessionaria.Vehicles.DTO.CarroRequestDTO;
import com.example.Concessionaria.Vehicles.DTO.CarroResponseDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "carros")
@Entity(name = "carro")
@Getter
@EqualsAndHashCode(of = "id")
public class Carro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marca;
    private String modelo;
    private Integer ano;
    private Double valor;
    private Double quilometragem;
    private String combustivel;
    private String transmissao;
    private String motor;
    private String cor;
    private String condicao;
    private String imagem;
    private String arCondicionado;
    private String vidrosEletricos;
    private Integer portas;
    private String carroceria;
    private String tracao;


    public Carro(){
    }

    public Carro(CarroRequestDTO data) {
        this.marca = data.marca();
        this.modelo = data.modelo();
        this.ano = data.ano();
        this.valor = data.valor();
        this.quilometragem = data.quilometragem();
        this.combustivel = data.combustivel();
        this.transmissao = data.transmissao();
        this.motor = data.motor();
        this.cor = data.cor();
        this.condicao = data.condicao();
        this.imagem = data.imagem();
        this.arCondicionado = data.arCondicionado();
        this.vidrosEletricos = data.vidrosEletricos();
        this.portas = data.portas();
        this.carroceria = data.carroceria();
        this.tracao = data.tracao();
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Double getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(Double quilometragem) {
        this.quilometragem = quilometragem;
    }

    public String getCombustivel() {
        return combustivel;
    }

    public void setCombustivel(String combustivel) {
        this.combustivel = combustivel;
    }

    public String getTransmissao() {
        return transmissao;
    }

    public void setTransmissao(String transmissao) {
        this.transmissao = transmissao;
    }

    public String getMotor() {
        return motor;
    }

    public void setMotor(String motor) {
        this.motor = motor;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getCondicao() {
        return condicao;
    }

    public void setCondicao(String condicao) {
        this.condicao = condicao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArCondicionado() {
        return arCondicionado;
    }

    public void setArCondicionado(String arCondicionado) {
        this.arCondicionado = arCondicionado;
    }

    public String getVidrosEletricos() {
        return vidrosEletricos;
    }

    public void setVidrosEletricos(String vidrosEletricos) {
        this.vidrosEletricos = vidrosEletricos;
    }

    public Integer getPortas() {
        return portas;
    }

    public void setPortas(Integer portas) {
        this.portas = portas;
    }

    public String getCarroceria() {
        return carroceria;
    }

    public void setCarroceria(String carroceria) {
        this.carroceria = carroceria;
    }

    public String getTracao() {
        return tracao;
    }

    public void setTracao(String tracao) {
        this.tracao = tracao;
    }
}
