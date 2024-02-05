import logo from '../../images/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
`
const Logo = styled.img`
    width: 110x;
    height: 110px;
`

function LogoElement() {
    return (
    <LogoContainer>
        <Logo src={logo} alt="logo, flor com nome floricultura poleto a baixo"></Logo>
    </LogoContainer>
    ) 
}
    
export default LogoElement