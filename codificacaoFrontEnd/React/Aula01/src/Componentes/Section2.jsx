import style from './Section2.module.css'

export function Section2(props){

    return(
        <section className={style.section2}>
            <h2>{props.informacaoTitulo}</h2>
            <h4>{props.informacaoSubTitulo}</h4>
            <p>{props.informacao}</p>
        </section>
    )
}