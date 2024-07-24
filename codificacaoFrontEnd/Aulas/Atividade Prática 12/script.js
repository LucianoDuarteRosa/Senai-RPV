var texto = document.getElementById('texto');

function addText() {   
    const p = texto.querySelector('p');
    let newp = document.createElement('p');
    newp.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis sapiente repudiandae omnis sit minima assumenda eligendi in, quibusdam ipsa iure vero quos consectetur enim repellat libero aut, totam placeat!';
    p.prepend(newp);       
}

function changeColor() {   
    texto.style.color = 'red';
}

function aumentarFonte() {   
    texto.style.fontSize = '1.5rem';
}