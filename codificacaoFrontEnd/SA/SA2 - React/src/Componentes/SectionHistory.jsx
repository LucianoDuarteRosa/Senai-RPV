import style from './SectionHistory.module.css'

export function SectionHistory(props){

    return(
        <section className={style.SectionHistory}>
            <h1>{props.titulo}</h1>
            <p>Era uma vez, em uma cidade movimentada onde a tecnologia reinava supremamente, uma jovem desenvolvedora chamada Sara. Sara era uma entusiasta do desenvolvimento front-end, sempre em busca das últimas e mais eficientes ferramentas para construir aplicações web inovadoras.</p>
            <p>Um dia, enquanto navegava pela vastidão da internet em busca de inspiração, Sara se deparou com algo novo e excitante: o Vite. Intrigada pelas promessas de velocidade e eficiência, ela decidiu mergulhar de cabeça e explorar esta nova ferramenta que estava causando um rebuliço na comunidade de desenvolvimento.</p>
            <p>Empolgada com o potencial do Vite, Sara decidiu integrá-lo ao seu projeto atual, uma aplicação web complexa construída com React. Com apenas alguns cliques e uma configuração mínima, ela rapidamente configurou seu ambiente de desenvolvimento com o Vite, substituindo seu antigo processo de bundling por uma experiência incrivelmente ágil e responsiva.</p>
            <p>À medida que Sara continuava seu trabalho, ela ficava maravilhada com a velocidade com que o Vite reagia a suas mudanças de código. Cada vez que ela salvava um arquivo, o Vite reconstruía apenas o necessário e atualizava instantaneamente o navegador, permitindo que ela visualizasse suas alterações quase que instantaneamente. Não mais esperas intermináveis pelo processo de bundling; agora, o desenvolvimento era rápido, fluido e incrivelmente produtivo.</p>
        </section>
    )
}