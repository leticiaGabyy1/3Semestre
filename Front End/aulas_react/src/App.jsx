import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import Sobre from './pages/sobre'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'
import Inicio from './pages/Inicio'
import Detalhes from './pages/Detalhes'
import Contato from './pages/Contato'
import Filmes from './pages/Filmes'

function App  () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Principal/>}/>
      <Route path='/Sobre' element={<Sobre/>} />
      <Route path='/Perfil/:nome' element={<Perfil/>} />
      <Route path='/inicio' element={<Inicio/>} />
      <Route path='/Detalhes' element={<Detalhes/>} />
      <Route path='/Contato' element={<Contato/>} />
      <Route path='/filmes/:nome' element={<Filmes/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
