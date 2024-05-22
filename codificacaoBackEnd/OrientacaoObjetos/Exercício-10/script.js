/* tilizando os conceitos de Orientação a Objetos: 
     Em uma clínica veterinária, é necessário efetuar o cadastro de pets. 
     Crie um programa que leia os dados desses pets, sendo um cachorro e um gato.  
     Os dados são: nome, sexo, nome do dono(a), telefone do dono(a), raça, cor, idade, peso e altura. 
     No final exiba no console todas as informações desses pets.*/
    
    let pets = [];

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

    class Cachorro extends Pet{
      constructor() {
        super(nomePet, sexo, nomeDono, telefone, raca, cor, idade, peso, altura)
      };
      latir(){
        return `${this.nomePet} diz : AUAUAUAU!!` 
      };
      toString() {
        return `CACHORRO - Nome Dono: ${this.getNomeDono} - Telefone: ${this.getTelefone} </br> 
        Nome Pet: ${this.getNomePet.toUpperCase()} - Raça: ${this.getRaca.toUpperCase()} - Cor: ${this.getCor.toUpperCase()} - Sexo: ${this.getSexo.toUpperCase()} - Idade: ${this.getIdade} - Peso: ${this.getPeso} - Altura: ${this.getAltura}</br> <hr>` ;
      };
    }

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

    function mostrarSelecionado() {
        var select = document.getElementById('sexo');
        var sexoSelecionado = select.options[select.selectedIndex].text;
        return sexoSelecionado;
    }

    function petSelecionado() {
      var select = document.getElementById('pet');
      var petSelecionado = select.options[select.selectedIndex].text;
      return petSelecionado;
  }

    function validarEnviar(){
      let select = petSelecionado();
      let pet;
      if(select == 'Cachorro'){
        pet = new Cachorro();
      }else if(select == 'Gato'){
        pet = new Gato();
      }else{
        throw new Error('Pet desconhecido.')
      }

      let nomePet = document.getElementById('nomePet').value;
      let nomeDono = document.getElementById('nomeDono').value;
      let telefone = document.getElementById('telefone').value;
      pet.setSexo = mostrarSelecionado();
      let cor = document.getElementById('cor').value;
      let raca = document.getElementById('raca').value;
      let idade = parseInt(document.getElementById('idade').value);
      let peso = parseFloat(document.getElementById('peso').value);
      let altura = parseFloat(document.getElementById('altura').value);

      try{
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nomePet)) { 
          pet.setNomePet = nomePet;
        } else {
            throw new Error('Por favor, digite um nome válido.')
        };

        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nomeDono)) { 
          pet.setNomeDono = nomeDono;
        } else {
            throw new Error('Por favor, digite um nome válido.')
        };

        if (/\(\d{2,3}\)\d{4,5}-\d{4}/.test(telefone)) {
          pet.setTelefone = telefone;
        } else {
            throw new Error("Telefone Inválido. Formato: (XX)XXXXX-XXXX");
        }

        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(cor)) { 
          pet.setCor = cor;
        } else {
            throw new Error('Por favor, digite uma cor válida.')
        };

        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(raca)) { 
          pet.setRaca = raca;
        } else {
            throw new Error('Por favor, digite uma raca válida.')
        };

        if(!isNaN(idade) && idade > 0){
          pet.setIdade = idade;
        }else {
              throw new Error("Idade inválida, digite somente números.");
        }

        if(!isNaN(peso) && peso > 0){
          pet.setPeso = peso;
        }else {
              throw new Error("Peso inválida, digite somente números.");
        }

        if(!isNaN(altura) && altura > 0){
          pet.setAltura = altura
        }else {
              throw new Error("Altura inválida, digite somente números.");
        }
        
        pets.push(pet);
        atualizarDados(pets);

      }catch(error){
        alert(error.message)
      }
    }

    function atualizarDados(pets){
      let result = '';
      for(let i = 0; i< pets.length; i++){
        result += `${pets[i].toString()}`
      }
      
      let retorno = document.getElementById('retornoAqui');
      retorno.innerHTML = result;
      let visibility = document.getElementById('return')
      visibility.style.visibility  = "visible";
    
    }
    