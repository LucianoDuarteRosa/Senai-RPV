import style from './Section.module.css'
import { Link } from 'react-router-dom'

export function Section(props){

    return(
        <section className={style.section}>
            <h2>{props.informacaoTitulo}</h2>
            <h4>{props.informacaoSubTitulo}</h4>
            <p>{props.informacao}</p>
            <p><Link to ='./Section2'>Outros dados</Link></p>
        </section>
    )
}