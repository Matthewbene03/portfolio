//Componentes do antd
import { Flex } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

// Componentes proprios utilizados para a criação da section Sobre
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import CardSobre from "../../components/CardSobre/CardSobre"

//Arquivos de configurações da sections
import appTheme from "../../config/theme/appTheme"
import { sobreTitulo, titulo, align, paragrafo, btn } from "../../data/sobre";

//Componentes de estilos da pagina
import {Descricao, Btn} from "./style"

function Sobre() {

  return (
    <Flex
      justify="center"
      align="center"
      style={appTheme.sobreSection}>
      <Flex
        vertical
        justify="center"
        align="flex-start"
        style={appTheme.sobreSectionTexto}>
        <SectionTitle
          sobreTitulo={sobreTitulo}
          titulo={titulo}
          align={align} />
        <Descricao>
          {paragrafo}
        </Descricao>
        <Btn>
          {btn} <ArrowRightOutlined />
        </Btn>
      </Flex>
      <Flex
        align="center"
        justify="center"
        style={appTheme.sobreSectionCard}>
        <CardSobre />
      </Flex>
    </Flex>
  )
}

export default Sobre;