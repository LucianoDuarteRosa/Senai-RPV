                                        /*  --- ATIVIDADE 01 ---*/
                                    /* precisa de -> npm install prompt-sync */

/*-------------------------------------------------------------------------------------------------*/
/*1) Crie um programa que exiba no console uma mensagem digitada pelo usuário.*/
/*
const prompt = require('prompt-sync')();
let mensagem = prompt("Digite uma mensagem: ");
console.log('A mensagem digitada é: ' + mensagem);
*/

/*-------------------------------------------------------------------------------------------------*/
/*2) Crie um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela.*/
/*
const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
console.log('Olá ' + nome + ', é um prazer ter você aqui!');
*/


/*-------------------------------------------------------------------------------------------------*/
/*3) Crie um programa que leia os dados de um aluno: matrícula,nome, sobrenome, CPF, sexo, data de nascimento, endereço
e telefone e exiba no console.*/
/*
const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let cpf = prompt("Digite seu cpf: ");
let sexo = prompt("Digite seu sexo: ");
let data = prompt("Digite seu data de nascimento: ");
let endereco = prompt("Digite seu endereço: ");
let telefone = prompt("Digite seu telefone: ");
let usuario = {
    nome:  nome,
    sobrenome: sobrenome,
    cpf: cpf,
    sexo: sexo,
    data: data,
    endereco: endereco,
    telefone: telefone
};
console.log(usuario)*/


/*-------------------------------------------------------------------------------------------------*/
/*
4) Crie um programa que leia uma disciplina, um aluno e as quatro notas desse aluno naquela disciplina. Ao final, mostre
na tela a média do aluno na disciplina.*/
/*
const prompt = require('prompt-sync')();
let disciplina = prompt("Digite nome da disciplina: ");
let nome = prompt("Digite seu nome: ");
let nota1 = parseInt(prompt("Digite a primeira nota: "));
let nota2 = parseInt(prompt("Digite a segunda nota: "));
let nota3 = parseInt(prompt("Digite a terçeira nota: "));
let nota4 = parseInt(prompt("Digite a quarta nota "));
let resultado = (nota1+nota2+nota3+nota4)/4;
console.log(`A média do aluno ${nome} na disciplina de ${disciplina} é de: ${resultado}`);
*/


/*-------------------------------------------------------------------------------------------------*/
/*5) Crie um programa que exiba na tela a tabuada do número digitado pelo usuário.*/
/*
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um número: "));
for(let i = 1; i < 11; i++){
    console.log(`${numero} x ${i} = ${i * numero}`);
}
*/


/*-------------------------------------------------------------------------------------------------*/
/*6) Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.*/
/*
const prompt = require('prompt-sync')();
let nome = prompt("Digite um nome: ");
let salario = parseInt(prompt("Digite seu salário: "));
console.log(`${nome} seu salário é de ${salario.toFixed('2')}.. que salário de merda hein!!`)
*/

/*-------------------------------------------------------------------------------------------------*/
/*7) Crie um programa que leia 5 números e mostre o somatório entre eles.*/
/*
const prompt = require('prompt-sync')();
let resultado = 0;
for(let i = 1; i <6; i++){
    let numero = parseInt(prompt(`Digite o ${i}° número: `));
    resultado += numero;
};
console.log(`A soma dos números digitados é de: ${resultado}`);
*/

/*-------------------------------------------------------------------------------------------------*/
/*8) Crie um programa que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.*/
/*
const prompt = require('prompt-sync')();
let ano = parseInt(prompt("Digite o ano de seu nascimento: "));
let mes = parseInt(prompt("Digite o mes de seu nascimento: "));
let dia = parseInt(prompt("Digite o dia de seu nascimento: "));
ano = 2024-ano;
let resultado = ano * 365;
resultado += mes*30;
resultado += dia;
console.log(`Você teve um total de ${resultado} dias de vida`)
*/


/*-------------------------------------------------------------------------------------------------*/
/*9) Crie um programa que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.*/
/*
const prompt = require('prompt-sync')();
let dia = parseInt(prompt("Digite quantos dias de vida você tem: "));
let anos = dia/365;
let meses = dia%365;
let diaFinal = meses;
meses = meses/30;
diaFinal = diaFinal%30;
console.log(`Você teve um total de ${anos.toFixed('0')} anos, ${meses.toFixed('0')} meses e ${diaFinal.toFixed('0')} dias de vida`);
*/


/*-------------------------------------------------------------------------------------------------*/
/*10) Crie um programa que leia o tempo de duração de uma atividade em horas, minutos e segundos e mostre-o expresso em segundos.*/
/*
const prompt = require('prompt-sync')();
let hora = parseInt(prompt("Digite quantas horas: "));
let minuto = parseInt(prompt("Digite quantos minutos: "));
let segundo = parseInt(prompt("Digite quantos segundos "));
let resultado = segundo;
resultado += minuto *60;
resultado += hora*3600
console.log(`A Atividade vai levar um  total de ${resultado} segundos.`)
*/


/*-------------------------------------------------------------------------------------------------*/
/*11) Crie um programa que leia o tempo de duração de uma atividade em segundos e mostre-o expresso em horas, minutos e segundos.*/
/*
const prompt = require('prompt-sync')();
let segundos = parseInt(prompt("Digite quantos segundos: "));
let horas = segundos/3600;
let minutos = segundos%3600;
let segundosFinal = minutos;
segundosFinal = minutos%60;
minutos = minutos/60;
console.log(`Duração do serviço será de ${horas.toFixed('0')} horas, ${minutos.toFixed('0')} minutos e ${segundosFinal.toFixed('0')} segundos`);
*/


/*-------------------------------------------------------------------------------------------------*/
/*12) Crie um programa que leia o preço de um produto, calcule e mostre o seu preço promocional, com 15% de desconto.*/
/*
const prompt = require('prompt-sync')();
let preco = parseInt(prompt("Digite o preço do produto: "));
let desconto = preco*15/100
let result = preco - desconto;
console.log(`O preço com desconto é de R$ ${result.toFixed('2')}`);
*/



/*-------------------------------------------------------------------------------------------------*/
/*13) Crie um programa que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 27,50% de aumento.*/
/*
const prompt = require('prompt-sync')();
let salario = parseInt(prompt("Digite o salário: "));
let aumento = salario*27.5/100
let result = salario + aumento;
console.log(`O salario com o aumento é de R$ ${result.toFixed('2')}`);
*/

/*-------------------------------------------------------------------------------------------------*/
/*14) Crie um programa que leia o valor da matrícula de um curso, calcule e mostre o seu novo valor, com 20% de desconto.*/
/*
const prompt = require('prompt-sync')();
let matricula = parseInt(prompt("Digite o preço da matricula: "));
let desconto = matricula*20/100
let result = matricula - desconto;
console.log(`O valor da matricula com desconto é de R$ ${result.toFixed('2')}`);
*/


/*-------------------------------------------------------------------------------------------------*/
/*15) Crie um programa que leia o valor de um boleto que será pago com atraso, a quantidade de dias em atraso, calcule e
mostre o seu novo valor com uma taxa de 1,25% ao dia.*/
/*
const prompt = require('prompt-sync')();
let valor = parseInt(prompt("Digite o o valor do boleto: "));
let dias = parseInt(prompt("Digite o dias de atraso: "));
dias = dias * 1.25;
let acrescimo = valor*dias/100;
let result = valor + acrescimo;
console.log(`O valor da boleto atualizado é de R$ ${result.toFixed('2')}`);
*/