/*3. Crie um programa que leia o nome e o preço de produtos e exiba as informações desse produto.*/

let produtos = [];

class Produto {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;   
  }
  
  toString() {
    return `Produto: ${this.nome.toUpperCase()} Valor: R$${this.valor.toFixed(2)}`;
  }
}

class ProdutoCereais extends Produto {
  constructor(nome, valor) {
    super(nome, valor);
    this.classificacao = 'CEREAIS';
  }
  
  toString() {
    return `Produto: ${this.nome.toUpperCase()} Valor: R$${this.valor.toFixed(2)} Setor: ${this.classificacao.toUpperCase()}`;
  }
}

class ProdutoPerfumaria extends Produto {
  constructor(nome, valor) {
    super(nome, valor);
    this.classificacao = 'PERFUMARIA';
  }
  
  toString() {
    return `Produto: ${this.nome.toUpperCase()} Valor: R$${this.valor.toFixed(2)} Setor: ${this.classificacao.toUpperCase()}`;
  }
}


function validarProdutos(){
    let produto = document.getElementById('produto').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let select = document.getElementById('select').value;
  
    try{
      if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(produto)) {
        } else {
            throw new Error('Por favor, digite um nome válido.')
      };  
      
      if (!isNaN(valor) && valor > 0) {
        } else {
            throw new Error("Valor inválido.");
      };
      
      if(select == 'cereais'){
        let novoProduto = new ProdutoCereais(produto, valor);
        produtos.push(novoProduto);
      }else if(select == 'perfumaria'){
        let novoProduto = new ProdutoPerfumaria(produto, valor);
        produtos.push(novoProduto);
      }else{
        let novoProduto = new Produto(produto, valor);
        produtos.push(novoProduto);
      }


      atualizarDados(produtos);    


    }catch(error){
      alert(error.message)
    }
  }

  function atualizarDados(produtos){
    let result = '';
    for(let i = 0; i< produtos.length; i++){
      result += `${produtos[i].toString()}</br>`
    }
    
    let retorno = document.getElementById('retornoAqui');
    retorno.innerHTML = result;
    let visibility = document.getElementById('return')
    visibility.style.visibility  = "visible";
  
  }

  function limparDados(){
    let result = document.getElementById('retornoAqui');
    result.innerText = '';
    produtos = [];
    let visibility = document.getElementById('return')
    visibility.style.visibility  = "hidden";
  }