import styled from "styled-components";
import { produtosLancamentos } from "./dadosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import suculenta from "../../images/Suculenta.png";

const UltimosLancamentosContainer = styled.section `
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`
const NovosProdutosContainer = styled.div `
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`
const ImgNovosProdutosContainer = styled.img `
  padding: 20px;
`

function UltimosLancamentos () {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="pink">ULtimos Lançamentos</Titulo>
      <NovosProdutosContainer>{ produtosLancamentos.map( produtos => (
        <ImgNovosProdutosContainer src={produtos.src} alt="1"/>
      )) }
      </NovosProdutosContainer>
      <CardRecomenda titulo="Talvez você se interesse por..."
        subtitulo="Suculenta"
        descricao="Pequena e fácil de cuidar"
        img={suculenta}>
      </CardRecomenda>
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos