//Arquivo de estilo para a section Home

import styled from "styled-components";
import * as color from "../../config/color"
import {Carousel, Flex } from "antd";

export const CarouselContainer = styled.div`
    width: 100%;
    min-width: 0;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  
    .slick-prev::after,
    .slick-next::after {
      display: none;
    }
  
  .slick-prev,
  .slick-next {
    width: 44px;
    height: 44px;

    display: flex !important;
    align-items: center;
    justify-content: center;

    background-color: rgba(8, 9, 9, 0.85);
    border: 1px solid ${color.colorLink};
    border-radius: 50%;

    z-index: 2;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  .slick-prev::after,
  .slick-next::after {
    width: 13px;
    height: 13px;

    border-color: ${color.colorLink};
    border-width: 3px 3px 0 0;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: ${color.colorLink};
  }

  .slick-prev:hover::after,
  .slick-next:hover::after {
    border-color: ${color.CorCinzaEscuro};
  }
`

export const Card = styled(Flex)`
  box-sizing: border-box;

  width: calc(100% - 20px);
  height: 300px;
  margin: 0 10px;
  padding: 32px 24px;

  line-height: 1.3;
  font-weight: bold;
  font-size: 50px;
  text-align: center;

  background-color: ${color.CorCinzaEscuro};
  color: ${color.colorLink};

  border: 2px solid ${color.colorLink};
  border-radius: 10px;
`;

export const Titulo = styled.h3`
    line-height: 0.9;
    margin: 15px 0px;
    font-weight: bold;
    font-size: 30px;
    white-space: pre-line;
`;

export const Descricao = styled.p`
    line-height: 1.3;
    font-size: 18px;
    white-space: pre-line;
    color: ${color.colorTextBase};
`;