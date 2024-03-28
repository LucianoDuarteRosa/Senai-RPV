import style from './SectionVantagens.module.css'

export function SectionVantagens(props){

    return(
        <section className={style.section2}>
            <h1>{props.titulo}</h1>
            <ul>
                <li>
                Reutilização de Componentes: React promove a reutilização de componentes, permitindo que os desenvolvedores dividam a interface de usuário em componentes pequenos e independentes. Esses componentes podem ser facilmente reutilizados em diferentes partes do aplicativo, reduzindo a redundância de código e facilitando a manutenção.
                </li>
                <li>
                Performance Aprimorada com Virtual DOM: O Virtual DOM do React oferece um desempenho superior ao atualizar o DOM real apenas quando necessário. Ao fazer alterações na interface do usuário, o React compara o Virtual DOM com o DOM real e aplica apenas as alterações necessárias, minimizando o tempo de processamento e melhorando a eficiência geral do aplicativo.
                </li>
                <li>
                Desenvolvimento Declarativo: React adota uma abordagem declarativa para construir interfaces de usuário, onde os desenvolvedores especificam como a interface deve ser em diferentes estados. Isso simplifica a lógica de programação, tornando mais fácil entender como os componentes se comportam em resposta a diferentes eventos e estados de aplicativos.
                </li>
                <li>
                Ecossistema Rico e Comunidade Ativa: React possui uma vasta comunidade de desenvolvedores e uma ampla gama de bibliotecas e ferramentas disponíveis. Isso inclui o Redux para gerenciamento de estado, React Router para navegação, e uma infinidade de componentes e bibliotecas de terceiros que podem acelerar o desenvolvimento e adicionar funcionalidades avançadas aos aplicativos.
                </li>
                <li>
                Suporte para Renderização no Lado do Servidor: React oferece suporte para renderização no lado do servidor (SSR), o que melhora a velocidade de carregamento inicial das páginas e melhora a indexação do mecanismo de busca. Isso é especialmente útil para aplicativos que exigem uma melhor experiência de usuário e SEO.
                </li>
                <li>
                Em resumo, React oferece uma abordagem eficiente e flexível para o desenvolvimento de interfaces de usuário modernas, com vantagens significativas em termos de desempenho, reutilização de código e manutenção do aplicativo. Sua popularidade crescente e vasto ecossistema o tornam uma escolha atraente para desenvolvedores em busca de soluções robustas e escaláveis para suas aplicações web.
                </li>
            </ul>
        </section>
    )
}