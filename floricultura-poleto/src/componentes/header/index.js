import Logo from '../../componentes/logo'
import OpcoesHeader from '../../componentes/opcoesHeader'
import IconesHeader from '../../componentes/iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header () {
    return (
      <HeaderContainer>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
    )
}

export default Header