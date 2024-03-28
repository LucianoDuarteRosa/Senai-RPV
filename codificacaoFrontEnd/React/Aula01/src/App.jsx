import {Routes, Route} from "react-router-dom"
import { Footer } from "./Componentes/Footer"
import { Header } from "./Componentes/Header"
import { Section } from "./Componentes/Section"
import { Section2 } from "./Componentes/Section2"


function App() {
  return (
    <div>
      <Header 
        nomeCliente='Luciano'
        cidadeCliente='Cataguases'
        ufCidade = 'Minas Gerais'/>

      <Routes>
        <Route path='/' element={<Section informacaoTitulo='não tem nome' informacaoSubTitulo='nada de novo'        informacao='texto aleatorio'/>}>
        </Route>
        <Route path='/section2' element={<Section2 informacaoTitulo='não tem nomesadfsadf' informacaoSubTitulo='nada de novosdfsadf'       informacao='texto aleatoriosdff'/>}>
        </Route>
      </Routes>
      
      <Footer
        logo='mastercard'
        dados='tel:*** *** ***'
        email = 'exemplo@exemplo.com'/>
    </div>
  )
}

export default App
