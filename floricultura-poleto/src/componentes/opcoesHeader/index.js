import styled from 'styled-components'
import {Link} from 'react-router-dom'

const textoOpcoes =['PRODUTOS', 'FAVORITOS', 'SOBRE', 'CARRINHO']

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    
`

function OpcoesHeader () {
    return (
        <Opcoes>
            { textoOpcoes.map ( (texto) => (
              <Link to={`/${texto}`}><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader