// Arquivos do antd
import { Flex } from "antd";

import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

//Importar arquivo de estilo para o Card
import {
  Card,
  Titulo,
  CarouselContainer,
  StyledCarousel,
} from "./styled"


//Arquivos de configurações da sections
import { cardTecnologia } from "../../data/card";

function CardTecnologias() {
  const limiteVisivel = 10;
  const deveUsarCarousel = cardTecnologia.length > limiteVisivel;

  if (!deveUsarCarousel) {
    return (
      <Flex
        justify="center"
        align="center"
        wrap
        gap={40}
        style={{
          width: '100%',
          minWidth: '0',
          padding: '20px 0px',
        }}>
        {cardTecnologia.map(({ id, icon: Icon, color }) => (
          <div  
          style={{
              margin: '0 10px',
          }}
          key={id}>
            <Icon
              size={48}
              color={color}
            />
          </div>
        ))}
      </Flex>
    )
  }


  return (
    <CarouselContainer>
      <StyledCarousel
        slidesToShow={10}
        slidesToScroll={1}
        arrows
        draggable
        autoplay
        autoplaySpeed={2000}
      >
        {cardTecnologia.map(({ id, icon: Icon, title, color }) => (
          <div key={id}>
            <Card
              vertical
              align="center"
              justify="center"
            >
              <Icon
                size={48}
                color={color}
              />
            </Card>
          </div>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  )
}

export default CardTecnologias