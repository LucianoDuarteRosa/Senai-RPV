import './global.styles.css'
import { Header } from './Componentes/Header'
import { Sidebar } from './Componentes/Sidebar'
import { Posts } from './Componentes/Posts'
import styles from './Componentes/App.module.css'
import { Comments } from './Componentes/Comments'


function App() { 

  return (
    <>

    <div >
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
    

    <main>
     <Posts />

     <Posts />

     <Comments />
     <Comments />
     <Comments />
    </main>
    </div>
    </div>

    </>
  )
}

export default App

