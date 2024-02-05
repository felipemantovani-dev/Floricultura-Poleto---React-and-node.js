import Header from './componentes/header'
import styled from 'styled-components'

const AppContainer = styled.div`
    
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, #ffbdd6, #ffc4d8, #f9cada, #ffe4e1);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;

  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
  }
  `

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
