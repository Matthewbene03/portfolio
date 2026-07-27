//Arquivo de estilo para a section Home

import styled from "styled-components";
import * as color from "../../config/color"
import { Carousel, Flex } from "antd";

export const CarouselContainer = styled.div`
    width: 100%;
    min-width: 0;
    padding: 35px 0px;
`;

export const CardItem = styled.div`
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  
  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: inherit;
  }

  .slick-slide > div {
    height: 100%;
  }

  ${CardItem} {
    height: 100%;
  }

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

  .slick-dots {
    bottom: -25px;
  }
  
  .slick-dots {
    bottom: -25px;
  }
`



export const CardsGrid = styled(Flex)`
  width: 100%;
  min-width: 0;
  padding: 20px 0;

  & > ${CardItem} {
    flex: 1 1 calc((100% - 80px) / 3);
    max-width: calc((100% - 80px) / 3);
  }

  @media (max-width: 1000px) {
    & > ${CardItem} {
      flex-basis: calc((100% - 40px) / 2);
      max-width: calc((100% - 40px) / 2);
    }
  }

  @media (max-width: 650px) {
    & > ${CardItem} {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`;

export const Card = styled(Flex)`
  box-sizing: border-box;

  width: calc(100% - 20px);
  height: 400px;
  margin: 0 10px;
  padding: 10px 20px;

  background-color: ${color.CorCinzaEscuro};
  border: 2px solid ${color.colorLink};
  border-radius: 10px;

  overflow: hidden;
`;

export const Titulo = styled.h3`
    line-height: 0.9;
    margin-top: 25px;
    font-weight: bold;
    font-size: 20px;
    white-space: pre-line;

    color: ${color.colorTextBase};
    `;

export const Descricao = styled.p`
    line-height: 1.3;
    margin-top: 15px;
    font-weight: normal;
    font-size: 15px;
    
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    color: ${color.colorTextBase};
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 15px;
`;

export const Img = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;
  border-radius: 15px;
`;

export const LinksContainer = styled(Flex)`
  width: 100%;
  margin-top: auto;
  padding-top: 20px;
`;