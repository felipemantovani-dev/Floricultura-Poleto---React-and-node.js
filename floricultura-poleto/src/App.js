import './App.css';
import Logo from './componentes/logo'
import perfil from './images/proflie.svg'
import bag from './images/bag.svg'

const textoOpcoes =['PRODUTOS', 'CATEGORIAS', 'SOBRE']
const icones = [perfil, bag]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='opcoes'>
            { textoOpcoes.map ( (texto) => (
              <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
        
        <ul className='icones'>
          { icones.map( (icone) => (
            <li><img className="icone" src={icone}></img></li>
          )) }
        </ul>
      </header>
    </div>
  );
}

export default App;
