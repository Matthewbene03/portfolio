//Arquivo de estilo para a section Home

import styled from "styled-components";
import * as color from "../../config/color"

export const SobreTitulo = styled.p`
    line-height: 1.3;
    color: ${color.colorLink};
    font-weight: bold;
    font-size: 25px;
`;

export const Titulo = styled.h1`
    line-height: 0.9;
    margin: 15px 0px;
    font-weight: bold;
    font-size: 70px;
    white-space: pre-line;
    color: ${color.colorTextBase};
`;

export const Descricao = styled.p`
    line-height: 1.3;
    font-size: 18px;
    white-space: pre-line;
    color: ${color.colorTextBase};
`;

export const BtnCurriculo = styled.p`
    padding: 10px 20px;
    margin: 10px 0px;

    font-size: 18px;

    background-color: transparent;
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

export const BtnContatos = styled.p`
    padding: 10px 20px;
    margin: 10px 0px;

    font-size: 18px;

    background-color: transparent;
    color: ${color.CorCinzaClaro};
    border: 2px solid ${color.CorCinzaClaro};
    border-radius: 10px;
    
    transition: background-color 0.7s;
    cursor: pointer;
    
    &:hover{
        background-color: ${color.CorCinzaClaro};
        color: ${color.colorTextBase};
    }
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;