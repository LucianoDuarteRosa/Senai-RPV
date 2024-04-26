const prompt = require('prompt-sync')();


//Atividade - 1 
/*
for(let i = 0; i <= 50; i++){
    let teste = i%2
    if(i > 30){
        break;
    }else if(teste ==1){
        console.log(`Valor impar ${i}`)
    }
}*/

//Atividade - 2 
/*
for(let i = 0; i <= 50; i++){
    let teste = i%2
    if(i == 30){
        continue;
    }else if(teste ==0){
        console.log(`Valor impar ${i}`)
    }
}*/

//Atividade - 3*
/*
let numero = parseInt(prompt('Digite um número: '));
let parOuImpar= numero%2;
if(parOuImpar == 0){
    console.log(`${numero} é um número par.`)
}else{
    console.log(`${numero} é um número impar.`)
}*/

//Atividade - 4
/*
let a = parseInt(prompt(`Digite um valor: `));
if(a != 0){
    let result = a;
    let multi = `${a}! = ${a} x `;
    a--;

    for (a; a > 0 ; a--){
        if(a != 1){
        result = result * a;
        multi += `${a} x `;
        }else{
            result = result * a;
            multi += `${a} `;
        }
    }
    multi += `= ${result}`;
    console.log(multi);
}else{
    console.log(`${a}! = 1`);
}
*/

// Atividade - 5 
/*
let result = "Numeros entre 1 e 100 são: "
for(let i = 0; i <= 100; i++){
    let teste = i%3
    if(teste == 0){
        result += i + " "
    }
}
console.log(result)*/

//Atividade - 6 
/*
let a = parseInt(prompt(`Digite primeiro valor: `));
let b = parseInt(prompt(`Digite segundo valor: `));
let c = parseInt(prompt(`Digite terceiro valor: `));
let lista= [a , b, c]
lista.sort((a,b) => a-b);
console.log( "Crescente: " + lista)
lista.sort((a,b) => b-a);
console.log("Decrecente: " +lista)*/

//Atividade - 7
/*
let a = parseInt(prompt(`Digite primeiro valor: `));
let b = parseInt(prompt(`Digite segundo valor: `));
let c =0
if( a ==b){
    c = a + b;
}else{
    c = a * b;
}

console.log("resultado é " + c)*/

// Atividade - 8
/*
let nome = prompt(`Digite o nome: `);
let matricula = parseInt(prompt(`Digite a matrícula: `));
let disciplicna = prompt(`Digite a disciplina: `);
let nota = parseInt(prompt(`Digite a nota: `));

if(nota >=60){
    console.log('Aprovado')
}else if(nota >=50){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}*/

// Atividade - 9
/*
let idadeMedia = 0;
let maiorIdade = 0;
let menorIdade= 0;
let maior20 = 0;
let menor10 = 0;


for(let i = 0; i < 10; i++){
    let idade = parseInt(prompt('Digite a idade: '));
    if(idade > 20){
        maior20++
    }
    if(idade < 10){
        menor10++
    }
    if(maiorIdade < idade ){
        maiorIdade = idade;
    }
    if(menorIdade < idade || menorIdade != 0){
        menorIdade = idade;
    }
    idadeMedia+= idade
}
idadeMedia= idadeMedia/10
console.log(`A idade medida é de: ${idadeMedia}. A maior idade digitada foi: ${maiorIdade}.A menor idade digitada foi ${menorIdade}`)
console.log(`Teve ${maior20} maior de 20 e ${menor10} menor de 10 anos`)*/

// Atividade - 10
/*
let largura = parseInt(prompt("Digite a largura: "));
let comprimento = parseInt(prompt("Digite o comprimento: "));
let area = 0;

area = largura * comprimento;

console.log(`A area é ${area}m²`);

if (area < 100){
    console.log(`Terreno Popular.`);
} else if (area >= 100 && area < 500){
    console.log(`Terreno Master.`);
} else {
    console.log(`Terreno VIP.`)
}
*/

//Atividade - 11
/*
let parcela = 0
let precoNormal = parseInt(prompt("Digite o preço do produto: "));
console.log('-----------------Condição de pagamento-----------------')
console.log('1- À vista em dinheiro ou cheque, recebe 10% de desconto')
console.log('2- À vista no cartão de crédito, recebe 15% de desconto')
console.log('3- Em duas vezes, preço normal de etiqueta sem juros')
console.log('4- Em duas vezes, preço normal de etiqueta mais juros de 10%')
let condicaoPagamento = parseInt(prompt("Digite a condição desejada: "));
switch(condicaoPagamento){
    case 1:
        precoNormal = precoNormal*0.9
        console.log(`O valor do produto com desconto é de R$ ${precoNormal.toFixed('2')}`)
        break;
    
    case 2:
        precoNormal = precoNormal*0.85
        console.log(`O valor do produto com desconto é de R$ ${precoNormal.toFixed('2')}`)
        break;

    case 3:
        parcela = precoNormal/2
        console.log(`O valor do produto é de R$ ${precoNormal.toFixed('2')} em duas parcelas de R$ ${parcela.toFixed('2')}`)
        break;

    case 4:
        precoNormal = precoNormal*1.1
        parcela = precoNormal/2
        console.log(`O valor do produto com acrescimo é de R$ ${precoNormal.toFixed('2')} em duas parcelar de R$ ${parcela.toFixed('2')}`)
        break;

    default:
        console.log('Opção Inválida');
}
*/

// Atividade - 12
/*
let altura = parseFloat(prompt(`Digite sua altura: `));
let sexo = prompt(`Digite seu sexo: `);
let imcH = 0;
let imcM = 0;

imcH = (72.7 * altura) - 58;
imcM = (62.1 * altura) - 44.7;

if (sexo === 'M'){
    console.log(`Seu peso ideal é: ${imcH}`);
} else {
    console.log(`Seu peso ideal é: ${imcM}`);
}*/

// Atividade - 13
/*
let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));
let result =0;
console.log('-----------------Operação-----------------')
console.log('1- Soma')
console.log('2- Subtração')
console.log('3- Divisão')
console.log('4- Multiplicação')
let condicaoPagamento = parseInt(prompt("Digite a condição desejada: "));
switch(condicaoPagamento){
    case 1:
        result = numero1 + numero2;
        console.log(`O valor da soma entre ${numero1} e ${numero2} é: ${result}`)
        break;
    
    case 2:
        result = numero1 - numero2;
        console.log(`O valor da subtração entre ${numero1} e ${numero2} é: ${result}`)
        break;

    case 3:
        result = numero1 / numero2;
        console.log(`O valor da divisão entre ${numero1} e ${numero2} é: ${result}`)
        break;

    case 4:
        result = numero1 * numero2;
        console.log(`O valor da multiplicação entre ${numero1} e ${numero2} é: ${result}`)
        break;

    default:
        console.log('Opção Inválida');
}
*/

// Atividade - 14
/*
let peso = parseInt(prompt("Digite seu peso: "));
let altura = parseInt(prompt("Digite sua altura: "));
let result = peso/ (altura*altura) ;

if(result < 18.5){
    console.log('Abaixo do peso. Vá comer um hamburguer.')
}else if (result >= 18.5 && result < 24.9){
    console.log('Peso ideal. Mandou bem.')
}else if(result >= 25 && result < 29.9){
    console.log('Excesso de Peso. Partiu comer algace?')
}else{
    console.log('Obesidade. Vai ter que entrar na faca.')
}
*/

// Atividade - 15

function calcularNotas(valor) {
    const notas = [100, 50, 20, 10, 5, 2, 1];
    const distribuicao = {};

    for (let nota of notas) {
        distribuicao[nota] = Math.floor(valor / nota);
        valor %= nota;
    }

    return distribuicao;
}

function realizarSaque() {
    let valor = parseFloat(prompt('Digite o valor do saque (sem casas decimais): '));

    if (isNaN(valor) || !Number.isInteger(valor)) {
        console.log('Valor inválido. Por favor, digite um valor inteiro.');
        return;
    }

    const distribuicaoNotas = calcularNotas(valor);

    console.log('Distribuição das notas:');
    for (let nota in distribuicaoNotas) {
        if (distribuicaoNotas[nota] > 0) {
            console.log(`${distribuicaoNotas[nota]} nota(s) de R$ ${nota},00`);
        }
    }
}

realizarSaque();