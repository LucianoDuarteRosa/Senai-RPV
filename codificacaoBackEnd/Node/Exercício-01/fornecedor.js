/* Utilizando os conceitos de Orientação a Objetos: 
    Crie um programa que leia o número de fornecedores a serem cadastrados.  
    Após isso, o programa deve ler os dados desses fornecedores: 
    nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
    endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
    e exiba no console todas as informações desses fornecedores.*/
    

    class Fornecedor{
   
      constructor(nome, sobrenome, cnpj, sexo, dataNascimento, telefone, endereco) {
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
        Logradouro: ${this.logradouro.toUpperCase()} Número: ${this.numero} Bairro: ${this.bairro.toUpperCase()} CEP: ${this.cep} Estado: ${this.estado.toUpperCase()}</br> <hr>` ;
      }

    }

    module.exports = {
      Fornecedor  
    };
    