const BASE_URL = 'https://randomfox.ca/floof/';

const trocaImg = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.image;
    }catch(e) {
        console.log(e.message);
    }
}

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await trocaImg();
    count++;
}

loadImg();

const btn = document.getElementById('trocaImg');
btn.addEventListener('click', loadImg );