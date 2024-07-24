/* Utilizando os conceitos de Orientação a Objetos: 
    Crie um programa que leia o número de fornecedores a serem cadastrados.  
    Após isso, o programa deve ler os dados desses fornecedores: 
    nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
    endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
    e exiba no console todas as informações desses fornecedores.*/
    
    let fornecedores = [];

    class Fornecedor {
   
      constructor(nome, sobrenome, cnpj, sexo, dataNascimento, telefone,endereco ) {
          this.nome = nome;
          this.sobrenome = sobrenome;
          this.cnpj = cnpj;
          this.sexo = sexo;
          this.dataNascimento = dataNascimento;
          this.telefone = telefone;
          this.endereco = endereco;
      }
      toString() {
        return `Nome: ${this.nome.toUpperCase()} Sobrenome: R$${this.sobrenome.toUpperCase()} CNPJ: ${this.cnpj} </br>
        Sexo: ${this.sexo.toUpperCase()} Data de nascimento: ${this.dataNascimento} Telefone: ${this.telefone} </br>
        Logradouro: ${this.endereco.logradouro.toUpperCase()} Número: ${this.endereco.numero} Bairro: ${this.endereco.bairro.toUpperCase()} CEP: ${this.endereco.cep} Estado: ${this.endereco.estado.toUpperCase()}</br> <hr>` ;
      }

    }

    class Endereco{
      constructor(logradouro, numero, bairro, cep, estado) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.estado = estado;
    }
    }
    

    function checkRatio(){
      let radios = document.getElementsByName('opcao')

      for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
          return radios[i].value;
        }
      }
    };

    function mostrarEstadoSelecionado() {
        var select = document.getElementById('estados');
        var estadoSelecionado = select.options[select.selectedIndex].text;
        return estadoSelecionado;
    }

    function formatarData(data){
      let partes = data.split("-")
      return partes[2] + "/" + partes[1] + "/" + partes[0];
    }

    function validarEnviar(){
      let nome = document.getElementById('nome').value;
      let sobrenome = document.getElementById('sobrenome').value;
      let cnpj = document.getElementById('cnpj').value;
      let logradouro = document.getElementById('logradouro').value;
      let numero = document.getElementById('numero').value;
      let bairro = document.getElementById('bairro').value;
      let cep = document.getElementById('cep').value;
      let estado = mostrarEstadoSelecionado();
      let dataNasc = document.getElementById('dataNasc').value;
      dataNasc = formatarData(dataNasc);
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

        if (/\d{11}/.test(cnpj)) {
            if(cnpj.length === 14){
            }else{
              throw new Error("Por favor, digite 14 números.")
            } 
          } else {
              throw new Error("CNPJ inválido, digite somente números e 14 digitos.");
        }

        if(!isNaN(numero) && numero > 0){
        }else {
              throw new Error("Número inválido, digite somente números.");
        }

        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(logradouro)) { 
        } else {
            throw new Error('Por favor, digite um logradouro válido.')
        };

        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(bairro)) { 
        } else {
            throw new Error('Por favor, digite um bairro válido.')
        };

        if (/\d{5}-\d{3}/.test(cep)) {
        } else {
            throw new Error("CEP inválido. Formato: XXXXX-XXX");
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

        let endereco = new Endereco(logradouro, numero, bairro, cep, estado);
        let fornecedor = new Fornecedor(nome, sobrenome, cnpj, sexo, dataNasc, telefone, endereco);

        fornecedores.push(fornecedor);

        atualizarDados(fornecedores);

      }catch(error){
        alert(error.message)
      }

    }

    function atualizarDados(fornecedores){
      let result = '';
      for(let i = 0; i< fornecedores.length; i++){
        result += `${fornecedores[i].toString()}`
      }
      
      let retorno = document.getElementById('retornoAqui');
      retorno.innerHTML = result;
      let visibility = document.getElementById('return')
      visibility.style.visibility  = "visible";
    
    }
    