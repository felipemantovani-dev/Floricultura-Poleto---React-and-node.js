import './estilo.css' 
import logo from '../../images/logo.png'

function LogoElement() {
    return (
    <div className="logo">
        <img src={logo} alt="logo, flor com nome floricultura poleto a baixo" className="logo-img"></img>
    </div>
    ) 
}
    
export default LogoElement