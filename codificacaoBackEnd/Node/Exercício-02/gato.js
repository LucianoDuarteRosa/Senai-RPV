var pet = require("./pet");

    class Gato extends Pet{
      constructor() {
        super(nomePet, sexo, nomeDono, telefone, raca, cor, idade, peso, altura)
      };
      Miar(){
        return `${this.nomePet.toUpperCase()} diz : MIAUMIAU!!` 
      };
      toString() {
        return `GATO - Nome Dono: ${this.getNomeDono.toUpperCase()} - Telefone: ${this.getTelefone} </br> 
        Raça: ${this.getRaca.toUpperCase()} - Cor: ${this.getCor.toUpperCase()} - Idade: ${this.getIdade} - Peso: ${this.getPeso} - Altura: ${this.getAltura}</br> <hr>` ;
      };
    }


    module.exports = {
      Gato
    };
    