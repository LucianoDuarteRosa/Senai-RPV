var titulo = document.getElementById('titulo');
var text = document.getElementById('text');

/*function changeText() {   
    text.value = 'tem nada de novo por aqui'; 
    titulo.innerText = 'agora foi atoa'
}*/

function changeText() {   
    for (let int = 0; int < 5; int++) {
        const teste = document.getElementById('teste');
        const ul = teste.querySelector('ul');
        let newli = document.createElement('li');
        newli.innerHTML = 'novo item';
        ul.appendChild(newli);     
    }
}
