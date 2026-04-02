import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return(
    <header className='navbar'>
      <div className='navbar-conteudo'>
          <Link to= '/' className='navbar-logo'>📈 Renda Fixa</Link>

          <nav className='navbar-links'>
             <Link to='/' className='navbar-link'>🧮 Calculadora</Link>
             <br />
             <Link to='/sobre' className='navbar-link'>ℹ️ Sobre</Link>
          </nav>
      </div>
    </header>
  )
}

export default Navbar