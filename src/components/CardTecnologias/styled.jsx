//Arquivo de estilo para a section Home

import styled from "styled-components";
import * as color from "../../config/color"
import { Carousel, Flex } from "antd";

export const CarouselContainer = styled.div`
    width: 100%;
    min-width: 0;
    padding: 35px 0px;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  
  .slick-prev::after, .slick-next::after {
    display: none;
  }
  
  .slick-dots {
    bottom: -25px;
  }
`

export const Card = styled(Flex)`
  box-sizing: border-box;

  margin: 0 10px;
`;

export const Titulo = styled.h3`
    line-height: 0.9;
    margin: 15px 0px;
    font-weight: bold;
    font-size: 30px;
    white-space: pre-line;
`;