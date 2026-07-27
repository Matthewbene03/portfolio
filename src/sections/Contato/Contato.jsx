//Componentes do antd
import { Flex } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

// Componentes proprios utilizados para a criação da section Sobre
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import CardSobre from "../../components/CardSobre/CardSobre"

//Arquivos de configurações da sections
import appTheme from "../../config/theme/appTheme"
import { sobreTitulo, titulo, align, paragrafo, contatos } from "../../data/contato";

//Componentes de estilos da pagina
import { Descricao, LinksContados, ContainerLinksContados } from "./style"

export default function Contato() {

  return (
    <Flex
      justify="center"
      align="center"
      style={appTheme.contatoSection}>
      <Flex
        vertical
        justify="center"
        align="flex-start"
        style={appTheme.contatoSectionTexto}>
        <SectionTitle
          sobreTitulo={sobreTitulo}
          titulo={titulo}
          align={align} />
        <Descricao>
          {paragrafo}
        </Descricao>
      </Flex>
      <ContainerLinksContados
        style={appTheme.contatoSectionContatos}>
        {contatos.map(({ id, icon: Icon, title, url }) => (
          <LinksContados
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer">
            <Icon
              size={50} className="iconLinkContato"/>
            <p className="tituloLinkContato">
              {title}
            </p>
          </LinksContados>
        ))}
      </ContainerLinksContados>
    </Flex>
  )
}