import { Button, Flex } from "antd"
import { DownloadOutlined, GithubOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons'

//Arquivos de configurações da sections
import appTheme from "../../config/theme/appTheme"
import { sobreTitulo, titulo, align, paragrafo, btnCurriculo, urlImg } from "../../data/home"

//Componentes proprios utilizados na section
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import imgMatheus from "../../img/imagensTestes/euIa.png"

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
          <BtnCurriculo>
            <DownloadOutlined /> {btnCurriculo}
          </BtnCurriculo>

          <BtnContatos>
            <GithubOutlined />
          </BtnContatos>

          <BtnContatos>
            <LinkedinFilled />
          </BtnContatos>

          <BtnContatos>
            <MailOutlined />
          </BtnContatos>
        </Flex>
      </Flex>
      <Flex style={appTheme.homeSectionImagem}>
        <Img src={imgMatheus} alt="" />
      </Flex>
    </Flex>
  )
}