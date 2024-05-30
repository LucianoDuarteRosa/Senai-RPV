/* tilizando os conceitos de Orientação a Objetos: 
     Em uma clínica veterinária, é necessário efetuar o cadastro de pets. 
     Crie um programa que leia os dados desses pets, sendo um cachorro e um gato.  
     Os dados são: nome, sexo, nome do dono(a), telefone do dono(a), raça, cor, idade, peso e altura. 
     No final exiba no console todas as informações desses pets.*/
    
     var pet = require("./pet");
     var cachorro = require("./cachorro");
     var pet = require("./gato");


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
        console.log(pets[i])
      }
    }
    