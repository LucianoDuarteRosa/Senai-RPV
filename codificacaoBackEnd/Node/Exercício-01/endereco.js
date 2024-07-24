/* Utilizando os conceitos de Orientação a Objetos: 
    Crie um programa que leia o número de fornecedores a serem cadastrados.  
    Após isso, o programa deve ler os dados desses fornecedores: 
    nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
    endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
    e exiba no console todas as informações desses fornecedores.*/
    
    class Endereco{
      constructor(logradouro, numero, bairro, cep, estado) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.estado = estado;
    }
    }


    module.exports = {
      Endereco       
    };
    