var pet = require("./pet");

    class Cachorro extends Pet{
      constructor() {
        super(nomePet, sexo, nomeDono, telefone, raca, cor, idade, peso, altura)
      };
      latir(){
        return `${this.nomePet} diz : AUAUAUAU!!` 
      };
      toString() {
        return `CACHORRO - Nome Dono: ${this.getNomeDono.toUpperCase()} - Telefone: ${this.getTelefone} </br> 
        Nome Pet: ${this.getNomePet.toUpperCase()} - Raça: ${this.getRaca.toUpperCase()} - Cor: ${this.getCor.toUpperCase()} - Sexo: ${this.getSexo.toUpperCase()} - Idade: ${this.getIdade} - Peso: ${this.getPeso} - Altura: ${this.getAltura}</br> <hr>` ;
      };
    }

  
    module.exports = {
      Cachorro  
    };
    