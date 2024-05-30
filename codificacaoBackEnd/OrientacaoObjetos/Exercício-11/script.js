/* Utilizando os conceitos de Orientação a Objetos:
     Em um banco XYZ Bank, é necessário efetuar a abertura de uma conta bancária para um cliente.
     Crie um programa que leia os dados desse cliente: 
     Nome completo, Tipo Pessoa (Física ou Jurídica), endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) 
     e telefone de contato((032) 00000-0000) 
        Se Pessoa Física solicitar também: CPF (11 dígitos), Data de Nascimento, Sexo (M-Masculino, F-Feminino, O-Outros)
        Se Pessoa Jurídica solicitar também: CNPJ (14 dígitos)
    Após isso, dar a opção ao cliente de escolher uma conta bancária ( Poupança ou Corrente ).
    Se a conta bancária for poupança, calcular o rendimento do saldo da conta em 3% ao mês, exibir o rendimento Em 1 ano, 2 anos e 5 anos.
    Se a conta bancária for corrente, aplicar uma taxa de 1,75% sobre o valor sacado a partir do 3 saque.*/
    
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('pessoa').addEventListener('change', function() {
          var select = document.getElementById('pessoa').value;
          var label = document.querySelector('label[for="cpf"]');

          if (select === 'fisica') {
              label.textContent = 'CPF';
          } else if (select === 'juridica') {
              label.textContent = 'CNPJ';
          }
      });
  });

    let conta = [];

    class Conta {
   
      constructor(nome, cnpj, sexo, dataNascimento, telefone, endereco, tipoConta) {
          this._nome = nome;
          this._cnpj = cnpj;
          this._sexo = sexo;
          this._dataNascimento = dataNascimento;
          this._telefone = telefone;
          this._endereco = endereco;
          this._tipoConta = tipoConta
      }

      get getNome() {
        return this._nome;
      }  
      set setNome(nome) {
        this._nome = nome;
      }  

      get getCNPJ() {
        return this._cnpj;
      }  
      set setCNPJ(cnpj) {
        this._cnpj = cnpj;
      }  

      get getSexo() {
        return this._sexo;
      }  
      set setSexo(sexo) {
        this._sexo = sexo;
      }  

      get getDataNascimento() {
        return this._dataNascimento;
      }  
      set setDataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
      }  

      get getTelefone() {
        return this._telefone;
      }  
      set setTelefone(telefone) {
        this._telefone = telefone;
      }  

      get getEndereco() {
        return this._endereco;
      }  
      set setEndereco(endereco) {
        this._endereco = endereco;
      }  

      get getTipoConta() {
        return this._tipoConta;
      }  
      set setTipoConta(tipoConta) {
        this._tipoConta = tipoConta;
      }  

      toString() {
        return `Nome: ${this.nome.toUpperCase()} Sobrenome: R$${this.sobrenome.toUpperCase()} CNPJ: ${this.cnpj} </br>
        Sexo: ${this.sexo.toUpperCase()} Data de nascimento: ${this.dataNascimento} Telefone: ${this.telefone} </br>
        Logradouro: ${this.endereco.logradouro.toUpperCase()} Número: ${this.endereco.numero} Bairro: ${this.endereco.bairro.toUpperCase()} CEP: ${this.endereco.cep} Estado: ${this.endereco.estado.toUpperCase()}</br> <hr>` ;
      }

    }

    class Poupança extends Conta{
      constructor(nome, cnpj, sexo, dataNascimento, telefone, endereco, tipoConta) {
        super(nome, cnpj, sexo, dataNascimento, telefone, endereco, tipoConta)
    }
      rendimentoConta(){
        let anos = 1;
        let valorSimulado = 1000;
        let valorInicial = 1000;
        let stringRetorno = "";
        for(let i = 0; i < 60; i++){
          valorSimulado *= 1.003;
          if(i === 11){
            stringRetorno += `A simulação do redimento mais saldo de R$${valorInicial.toFixed('2')} no ${anos}° ano é : R$ ${valorSimulado.toFixed('2')}</br>`
          }
          if(i === 23){
            anos++;
            let continuação = `A simulação do redimento mais saldo do ${anos}° ano é : R$ ${valorSimulado.toFixed('2')}</br>` 
            stringRetorno += continuação          
          }
          if(i === 59){
            anos = 5
            let continuação = `A simulação do redimento mais saldo do ${anos}° ano é : R$ ${valorSimulado.toFixed('2')}`
            stringRetorno += continuação 
          }
        }
        return stringRetorno;
      }
    }
    
    class Corrente extends Conta{
          constructor(nome, cnpj, sexo, dataNascimento, telefone, endereco, tipoConta) {
            super(nome, cnpj, sexo, dataNascimento, telefone, endereco, tipoConta)
        }
        rendimentoConta(){
          let countSaque = 0;
          let valorSimulado = 1000;
          let saque = 100;
          let stringRetorno = "";
          for(let i = 0; i < 5; i++){
            countSaque ++;
            if(countSaque <= 3){
              let valorFinal = valorSimulado - saque
              stringRetorno += `Saldo inicial de R$${valorSimulado.toFixed('2')} saque de R$ ${saque.toFixed('2')}. Saldo final: ${valorFinal.toFixed('2')}</br>`
              valorSimulado = valorFinal;
            }
            if(countSaque > 3){
              let taxa = saque * 0.0175 ;
              let valorFinal = valorSimulado - saque - taxa
              stringRetorno += `Saldo inicial de R$${valorSimulado.toFixed('2')} saque de R$ ${saque.toFixed('2')} + taxa de saque ${taxa.toFixed('2')}. Saldo final: ${valorFinal.toFixed('2')}</br>` 
              valorSimulado = valorFinal;
          }
        }
        return stringRetorno;
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

    function mostrarPessoaSelecionado() {
      var select = document.getElementById('pessoa');
      var pessoaSelecionado = select.options[select.selectedIndex].value;
      return pessoaSelecionado;
    }

    function mostrarContaSelecionado() {
      var select = document.getElementById('conta');
      var contaSelecionado = select.options[select.selectedIndex].value;
      return contaSelecionado;
    }

    function formatarData(data){
      let partes = data.split("-")
      return partes[2] + "/" + partes[1] + "/" + partes[0];
    }

    function validarEnviar(){
      let limpar = [];
      atualizarDados(limpar);
      let nome = document.getElementById('nome').value;
      let tipoConta = mostrarPessoaSelecionado();
      let cnpj = document.getElementById('cpf').value;
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

        if (/\d{11}/.test(cnpj) || /\d{14}/.test(cnpj)) {
            if(cnpj.length === 14){
              
            }else if(cnpj.length === 11){
             
            }else{
              throw new Error("Por favor, digite 14 números para CNPJ e 11 para CPF.")
            } 
          } else {
              throw new Error("CNPJ/CPF inválido, digite 14 números para CNPJ e 11 para CPF.");
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
         
        } else {
            throw new Error("Telefone Inválido. Formato: (XX)XXXXX-XXXX");
        }

        if(tipoConta == 'fisica'){
          let novaConta = new Poupança(nome, cnpj, sexo, dataNasc, telefone, new Endereco(logradouro, numero, bairro, cep, estado), tipoConta);
          conta.push(novaConta);
        }else if(tipoConta == 'juridica'){
          let novaConta = new Corrente(nome, cnpj, sexo, dataNasc, telefone, new Endereco(logradouro, numero, bairro, cep, estado), tipoConta);
          conta.push(novaConta);
        }else{
          throw new Error('Conta escolhida desconhecida.')
        }
        
        atualizarDados(conta);

      }catch(error){
        alert(error.message)
      }

    }

    function atualizarDados(conta){
      let result = '';
      for(let i = 0; i< conta.length; i++){
        result += `${conta[i].rendimentoConta()}`
      }
      
      let retorno = document.getElementById('retornoAqui');
      retorno.innerHTML = result;
      let visibility = document.getElementById('return')
      visibility.style.visibility  = "visible";
    
    }
    