// Arquivos do antd
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

//Importar arquivo de estilo para o Card
import {
  Card,
  Titulo,
  Descricao,
  CarouselContainer,
  StyledCarousel,
} from "./styled"


//Arquivos de configurações da sections
import {cardSobre} from "../../data/card";

function CardSobre() {
  return (
    <CarouselContainer>
      <StyledCarousel
        slidesToShow={3}
        slidesToScroll={1}
        arrows
        draggable
        autoplay
        autoplaySpeed={2000}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        {cardSobre.map(({ id, icon: Icon, title, description }) => (
          <div key={id}>
            <Card
              vertical
              align="center"
              justify="center"
            >
              <Icon />
              <Titulo>{title}</Titulo>
              <Descricao>{description}</Descricao>
            </Card>
          </div>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  )
}

export default CardSobre