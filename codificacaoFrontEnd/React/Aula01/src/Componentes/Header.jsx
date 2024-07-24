import style from'./Header.module.css'
import { Link } from 'react-router-dom'

export function Header(props){
    
    return(
        <header className={style.header}>
            <h1>Aula de React</h1> <br />
            <span>{props.nomeCliente} -</span>
            <span> {props.cidadeCliente} -</span>
            <span>{props.ufCidade}</span>

            <ul>
                <li><Link to ='./Section' class="link">Home</Link></li>
                <li><Link to ='./SectionVantagens' class="link">Vantagens</Link></li>
                <li><Link to ='./SectionVite' class="link">Vite</Link></li>
                <li><Link to ='./SectionHistory' class="link">Nossa História</Link></li>
                <li><Link to ='./SectionContact' class="link">Contato</Link></li>
            </ul>
        </header>
    )
}
