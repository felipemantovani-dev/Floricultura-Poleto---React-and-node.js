import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { produtos } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  border-bottom: 0.5px solid whitesmoke;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [produtoPesquisado, setProdutoPesquisado] = useState([]);

  console.log(produtoPesquisado);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Dá uma olhada nos nossos produtos!</Subtitulo>
      <Input
        placeholder="Faça sua pesquisa aqui"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = produtos.filter((produto) =>
            produto.nome.includes(textoDigitado)
          );
          setProdutoPesquisado(resultadoPesquisa);
        }}
      />
      {produtoPesquisado.map((produtos) => (
        <Resultado>
          <img src={produtos.src} alt={produtos.alt}></img>
          <p>{produtos.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}
export default Pesquisa;
