import style from './Footer.module.css'

export function Footer(props){
    
    return(
        <footer className={style.footer}>
            <h1>rodape da pagina</h1>
            <p>{props.logo} <br />
            {props.dados} <br />
            {props.email}<br /></p>
        </footer>
    )
}
