import style from './Section.module.css'
import { Link } from 'react-router-dom'

export function Section(){

    return(
        <section className={style.section}>
            <h1>Formação</h1>
            <ul>
                <li>Sistema de Informação - 6° período - cursando</li>
                <li>Desenvolvedor FullStack - cursando</li>
                <li>Git e Github - 2024</li>
                <li>C# COMPLETO POO - 2024</li>
                <li>MYSQL - 2023.</li>
                <li>JAVA Básico - 2023.</li>
                <li>JAVA Básico ao avançado - 2023.</li>
                <li>POWER BI Expert - 2023.</li>
                <li>HTML, CSS e JavaScript - 2023.</li>
                <li>JavaScript - 2023</li>
            </ul>
        </section>
    )
}