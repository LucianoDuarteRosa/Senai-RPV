import { TrendUp } from 'phosphor-react'
import styles from './Comments.module.css'

export function Comments(){
    return(
        <div className={styles.comments}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />
       <div className={styles.commentsBox}>
        <div className={styles.commentsContent}>
            <header>
                <div className={styles.autorAndTime}>
                    <strong>Técnico do projeto</strong>
                    <time title='02/04/2024' dateTime='2024-04-02'>Cerca de 1h atrás</time>
                    <div>
                        <button title='Excluir comentário'>
                            <Trash />   

                        </button>
                    </div>
                </div>
            </header>

            <p>Parabéns pela realização do curso</p>
        </div>

        <footer>
            <button>
                <TrendUp />
                Gostei
            </button>
        </footer>

       </div>
       
        </div>
    )
}