const prompt = require('prompt-sync')();

//--------------------------------------------------------------- AULA 01 --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
/*1. Utilizando objeto: Crie um programa que leia os dados de um usuário: nome, sobrenome, CPF, sexo, data de nascimento,
endereço e telefone e exiba no console.*/
/*
    let usuario = {};

    usuario.nome = prompt("Digite seu nome: ");
    usuario.sobrenome = prompt("Digite seu sobrenome: ");
    usuario.cpf = parseInt(prompt("Digite seu CPF: "));
    usuario.sexo = prompt("Digite seu sexo: ");
    usuario.dataNascimento = prompt("Digite sua data de nascimento: ");
    usuario.endereco = prompt("Digite seu endereço: ");
    usuario.telefone =  prompt("Digite seu telefone: ");

    console.log(usuario)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*2. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula, disciplina, nota.
        - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
        - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
        exiba no console “Em recuperação” 
        - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
        criar nova propriedade chamada situacao para o aluno.*/
/*
    let aluno = {
        nome : 'luciano',
        matricula: 11324,
        disciplina: 'matemática',
        nota: 40
    }
    let situacao = ''

    if(aluno.nota >= 60){
        console.log('Aprovado');
        situacao = 'Aprovado';
    }else if(aluno.nota <60 && aluno.nota >= 50){
        console.log('Em recuperação');
        situacao = 'Em recuperação';
    }else{
        console.log('Reprovado');
        situacao = 'Reprovado';
    }
    aluno.situacao = situacao;
    console.log(aluno);
*/


//--------------------------------------------------------------- AULA 02 --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
/*ATIVIDADE 1. Utilizando arrays: A imobiliária ABC vende apenas terrenos retangulares. 
Crie um programa para ler as dimensões de um terreno e depois exibir a área do terreno. */
/*
    let terreno= [];
    
    terreno[0] = parseInt(prompt("Digite a altura: "));
    terreno[1] = parseInt(prompt("Digite o comprimento: "));

    function areaTotal(terreno){
        return terreno[0]*terreno[1]
    }

    console.log(areaTotal(terreno));
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*ATIVIDADE 2. Utilizando arrays: Crie um programa que leia o nome e o preço de 8 produtos. 
No final, mostre no console qual foi o nome e preço do maior e qual foi o nome e preço do menor preço digitados.*/
/*
    let listaProdutos = []; 

    for(let i = 0; i < 8; i++){
        let produto = {};
        produto.nome = prompt("Digite o nome do produto: ");
        produto.valor = parseFloat(prompt("Digite o valor: "));
        listaProdutos.push(produto)
    }
    
    listaProdutos.sort(function compararPorPreco(a, b) {
        return a.valor - b.valor;
    })

    listaProdutos.sort
    console.log("Produto mais barato:");
    console.log("Nome:", listaProdutos[0].nome);
    console.log("Valor:", listaProdutos[0].valor);

    console.log("Produto mais caro:");
    console.log("Nome:", listaProdutos[listaProdutos.length - 1].nome);
    console.log("Valor:", listaProdutos[listaProdutos.length - 1].valor);

*/
//--------------------------------------------------------------------------------------------------------------------------------------------
/*ATIVIDADE 3. Utilizando arrays:  Crie um programa que leia o nome, a idade e o sexo de 5 pessoas, 
mostrando no final: 
a) Quantos homens foram cadastrados 
b) Quantas mulheres foram cadastradas 
c) A média de idade do grupo 
d) A média de idade dos homens 
e) Quantas mulheres tem mais de 20 anos */
/*
    let cadastro = [];

    for (let i = 0; i < 5; i++){
        let pessoa = {};
        pessoa.nome = prompt("Digite seu nome: ");
        while (true) {
            pessoa.idade = parseInt(prompt("Digite sua idade: "));
            if (!isNaN(pessoa.idade)) {
                break;
            } else {
                console.log("Por favor, digite uma idade válida.");
            }
        }
        while (true) {
            pessoa.sexo = prompt("Digite seu sexo (M - masculino / F - feminino): ").toUpperCase();
            if (pessoa.sexo === 'M' || pessoa.sexo === 'F') {
                break;
            } else {
                console.log("Por favor, digite 'M' para masculino ou 'F' para feminino.");
            }
        }
        cadastro.push(pessoa);
    }   

    let homensCad = 0;
    let idadeMediaHomens = 0;
    let mulheresCad = 0;
    let mulhersMais20 = 0;
    let idadeTotal = 0;

    for(let i = 0; i < cadastro.length; i++){
        idadeTotal += cadastro[i].idade;
        if(cadastro[i].sexo === "M"){
            homensCad++;
            idadeMediaHomens += cadastro[i].idade;
        };

        if(cadastro[i].sexo === "F"){
            mulheresCad++;
            if(cadastro[i].idade > 20){
                mulhersMais20++;
            };
        };
    }

    let idadeMedia = idadeTotal / cadastro.length;
    let mediaIdadeHomens = idadeMediaHomens / homensCad;

    console.log("a) Quantidade de homens cadastrados: " + homensCad);
    console.log("b) Quantidade de mulheres cadastradas: " + mulheresCad);
    console.log("c) Média de idade do grupo: " + idadeMedia.toFixed(2));
    console.log("d) Média de idade dos homens: " + mediaIdadeHomens.toFixed(2));
    console.log("e) Quantidade de mulheres com mais de 20 anos: " + mulhersMais20);
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*ATIVIDADE 4. Utilizando arrays: Crie um programa que leia o peso e a altura de 7 pessoas, 
mostrando no final: 
a) Qual foi a média de altura do grupo 
b) Quantas pessoas pesam mais de 90Kg 
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m 
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg. */
/*
    let pesos = [];
    let alturas = [];
    
    for (let i = 0; i < 7; i++) {
        let peso = parseFloat(prompt(`Digite o peso da pessoa ${i + 1} (em Kg):`));
        let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} (em metros):`));
        pesos.push(peso);
        alturas.push(altura);
    }

    let somaAlturas = 0;
    for (let i = 0; i < 7; i++) {
        somaAlturas += alturas[i];
    };

    let mediaAltura = somaAlturas / alturas.length;

    let maisDe90Kg = 0
    for (let i = 0; i < 7; i++) {
        if (pesos[i] > 90 ) {
            maisDe90Kg++;
        }
    };

    let menosDe50KgMenosDe160m = 0;
    for (let i = 0; i < 7; i++) {
        if (pesos[i] < 50 && alturas[i] < 1.60) {
            menosDe50KgMenosDe160m++;
        }
    };

    let maisDe190mMaisDe100Kg = 0;
    for (let i = 0; i < 7; i++) {
        if (alturas[i] > 1.90 && pesos[i] > 100) {
            maisDe190mMaisDe100Kg++;
        }
    }

  
    console.log(`a) A média de altura do grupo é: ${mediaAltura.toFixed(2)}m`);
    console.log(`b) ${maisDe90Kg} pessoas pesam mais de 90Kg`);
    console.log(`c) ${menosDe50KgMenosDe160m} pessoas que pesam menos de 50Kg têm menos de 1.60m`);
    console.log(`d) ${maisDe190mMaisDe100Kg} pessoas que medem mais de 1.90m pesam mais de 100Kg`);
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*ATIVIDADE 5. Utilizando arrays: Crie um programa que leia os dados de um aluno: 
matrícula, nome completo, nome do curso, 5 disciplinas do curso com 5 notas (uma para cada disciplina). 
Ao final, mostre no console a média geral do aluno no curso.*/
/*
let listaAlunos = []; 
let aluno = {};
aluno.nome = prompt("Digite o nome completo do aluno: ");
aluno.curso = prompt("Digite o nome do curso: ");
aluno.disciplina1 = prompt("Digite o nome da 1° disciplina: ");
aluno.notaDisciplina1 = parseFloat(prompt("Digite o nota da 1° disciplina: "));
aluno.disciplina2 = prompt("Digite o nome da 2° disciplina: ");
aluno.notaDisciplina2 = parseFloat(prompt("Digite o nota da 2° disciplina: "));
aluno.disciplina3 = prompt("Digite o nome da 3° disciplina: ");
aluno.notaDisciplina3 = parseFloat(prompt("Digite o nota da 3° disciplina: "));
aluno.disciplina4 = prompt("Digite o nome da 4° disciplina: ");
aluno.notaDisciplina4 = parseFloat(prompt("Digite o nota da 4° disciplina: "));
aluno.disciplina5 = prompt("Digite o nome da 5° disciplina: ");
aluno.notaDisciplina5 = parseFloat(prompt("Digite o nota da 5° disciplina: "));
listaAlunos.push(aluno);

let mediaAluno = (listaAlunos[0].notaDisciplina1 + listaAlunos[0].notaDisciplina2 + listaAlunos[0].notaDisciplina3 + listaAlunos[0].notaDisciplina4 + listaAlunos[0].notaDisciplina5) / 5

console.log(`A média do aluno ${listaAlunos[0].nome} do curso ${listaAlunos[0].curso} é de: ${mediaAluno}`)
*/


//--------------------------------------------------------------- AULA 03 --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
/*1. Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado. 
	Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120*/
/*
    function entradaDados(){
        let valor = parseFloat(prompt("Digite um valor para o calculo: "))
        
        while (true) {
        valor = parseFloat(prompt("Digite um valor para o calculo: "))
        if (!isNaN(valor)) {
            break;
        } else {
            console.log("Por favor, digite um valor válido.");
        }
    }
        return valor;
    };

    function fazerCalculo(valorA){
        let resultString = `O resultado do calculo de ${valorA} é:`;
        let resultValor = 1;

        for(valorA; valorA > 0; valorA--){
            if(valorA == 1){
                resultString += ` 1 = ${resultValor}`
            }else{
                resultValor *= valorA;
                resultString += ` ${valorA} x`
            }
        }
        console.log(resultString);
    };
    
    let valor = entradaDados();
    fazerCalculo(valor);
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*2. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP*/
/*
function entradaDados(){
    let terreno = {};

    while (true) {
        terreno.largura = parseFloat(prompt("Digite a largura do terreno: "))
        if (!isNaN(terreno.largura)) {
            break;
        } else {
            console.log("Por favor, digite uma medida válida.");
        };
    };

    while (true) {
        terreno.comprimento = parseFloat(prompt("Digite a largura do comprimento: "))
        if (!isNaN(terreno.comprimento)) {
            break;
        } else {
            console.log("Por favor, digite uma medida válida.");
        };
    };
    terreno.area = terreno.comprimento * terreno.largura
    return terreno;
};


function classificacaoTerreno(terreno){
    if(terreno.area < 100){
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é POPULAR.`);
    }else if (terreno.area >= 100 && terreno.area < 500){
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é TERRENO MASTER.`);
    }else{
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é TERRENO VIP.`);
    };
};

let terreno = entradaDados();
classificacaoTerreno(terreno);
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*3. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
   e a altura (em metros) de uma pessoa, 
   crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
- IMC >= 30 Kg/m²: Obesidade*/
/*
function entradaDados(){
    let pessoa = {};

    while (true) {
        pessoa.altura = parseFloat(prompt("Digite sua altura(m): "))
        if (!isNaN(pessoa.altura)) {
            break;
        } else {
            console.log("Por favor, digite uma medida válida.");
        };
    };

    while (true) {
        pessoa.peso = parseFloat(prompt("Digite seu peso(kg): "))
        if (!isNaN(pessoa.peso)) {
            break;
        } else {
            console.log("Por favor, digite um peso válido.");
        };
    };
    pessoa.imc = pessoa.peso * (pessoa.altura *2)
    return pessoa;
};

function classificacaoPessoa(pessoa){
    if(pessoa.imc < 18.5){
        console.log(`Abaixo do peso. Vai comer um hamburguer.`);
    }else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.9){
        console.log(`Peso ideal. Não gosto de gente assim.`);
    }else if (pessoa.imc >= 25 && pessoa.imc < 500){
        console.log(`Excesso de Peso. Comer um alface.`);
    }else{
        console.log(`Obesidade. Agora lascou`);
    };
};

let pessoa = entradaDados();
classificacaoPessoa(pessoa);
*/