import styled from "styled-components"

export const Titulo = styled.h2 `
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.corBack || '#FFF'};
    color: ${props => props.cor || 'pink'}; 
    font-size: ${props => props.tamanhoFonte || '36px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`