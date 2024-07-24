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
    
    fazerCalculo(entradaDados());
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
    }else if (terreno.area >= 100 && terreno.area <= 500){
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é TERRENO MASTER.`);
    }else{
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é TERRENO VIP.`);
    };
};

classificacaoTerreno(entradaDados());
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

classificacaoPessoa(entradaDados());
*/




//--------------------------------------------------------------- AULA 04 --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
/*1. Utilizando tratamento de erros: Crie um programa que receba dois números como parâmetros e retorna a divisão do primeiro pelo segundo.
Use try-catch para lidar com o caso em que o segundo número é zero e imprima uma mensagem de erro apropriada.*/

/*
let nun1 = 0;
let nun2 = 0;

while (true) {
    nun1 = parseFloat(prompt("Digite o primeiro número: "))
    if (!isNaN(nun1)) {
        break;
    } else {
        console.log("Por favor, digite um número.");
    };
};

while (true) {
    nun2 = parseFloat(prompt("Digite o segundo número: "))
    if (!isNaN(nun2)) {
        break;
    } else {
        console.log("Por favor, digite um número.");
    };
};

try{
    if(nun2 === 0){
        throw new Error('Valor da divisão não pode ser 0.');
    }else{
        console.log(`O resultado da divisão entre ${nun1} e ${nun2} é : ${(nun1/nun2).toFixed('2')}`)
    }
}catch(e){
    console.error(e.message)
}
*/
/*
let nun1 = 10;
let nun2 = 0;

try{
    if(nun2 === 0){
        throw new console.erro('Valor da divisão não pode ser 0.');
    }else{
        console.log(`O resultado da divisão entre ${nun1} e ${nun2} é : ${(nun1/nun2).toFixed('2')}`)
    }
}catch(e){
    console.error(console.log(e.message))
}
*/
//--------------------------------------------------------------------------------------------------------------------------------------------
/*2. Utilizando tratamento de erros: Crie um programa que receba um array de números e um índice como argumentos e retorna o elemento do array no índice especificado. 
Utilize try-catch para lidar com o caso em que o índice fornecido está fora dos limites do array e imprima uma mensagem de erro apropriada.*/

/*
let array = [1, 5, 6, 9, 10, 3, 4];
let indice = 3; 

try{
    if(array[indice] === undefined){
        throw new Error('Indice não existe no array.')
    }else{
        console.log("o valor no indice é : " + array[indice])
    }
}catch(e){
    console.error(e.message)
}

*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*3. Utilizando tratamento de erros: Crie um programa que leia os dados de uma pessoa: 
nome, sobrenome, CPF (11 caracteres), sexo (M, F, O), data de nascimento (Formato Data), endereço e telefone.
Valide os dados recebidos e exiba no console. 
Utilize try-catch para lidar com o caso em que os dados não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada.*/

/*
let pessoa = {}
pessoa.nome = prompt("Digite o seu nome: ");
pessoa.sobrenome = prompt("Digite o seu sobrenome: ");
while (true) {
    try{
        pessoa.cpf = parseInt(prompt("Digite o seu cpf: "));
        if (!isNaN(pessoa.cpf)) {
            break;
        } else {
            throw new Error("Por favor, digite somente números.");
        }
    }catch(error){
        console.log('Por favor, digite somente números.')
    }
    
}

while (true) {
    try{
        pessoa.sexo = prompt("Digite seu sexo (M-masculino, F-feminino, O-outros?) :").toUpperCase();
        if (pessoa.sexo === 'M' || pessoa.sexo === 'F' || pessoa.sexo === 'O') {
            break;
        } else {
            throw new Error("Por favor, digite 'M' para masculino, 'F' para feminino ou 'O' para outros.");
        }
    }catch(error){
        console.log("Por favor, digite 'M' para masculino, 'F' para feminino ou 'O' para outros.")
    }
    
}

while (true) {
    try {
        let dataNascimento = prompt("Digite sua data de nascimento (dd/mm/yyyy):");
        let partesData = dataNascimento.split('/');

        if (partesData.length === 3) {
            let dia = parseInt(partesData[0]);
            let mes = parseInt(partesData[1]);
            let ano = parseInt(partesData[2]);

            if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
                if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && ano < 2025) {
                    pessoa.dataNascimento = new Date(ano, mes, dia); 
                    break;
                } else {
                    throw new Error("Data inválida.");
                }
            } else {
                throw new Error("Data inválida.");
            }
        } else {
            throw new Error("Formato de data inválido.");
        }
    } catch (error) {
        console.log('Data inválida. Por favor, tente novamente.');
    }
}  

pessoa.endereco = prompt("Digite o seu endereço: ");

while (true) {
    try{
        pessoa.telefone = parseInt(prompt("Digite seu telefone: "));
        if (!isNaN(pessoa.telefone)) {
            break;
        } else {
            throw new Error("Telefone Inválido");
        }
    }catch(error){
        console.log('Telefone Inválido.')
    }
}

console.log(pessoa)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*4. Utilizando tratamento de erros: Crie um programa que leia a largura e o comprimento de um terreno retangular, 
calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP
Utilize try-catch para lidar com o caso em que os dados (largura e comprimento) não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada.*/	

/*
function entradaDados(){
    let terreno = {};

    while (true) {
        try{
            terreno.largura = parseInt(prompt("Digite a largura: "));
            if (!isNaN(terreno.largura)) {
                break;
            } else {
                throw new Error("Digite uma largura válida.");
            }
        }catch(error){
            console.log("Digite uma largura válida.")
        }
    };

    while (true) {
        try{
            terreno.comprimento = parseInt(prompt("Digite o comprimento: "));
            if (!isNaN(terreno.comprimento)) {
                break;
            } else {
                throw new Error("Digite uma comprimento válido.");
            }
        }catch(error){
            console.log('Digite uma comprimento válido.')
        }
    }

    terreno.area = terreno.comprimento * terreno.largura
    return terreno;
};

function classificacaoTerreno(terreno){
    if(terreno.area < 100){
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é POPULAR.`);
    }else if (terreno.area >= 100 && terreno.area <= 500){
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é TERRENO MASTER.`);
    }else{
        console.log(`A área do terreno é de ${terreno.area.toFixed(0)}. O seu terreno é TERRENO VIP.`);
    };
};

classificacaoTerreno(entradaDados());
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*5. Utilizando função: Tendo como dados de entrada o peso (em quilogramas) e a altura (em metros) de uma pessoa, crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
- IMC >= 30 Kg/m²: Obesidade
Utilize try-catch para lidar com o caso em que os dados (peso e altura) não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada.*/

/*
function entradaDados(){
    let pessoa = {};

    while (true) {
        try{
            pessoa.altura = parseFloat(prompt("Digite sua altura(m): "))
            if (!isNaN(pessoa.altura)) {
                break;
            } else {
                throw new Error('Por favor, digite uma altura válida.')
            };
        }catch(error){
            console.log("Por favor, digite uma altura válida.");
        }
    };

    while (true) {
        try{
            pessoa.peso = parseFloat(prompt("Digite seu peso(kg): "))
            if (!isNaN(pessoa.peso)) {
                break;
            } else {
                throw new Error('Por favor, digite um peso válido.')
            };
        }catch(error){
            console.log("Por favor, digite um peso válido.");
        }
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

classificacaoPessoa(entradaDados());
*/




//--------------------------------------------------------------- AULA 05 --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
/*1.Crie um programa que leia os dados de um aluno: 
    nome, sobrenome, CPF (11 digitos), sexo (M-Masculino, F-Feminino, O-Outros), 
    data de nascimento, endereço e telefone (Formato (032) 0 0000-0000) e exiba no console.*/
/*
let pessoa = {}

while (true) {
            try{
                pessoa.nome = prompt("Digite o seu nome: ");
                let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/; 

                if (regexNome.test(pessoa.nome)) {
                    break;
                } else {
                    throw new Error('Por favor, digite um nome válido.')
                };
            }catch(error){
                console.log("Por favor, digite um nome válido.");
            }
};

while (true) {
    try{
        pessoa.sobrenome = prompt("Digite o seu sobrenome: ");
        let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/; 

        if (regexNome.test(pessoa.sobrenome)) {
            break;
        } else {
            throw new Error('Por favor, digite um nome válido.')
        };
    }catch(error){
        console.log("Por favor, digite um nome válido.");
    }
};

while (true) {
    try{
        pessoa.cpf = prompt("Digite o seu cpf: ");
        if (/\d{11}/.test(pessoa.cpf)) {
            if(pessoa.cpf.length === 11){
                break;
            }else{
                console.log("Por favor, digite somente 11 números.")
            } 
        } else {
            throw new Error("Por favor, digite somente números e 11 digitos.");
        }
    }catch(error){
        console.error(error.message)
    }
}

while (true) {
    try{
        pessoa.sexo = prompt("Digite seu sexo (M-masculino, F-feminino, O-outros?) :").toUpperCase();
        if (pessoa.sexo === 'M' || pessoa.sexo === 'F' || pessoa.sexo === 'O') {
            break;
        } else {
            throw new Error("Por favor, digite 'M' para masculino, 'F' para feminino ou 'O' para outros.");
        }
    }catch(error){
        console.log("Por favor, digite 'M' para masculino, 'F' para feminino ou 'O' para outros.")
    }
    
}

while (true) {
    try {
        let dataNascimento = prompt("Digite sua data de nascimento (dd/mm/yyyy):");

        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
            let partesData = dataNascimento.split('/');
            let dia = parseInt(partesData[0]);
            let mes = parseInt(partesData[1]);
            let ano = parseInt(partesData[2]);

            if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
                if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && ano < 2025) {
                    pessoa.dataNascimento = new Date(ano, mes, dia); 
                    break;
                } else {
                    throw new Error("Data inválida.");
                }
            } else {
                throw new Error("Data inválida.");
            }
        } else {
            throw new Error("Formato de data inválido.");
        }
    } catch (error) {
        console.log('Data inválida. Por favor, tente novamente.');
    }
}  

pessoa.endereco = prompt("Digite o seu endereço: ");

while (true) {
    try{
        pessoa.telefone = prompt("Digite seu telefone: ");
        let tel = /\(\d{2,3}\)\d{4,5}-\d{4}/;
        if (tel.test(pessoa.telefone)) {
            break;
        } else {
            throw new Error("Telefone Inválido");
        }
    }catch(error){
        console.log('Telefone Inválido.')
    }
}

console.log(pessoa)

*/

//--------------------------------------------------------------------------------------------------------------------------------------------
/*2.Crie um programa que leia o número de alunos de uma turma. 
    Após isso, o programa deve ler as notas das 2 avaliações de cada aluno e calcular e exibir: 
    o nome, a média de cada aluno e se o aluno foi aprovado ou reprovado. 
    Considere como média para aprovação 60 pontos ou mais. */
/*
    let turma = [];
    let quantidadeAlunos =  0;
    while (true) {
        try{
            quantidadeAlunos = parseInt(prompt("Qual a quantidade de alunos da turma: "))
            if (!isNaN(quantidadeAlunos)) {
                break;
            } else {
                throw new Error('Por favor, digite um valor válido.')
            };
        }catch(error){
            console.log("Por favor, digite um valor válido.");
        }
    };

    for(let i = 0; i < quantidadeAlunos; i++){
        let aluno = {};
        console.log("------------------------------------------")

        while (true) {
            try{
                aluno.nome = prompt("Digite o nome do aluno: ")
                let regexNome = /^[a-zA-ZÀ-ÿ\s']{3,}$/; 

                if (regexNome.test(aluno.nome)) {
                    break;
                } else {
                    throw new Error('Por favor, digite um nome válido.')
                };
            }catch(error){
                console.log("Por favor, digite um nome válido.");
            }
        };

        while (true) {
            try{
                aluno.nota1 = parseInt(prompt(`Qual a primeira nota do ${aluno.nome} (0 a 100) :`))
                if (!isNaN(aluno.nota1)) {
                    if(aluno.nota1 > 0 && aluno.nota1 <= 100){
                        break;
                    }else{
                        throw new Error('Por favor, digite uma nota válida.')
                    }
                } else {
                    throw new Error('Por favor, digite uma nota válida.')
                };
            }catch(error){
                console.log("Por favor, digite uma nota válida.");
            }
        };

        while (true) {
            try{
                aluno.nota2 = parseInt(prompt(`Qual a segunda nota do ${aluno.nome} (0 a 100) :`))
                if (!isNaN(aluno.nota2)) {
                    if(aluno.nota2 > 0 && aluno.nota2 <= 100){
                        break;
                    }else{
                        throw new Error('Por favor, digite uma nota válida.')
                    }
                } else {
                    throw new Error('Por favor, digite uma nota válida.')
                };
            }catch(error){
                console.log("Por favor, digite uma nota válida.");
            }
        };

        aluno.media = ((aluno.nota1 + aluno.nota2)/ 2).toFixed('2');

        if(aluno.media >= 60){
            aluno.classificacao = "aprovado"
        }else{
            aluno.classificacao = "reprovado"
        }
        turma.push(aluno);
    };
    console.log();

    for(let i = 0; i < turma.length ; i++){
        console.log();
        console.log(`---------------- Aluno ${i +1} ----------------`)
        console.log(`${turma[i].nome} está com a média de ${turma[i].media} está ${turma[i].classificacao}.`);
    }
*/


//--------------------------------------------------------------------------------------------------------------------------------------------
/*3.Crie um programa que leia os dados de um grupo de 10 pessoas: 
    nome, sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros), 
    idade e estado civil (C-Casado(a), S-Solteiro(a) e V-Viúvo(a)), 
    exibindo ao final do programa: 
        - A média de idade do grupo 
        - A soma de todas as idades do grupo
        - De quem foi a maior idade lida, exiba todas as informações da pessoa
        - De quem foi a menor idade lida, exiba todas as informações da pessoa
        - Quantas pessoas tem mais de 20 anos, exiba todas as informações dessas pessoas 
        - Quantas pessoas tem menos de 10 anos, exiba todas as informações dessas pessoas
        - Quantas pessoas do sexo masculino, exiba todas as informações dessas pessoas 
        - Quantas pessoas do sexo feminino, exiba todas as informações dessas pessoas
        - Quantas pessoas se absteram de dizer o sexo ou marcaram outros, 
        exiba todas as informações dessas pessoas
        - Quantas pessoas são casadas, exiba todas as informações dessas pessoas 
        - Quantas pessoas são solteiras, exiba todas as informações dessas pessoas 
        - Quantas pessoas são viúvas, exiba todas as informações dessas pessoas */
/*
    let pessoas = [];
    let quantidadePessoa = 0;

    while (true) {
        try{
            quantidadePessoa = parseInt(prompt("Qual a quantidade de pessoas: "))
            if (!isNaN(quantidadePessoa)) {
                break;
            } else {
                throw new Error('Por favor, digite um valor válido.')
            };
        }catch(error){
            console.log("Por favor, digite um valor válido.");
        }
    };

    for(let i = 0; i < quantidadePessoa ; i++){
        let pessoa = {}
        
        while (true) {
            try{
                pessoa.nome = prompt("Digite o nome da pessoa: ")

                if (/^[a-zA-ZÀ-ÿ\s']{3,}$/.test(pessoa.nome)) {
                    break;
                } else {
                    throw new Error('Por favor, digite um nome válido.')
                };
            }catch(error){
                console.error(error.message);
            }
        };
        
        while (true) {
            try{
                pessoa.sexo = prompt("Sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros): ");

                if (/(M|F|P|O)/i.test(pessoa.sexo)) {
                    break;
                } else {
                    throw new Error('Por favor, digite um caracter válido.')
                };
            }catch(error){
                console.error(error.message);
            }
        };
        
        while (true) {
            try{
                pessoa.idade = parseInt(prompt(`Qual a idade do(a) ${pessoa.nome}: `));
                if (!isNaN(pessoa.idade)) {
                    break;
                } else {
                    throw new Error('Por favor, digite um valor válido.')
                };
            }catch(error){
                console.error(error.message);
            }
        };

        while (true) {
            try{
                pessoa.estadoCivil = prompt("Estado cívil (C-Casado(a), S-Solteiro(a) e V-Viúvo(a)): ");

                if (/^[CSV]$/i.test(pessoa.estadoCivil)) {
                    break;
                } else {
                    throw new Error('Por favor, digite um caracter válido.')
                };
            }catch(error){
                console.error(error.message);
            }
        };

        pessoas.push(pessoa);
    }

    
    function validacoes(){
        let base1 = { 
            nome : "",
            sexo : "",
            idade : 0,
            estadoCivil :""
        };
        let base2 = { 
            nome : "",
            sexo : "",
            idade : 0,
            estadoCivil :""
        };
        let somaIdade = 0;
        let maiorIdade = base1;
        let menorIdade = base2;
        menorIdade.idade = 100;
        let pessoasMais20 = [];
        let pessoasMenos10 = [];
        let sexoMasculino = [];
        let sexoFeminino = [];
        let sexoOutros = [];
        let casados = [];
        let solteiros = [];
        let viuvos = [];

        for(let i = 0; i < pessoas.length ; i++){
            somaIdade += pessoas[i].idade;
            let pessoa ={
                nome : pessoas[i].nome,
                sexo : pessoas[i].sexo,
                idade : pessoas[i].idade,
                estadoCivil : pessoas[i].estadoCivil
            }

            if(pessoas[i].idade > maiorIdade.idade){
                maiorIdade = pessoa;
            }

            if(pessoas[i].idade < menorIdade.idade || menorIdade.idade === 0){
                menorIdade = pessoa;
            }

            if(pessoas[i].idade > 20){
                pessoasMais20.push(pessoa)
            }

            if(pessoas[i].idade < 10){
                pessoasMenos10.push(pessoa)
            }

            if(pessoas[i].sexo === "M"){
                sexoMasculino.push(pessoa)
            }

            if(pessoas[i].sexo === "F"){
                sexoFeminino.push(pessoa)
            }

            if(pessoas[i].sexo === "P" || pessoas[i].sexo === "O"){
                sexoOutros.push(pessoa)
            }

            if(pessoas[i].estadoCivil === "C"){
                casados.push(pessoa)
            }

            if(pessoas[i].estadoCivil === "S"){
                solteiros.push(pessoa)
            }

            if(pessoas[i].estadoCivil === "V"){
                viuvos.push(pessoa)
            }
        }

        let idadeMedia = somaIdade/pessoas.length 

        console.log(`A média de idade do grupo é: ${idadeMedia}`);
        console.log(`A soma de todas as idades do grupo é: ${somaIdade}`);
        console.log(`De quem foi a maior idade lida: Nome: ${maiorIdade.nome}, Idade: ${maiorIdade.idade}, sexo: ${maiorIdade.sexo}, estado cívil: ${maiorIdade.estadoCivil}`);
        console.log(`De quem foi a menor idade lida: Nome: ${menorIdade.nome}, Idade: ${menorIdade.idade}, sexo: ${menorIdade.sexo}, estado cívil: ${menorIdade.estadoCivil}`);
        console.log(`Quantas pessoas tem mais de 20 anos:`);
        console.log(pessoasMais20);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas tem menos de 10 anos:`);
        console.log(pessoasMenos10);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas do sexo masculino:` );
        console.log(sexoMasculino);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas do sexo feminino:`);
        console.log(sexoFeminino);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas se absteram de dizer o sexo ou marcaram outros: `);
        console.log(sexoOutros);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas são casadas:`);
        console.log(casados);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas são solteiras:`);
        console.log(solteiros);
        console.log("------------------------------------------------------------")
        console.log(`Quantas pessoas são viúvas:`);
        console.log(viuvos);
        console.log("--------------------Fim.. Amem \o/-----------------------------")
}   

    validacoes();
*/