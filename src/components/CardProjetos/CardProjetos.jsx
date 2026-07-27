//Arquivos React
import { Link } from "react-router-dom";

// Arquivos do antd
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import { Flex } from "antd";

//Importar arquivo de estilo para o Card
import {
  Card,
  CardItem,
  CardsGrid,
  Titulo,
  Descricao,
  Img,
  ImgContainer,
  LinksContainer,
  CarouselContainer,
  StyledCarousel,
} from "./styled";

//Arquivos de configurações da sections
import { cardProjetos } from "../../data/card";

function CardProjetos() {
  const limiteVisivel = 3;
  const deveUsarCarousel = cardProjetos.length > limiteVisivel;

  const conteudoCard = () => {
    return cardProjetos.map(({
      id,
      title,
      description,
      tecnologiasUtilizadas,
      img,
      gitHub,
      deploy,
    }) => {
      const GitHubIcon = gitHub.icon;
      const DeployIcon = deploy.icon;

      return (
        <CardItem key={id}>
          <Card
            vertical
            align="flex-start"
            justify="flex-start"
          >
            <ImgContainer>
              <Img
                src={img}
                alt={`Imagem do projeto ${title}`}
              />
            </ImgContainer>

            <Titulo>{title}</Titulo>

            <Descricao>{description}</Descricao>

            <LinksContainer
              gap={20}
              align="center"
            >
              {gitHub.url && (
                <a
                  href={gitHub.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub do projeto ${title}`}
                >
                  <GitHubIcon size={25} />
                </a>
              )}

              {deploy.url && (
                <a
                  href={deploy.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir projeto ${title}`}
                >
                  <DeployIcon size={25} />
                </a>
              )}
            </LinksContainer>
          </Card>
        </CardItem>
      );
    });
  };

  if (!deveUsarCarousel) {
    return (
      <CardsGrid
        justify="center"
        align="stretch"
        wrap
        gap={40}
      >
        {conteudoCard()}
      </CardsGrid>
    )
  }

  return (
    <CarouselContainer>
      <StyledCarousel
        slidesToShow={limiteVisivel}
        slidesToScroll={1}
        arrows
        draggable
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        {conteudoCard()}
      </StyledCarousel>
    </CarouselContainer>
  )
}

export default CardProjetos