
    class Pet{
      constructor( nomePet, sexo, nomeDono, telefone, raca, cor, idade, peso, altura ) {
        this._nomePet = nomePet;
        this._sexo = sexo;
        this._nomeDono = nomeDono;
        this._telefone = telefone;
        this._raca = raca;
        this._cor = cor;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
      }

      get getNomePet() {
        return this._nomePet;
      }  
      set setNomePet(nomePet) {
        this._nomePet = nomePet;
      }  

      get getSexo() {
        return this._sexo;
      }  
      set setSexo(sexo) {
        this._sexo = sexo;
      } 

      get getNomeDono() {
        return this._nomeDono;
      }  
      set setNomeDono(nomeDono) {
        this._nomeDono = nomeDono;
      } 

      get getTelefone() {
        return this._telefone;
      }  
      set setTelefone(telefone) {
        this._telefone = telefone;
      } 

      get getRaca() {
        return this._raca;
      }  
      set setRaca(raca) {
        this._raca = raca;
      } 

      get getCor() {
        return this._cor;
      }  
      set setCor(cor) {
        this._cor = cor;
      } 

      get getIdade() {
        return this._idade;
      }  
      set setIdade(idade) {
        this._idade = idade;
      } 

      get getPeso() {
        return this._peso;
      }  
      set setPeso(peso) {
        this._peso = peso;
      } 

      get getAltura() {
        return this._idade;
      }  
      set setAltura(altura) {
        this._altura = altura;
      } 

    }

    module.exports = {
      Pet
    };
    