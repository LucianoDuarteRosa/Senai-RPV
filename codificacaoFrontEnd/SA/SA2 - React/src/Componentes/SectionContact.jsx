import style from './SectionContact.module.css'

export function SectionContact(props){

    return(
        <section className={style.SectionContact}>
            <h2>{props.titulo}</h2>
            <div>
                <p>Endereço: {props.endereco},{props.cidade} - {props.ufCidade} </p>
                <p>E-mail: {props.email} -- Tel: {props.tel}</p>
            </div>
        </section>
    )
}