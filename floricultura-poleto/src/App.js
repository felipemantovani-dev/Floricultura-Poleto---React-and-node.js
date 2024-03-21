import Header from "./componentes/header";
import styled from "styled-components";
import Pesquisa from "./componentes/pesquisa";
import UltimosLancamentos from "./componentes/UltimosLancamentos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    123.5deg,
    rgb(244, 219, 251) 29.3%,
    rgb(255, 214, 214) 67.1%
  );
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos></UltimosLancamentos>
    </AppContainer>
  );
}

export default App;
