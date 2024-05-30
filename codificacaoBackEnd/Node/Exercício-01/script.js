/* Utilizando os conceitos de Orientação a Objetos: 
    Crie um programa que leia o número de fornecedores a serem cadastrados.  
    Após isso, o programa deve ler os dados desses fornecedores: 
    nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
    endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
    e exiba no console todas as informações desses fornecedores.*/


var fornecedor = require("./fornecedor");
var endereco = require("./endereco");
const prompt = require('prompt-sync')();
let fornecedores = [];

function addFornecedor() {
  let cont;
    
  while (true) {
    let contador = parseInt(prompt('Digite quantos fornecedores deseja cadastrar: '));
    if (!isNaN(contador)) {
      cont = contador;
      break;
    } else {
      console.log("Por favor, digite uma quantidade válida.");
    }
  }
  
  for(let i = 0; i < cont; i++){
    try {

      while (true) {
        let nome = prompt("Digite seu nome: ");
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nome)) {
          fornecedor.nome = nome;
          break;
        } else {
          console.log('Por favor, digite um nome válido.');
        }
      }

      while (true) {
        let sobrenome = prompt("Digite seu sobrenome: ");
        if (/^[a-zA-ZÀ-ÿ\s']{3,}$/.test(sobrenome)) {
          fornecedor.sobrenome = sobrenome;
          break;
        } else {
          console.log('Por favor, digite um sobrenome válido.');
        }
      }

      while (true) {
        let cnpj = prompt("Digite seu CNPJ: ");
        if (/\d{14}/.test(cnpj)) {
          if (cnpj.length === 14) {
            fornecedor.cnpj = cnpj;
            break;
          } else {
            console.log("Por favor, digite 14 números.");
          }
        } else {
          console.log("CNPJ inválido, digite somente números e 14 digitos.");
        }
      }

      while (true) {
        let logradouro = prompt("Digite nome da sua rua: ");
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(logradouro)) {
          endereco.logradouro = logradouro;
          break;
        } else {
          console.log('Por favor, digite um logradouro válido.');
        }
      }

      while (true) {
        let numero = parseInt(prompt("Digite o número da sua casa: "));
        if (!isNaN(numero) && numero > 0) {
          endereco.numero = numero;
          break;
        } else {
          console.log('Por favor, digite um número válido.');
        }
      }

      while (true) {
        let bairro = prompt("Digite seu bairro: ");
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(bairro)) {
          endereco.bairro = bairro;
          break;
        } else {
          console.log('Por favor, digite um bairro válido.');
        }
      }

      while (true) {
        let cep = prompt("Digite seu CEP (Formato: XXXXX-XXX): ");
        if (/\d{5}-\d{3}/.test(cep)) {
          endereco.cep = cep;
          break;
        } else {
          console.log("CEP inválido. Formato: XXXXX-XXX");
        }
      }

      while (true) {
        let estado = prompt("Digite o estado onde você mora: ");
        if (/^[a-zA-Z]{2}$/.test(estado)) {
          endereco.estado = estado;
          break;
        } else {
          console.log("Estado inválido");
        }
      }

      while (true) {
        let dataNasc = prompt("Digite sua data de nascimento (Formato: DD/MM/AAAA): ");
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)) {
          let partesData = dataNasc.split('/');
          let dia = parseInt(partesData[0]);
          let mes = parseInt(partesData[1]);
          let ano = parseInt(partesData[2]);

          if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
            if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && ano < 2025) {
              fornecedor.dataNascimento = dataNasc;
              break;
            } else {
              console.log("Data inválida.");
            }
          } else {
            console.log("Data inválida.");
          }
        } else {
          console.log("Formato de data inválido. Formato: DD/MM/AAAA");
        }
      }

      while (true) {
        let telefone = prompt("Digite seu telefone (Formato: (DDD)XXXXX-XXXX): ");
        if (/\(\d{2,3}\)\d{4,5}-\d{4}/.test(telefone)) {
          fornecedor.telefone = telefone;
          break;
        } else {
          console.log("Telefone inválido. Formato: (XX)XXXXX-XXXX");
        }
      }

      while (true) {
        let sexo = prompt("Digite seu sexo: ");
        if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(sexo)) {
          fornecedor.sexo = sexo;
          break;
        } else {
          console.log("Sexo inválido");
        }
      }
      console.log('-------------------------------------------------------------------')
      fornecedor.endereco = endereco;
      fornecedores.push(fornecedor);
      
    } catch (error) {
      console.log(error.message);
    }
  }
  atualizarDados(fornecedores);
}

function atualizarDados(fornecedores) {
  for (let i = 0; i < fornecedores.length; i++) {
    console.log(fornecedores[i]);
  }
}

addFornecedor();