import style from'./Header.module.css'
import { Link } from 'react-router-dom'
import img from'../assets/logo.png'

export function Header(props){
    
    return(
        <header className={style.header}>
            <div className={style.styleFlex}>
                <h1>Currículo</h1>
                <img src={img} alt="" />
            </div>          
            <ul>
                <li><Link to ='./Section' class="link">Formação</Link></li>
                <li><Link to ='./SectionVantagens' class="link">Experiência</Link></li>
                <li><Link to ='./SectionVite' class="link">Sobre mim</Link></li>
                <li><Link to ='./SectionHistory' class="link">Projetos</Link></li>
                <li><Link to ='./SectionContact' class="link">Contato</Link></li>
            </ul>
        </header>
    )
}
