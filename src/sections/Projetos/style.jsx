//Arquivo de estilo para a section Home

import styled from "styled-components";
import * as color from "../../config/color"

export const Descricao = styled.p`
    margin: 10px 0px;
    line-height: 1.3;
    font-size: 18px;
    font-weight: normal;
    white-space: pre-line;
    color: ${color.colorTextBase};
`;

export const Btn = styled.button`
    padding: 10px 20px;
    margin: 10px 0px;

    font-size: 18px;

    background-color: transparent;
    font-family: inherit;
    color: ${color.colorLink};
    border: 2px solid ${color.colorLink};
    border-radius: 10px;
    
    transition: background-color 0.7s;
    cursor: pointer;
    
    &:hover{
        background-color: ${color.colorLink};
        color: ${color.colorTextBase};
    }
`;