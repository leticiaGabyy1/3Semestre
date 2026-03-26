import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import Sobre from './pages/sobre'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'

function App  () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Principal/>}/>
      <Route path='/Sobre' element={<Sobre/>} />
      <Route path='/Perfil/:nome' element={<Perfil/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
