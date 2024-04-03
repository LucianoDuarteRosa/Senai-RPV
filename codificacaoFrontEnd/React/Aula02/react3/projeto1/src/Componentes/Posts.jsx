import styles from './Posts.module.css'

export function Posts(){
   return(
    <article className={styles.posts}>
        <header>
            <div className={styles.autor}>
                <img className={styles.avatar} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />
                <div className={styles.autorInfo}>
                    <strong>
                    Técnico do Projeto
                        <span> 
                        Web Developer
                        </span>
                    </strong>
                </div>

            </div>
            <time title='01/04/2024' dateTime='01/04/2024'>Publicado a 1 hora</time>
        </header>

        <div className={styles.content}>
            <p>Fala galera!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe dolorum aliquid similique doloremque omnis praesentium alias perferendis nemo voluptatem accusamus, veritatis voluptatibus adipisci cum ducimus reiciendis placeat amet animi.</p>
            <p><a href="#">Web.design/projeto</a></p>
            <p><a href="#">#novoprojeto</a></p>

        </div>

        <form className={styles.commentsForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário' />
         
         <div>
            <button type='submit'>Comentar</button>
         </div>
         </form>

    </article>
   )
}