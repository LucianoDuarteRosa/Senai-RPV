import style from'./Header.module.css'

export function Header(props){
    
    return(
        <header className={style.header}>
            <h1>Iniciou a aula de React</h1>
            <p>{props.nomeCliente} <br />
            {props.cidadeCliente} <br />
            {props.ufCidade}<br /></p>
        </header>
    )
}