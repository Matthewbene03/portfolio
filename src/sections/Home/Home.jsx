import { Flex } from "antd"
import { DownloadOutlined, GithubOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons'

//Arquivos de configurações da sections
import appTheme from "../../config/theme/appTheme"
import { sobreTitulo, titulo, paragrafo, btnCurriculo } from "../../data/home"
import { contatosPrincipais } from "../../data/contato"

//Componentes proprios utilizados na section
import urlImg from "../../img/imagensTestes/imgHome.webp"

//Arquivos de estilos para a section Home
import { SobreTitulo, Titulo, Descricao, BtnCurriculo, BtnContatos, Img } from "./style"

export default function Home() {

  return (
    <Flex
      justify="center"
      align="center"
      style={appTheme.homeSection}>
      <Flex
        vertical
        justify="center"
        align="flex-start"
        style={appTheme.homeSectionTexto}>
        <SobreTitulo>{sobreTitulo}</SobreTitulo>
        <Titulo>{titulo}</Titulo>
        <Descricao>{paragrafo}</Descricao>
        <Flex gap={"20px"}>
          <BtnCurriculo
            href="/documents/curriculo/Matheus_Benevenuto_Ferreira_vaga_estagio.pdf"
            target="_blank">
            <DownloadOutlined /> {btnCurriculo}
          </BtnCurriculo>

          {contatosPrincipais.map(({ id, icon: Icon, title, url }) => (
            <BtnContatos
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer">
              <Icon
                size={50} className="iconLinkContato" />
            </BtnContatos>
          ))}
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        style={appTheme.homeSectionImagem}>
        <Img src={urlImg} alt="" />
      </Flex>
    </Flex>
  )
}