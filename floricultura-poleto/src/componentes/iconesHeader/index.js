import perfil from '../../images/proflie.svg'
import bag from '../../images/bag.svg'
import styled from 'styled-components'

const Icones = styled.ul `
  list-style: none;
  display: flex;
  align-items: center;
  color: #f9cada;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icones = [bag, perfil]

function IconesHeader () {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone><img className="icone" src={icone} alt="icones"></img></Icone>
          )) }
        </Icones>
    )
}

export default IconesHeader