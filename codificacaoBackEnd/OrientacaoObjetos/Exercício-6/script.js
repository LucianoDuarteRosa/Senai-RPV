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
      let nome = document.getElementById('nome').value;
      let sobrenome = document.getElementById('sobrenome').value;
      let cpf = document.getElementById('cpf').value;
      let dataNasc = document.getElementById('dataNasc').value;
      dataNasc = formatarData(dataNasc);
      let endereco = document.getElementById('endereco').value;
      let telefone = document.getElementById('telefone').value;
      let sexo = checkRatio();

      try{
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nome)) { 
        } else {
            throw new Error('Por favor, digite um nome válido.')
        };

        if (/^[a-zA-ZÀ-ÿ\s']{3,}$/.test(sobrenome)) {
        } else {
            throw new Error('Por favor, digite um sobrenome válido.')
        };

        if (/\d{11}/.test(cpf)) {
            if(cpf.length === 11){
            }else{
              throw new Error("Por favor, digite 11 números.")
            } 
          } else {
              throw new Error("Por favor, digite somente números e 11 digitos.");
          }

        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)) {
          let partesData = dataNasc.split('/');
          let dia = parseInt(partesData[0]);
          let mes = parseInt(partesData[1]);
          let ano = parseInt(partesData[2]);

          if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
              if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && ano < 2025) {
              } else {
                  throw new Error("Data inválida.");
              }
          } else {
              throw new Error("Data inválida.");
          }
        } else {
            throw new Error("Formato de data inválido. Formato: DD/MM/AAAA");
        }
      
        if (/\(\d{2,3}\)\d{4,5}-\d{4}/.test(telefone)) {
          console.log(telefone)
        } else {
            throw new Error("Telefone Inválido. Formato: (XX)XXXXX-XXXX");
        }

        const pesssoa = new Pessoa(nome, sobrenome,cpf, sexo, dataNasc, endereco, telefone);

        let result = document.getElementById('retornoAqui');

        result.innerText = `${pesssoa.nome} ${pesssoa.sobrenome} foi cadastrado com sucesso. Cpf: ${pesssoa.cpf}, tel: ${pesssoa.telefone}, data nascimento: ${pesssoa.dataNascimento}, sexo: ${pesssoa.sexo}, endereço: ${pesssoa.endereco}.`;
  
        let visibility = document.getElementById('return')
        visibility.style.visibility  = "visible";

      }catch(error){
        alert(error.message)
      }

    }
    

    class Pessoa {
   
      constructor(nome, sobrenome, cpf, sexo, dataNascimento, endereco, telefone) {
          this.nome = nome;
          this.sobrenome = sobrenome;
          this.cpf = cpf;
          this.sexo = sexo;
          this.dataNascimento = dataNascimento;
          this.endereco = endereco;
          this.telefone = telefone;
      }
  }