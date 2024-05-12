/* 2. Utilizando objeto: Crie um programa que leia os dados de um usuário: 
    nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.*/

    
    function checkRatio(){
      let radios = document.getElementsByName('opcao')

      for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
          return radios[i].value;
        }
      }
    };

    function formatarData(data){
      let partes = data.split("-")
      return partes[2] + "/" + partes[1] + "/" + partes[0];
    }

    function validarEnviar(){
      let pessoa = {};
      let nome = document.getElementById('nome').value;
      let sobrenome = document.getElementById('sobrenome').value;
      let cpf = document.getElementById('cpf').value;
      let dataNasc = document.getElementById('dataNasc').value;
      dataNasc = formatarData(dataNasc);
      pessoa.endereco = document.getElementById('endereco').value;
      let telefone = document.getElementById('telefone').value;
      pessoa.sexo = checkRatio();

      try{
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nome)) {
          pessoa.nome = nome  
        } else {
            throw new Error('Por favor, digite um nome válido.')
        };

        if (/\d{11}/.test(cpf)) {
            if(cpf.length === 11){
              pessoa.cpf = cpf;
            }else{
              throw new Error("Por favor, digite 11 números.")
            } 
          } else {
              throw new Error("Por favor, digite somente números e 11 digitos.");
          }

        if (/^[a-zA-ZÀ-ÿ\s']{3,}$/.test(sobrenome)) {
          pessoa.sobrenome = sobrenome  
        } else {
            throw new Error('Por favor, digite um nome válido.')
        };

        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)) {
          let partesData = dataNasc.split('/');
          let dia = parseInt(partesData[0]);
          let mes = parseInt(partesData[1]);
          let ano = parseInt(partesData[2]);

          if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
              if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && ano < 2025) {
                  pessoa.dataNascimento = dataNasc; 
              } else {
                  throw new Error("Data inválida.");
              }
          } else {
              throw new Error("Data inválida.");
          }
        } else {
            throw new Error("Formato de data inválido.");
        }
      
        if (/\(\d{2,3}\)\d{4,5}-\d{4}/.test(telefone)) {
          pessoa.telefone = telefone;
        } else {
            throw new Error("Telefone Inválido");
        }

        let result = document.getElementById('retornoAqui');

        result.innerText = `${pessoa.nome} ${pessoa.sobrenome} foi cadastrado com sucesso. Cpf: ${pessoa.cpf}, tel: ${pessoa.telefone}, data nascimento: ${pessoa.dataNascimento}, sexo: ${pessoa.sexo}, endereço: ${pessoa.endereco}.`;
  
        let visibility = document.getElementById('return')
        visibility.style.visibility  = "visible";

      }catch(error){
        alert(error.message)
      }

    }
    
