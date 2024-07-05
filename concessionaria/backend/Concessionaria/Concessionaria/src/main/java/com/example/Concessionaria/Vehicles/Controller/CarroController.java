package com.example.Concessionaria.Vehicles.Controller;

import com.example.Concessionaria.Vehicles.Carro;
import com.example.Concessionaria.Vehicles.DTO.CarroRequestDTO;
import com.example.Concessionaria.Vehicles.DTO.CarroResponseDTO;
import com.example.Concessionaria.Vehicles.Repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("carro")
public class CarroController {

    @Autowired
    private CarroRepository carroRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void salvarCarro(@RequestBody CarroRequestDTO data){
        Carro carro = new Carro(data);
        carroRepository.save(carro);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CarroResponseDTO> getAll(){
       List<CarroResponseDTO> carroList = carroRepository.findAll().stream().map(CarroResponseDTO::new).toList();
       return carroList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        carroRepository.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public CarroResponseDTO getById(@PathVariable Long id) {
        return carroRepository.findById(id).map(CarroResponseDTO::new).orElse(null);
    }
}
