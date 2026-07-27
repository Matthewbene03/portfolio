//Componentes do antd
import { Flex } from "antd";

// Componentes proprios utilizados para a criação da section Sobre
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import CardProjetos from "../../components/CardProjetos/CardProjetos"

//Arquivos de configurações da sections
import appTheme from "../../config/theme/appTheme"
import { sobreTitulo, titulo, align } from "../../data/projetos";

//Componentes de estilos da pagina
import { Descricao, Btn } from "./style"

export default function Projetos() {

  return (
    <Flex
      vertical
      justify="center"
      align="flex-start"
      style={appTheme.tecnologiaSection}>
      <SectionTitle
        sobreTitulo={sobreTitulo}
        titulo={titulo}
        align={align}
      />
      <CardProjetos/>
    </Flex>
  )
}