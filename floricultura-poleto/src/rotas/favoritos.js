import { useState, useEffect } from "react";
import styled from "styled-components";
import { deleteFavoritos, getFavoritos} from "../servicos/favoritos"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    123.5deg,
    rgb(244, 219, 251) 29.3%,
    rgb(255, 214, 214) 67.1%
  );
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])
  
  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  useEffect(() => {
      fetchFavoritos()
  }, [])

  async function deletaFavorito(id) {
        await deleteFavoritos(id)
        await fetchFavoritos()
        alert(`Produto de id:${id} inserido!`)      
  }

  return (
    <AppContainer>
        <Titulo>Aqui estão seus produtos favoritos:</Titulo> 
        <ResultadoContainer>
          { favoritos.map( favorito => (
              <Resultado onClick={ () => deletaFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                {/* <img src={produtoImg}/> */}
              </Resultado> )) }
        </ResultadoContainer> 
    </AppContainer>
  );
}

export default Favoritos;