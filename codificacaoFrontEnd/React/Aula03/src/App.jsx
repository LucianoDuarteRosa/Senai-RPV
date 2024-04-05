import {Routes, Route} from "react-router-dom"
import { Footer } from "./Componentes/Footer"
import { Header } from "./Componentes/Header"
import { Section } from "./Componentes/Section"
import { SectionVantagens } from "./Componentes/SectionVantagens"
import { SectionVite } from "./Componentes/SectionVite"
import { SectionContact } from "./Componentes/SectionContact"
import { SectionHistory } from "./Componentes/SectionHistory"

function App() {
  return (
    <div>
      <Header 
        nomeCliente='Luciano Duarte'
        cidadeCliente='Cataguases'
        ufCidade = 'Minas Gerais'/>
      <Routes>
        <Route path='' element={<Section />}></Route>
        <Route path='/Section' element={<Section />}></Route>
        <Route path='/SectionVantagens' element={<SectionVantagens />}> </Route>
        <Route path='/SectionVite' element={<SectionVite />}></Route>
        <Route path='/SectionHistory' element={<SectionHistory />}></Route>
        <Route path='/SectionContact' element={<SectionContact endereco='Rua Leogédio Carlos da Silva 182, Vila Reis'
        cidade='Cataguases' ufCidade = 'Minas Gerais' email = 'exemplo@exemplo.com.br' tel='(32)999-999-999'/>}>
        </Route>
      </Routes>

      <Footer
        dados='Tel: (32) 999 999 999'
        email = 'exemplo@exemplo.com'/>
    </div>
  )
}

export default App
