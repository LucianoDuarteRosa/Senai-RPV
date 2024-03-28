import style from './Footer.module.css'

export function Footer(props){
    
    return(
        <footer className={style.footer}>
            <h2>Dados adicionais</h2><br />
            <span>{props.dados}</span>
            <span>{props.email}</span>
        </footer>
    )
}
