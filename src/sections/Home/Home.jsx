import { Button, Flex } from "antd"
import { DownloadOutlined, GithubOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons'

//Arquivos de configurações da sections
import appTheme from "../../config/theme/appTheme"
import { sobreTitulo, titulo, align, paragrafo, btnCurriculo, urlImg } from "../../data/home"

//Componentes proprios utilizados na section
import SectionTitle from "../../components/SectionTitle/SectionTitle"

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
        <p>{sobreTitulo}</p>
        <h1 >{titulo}</h1>
        <p>
          {paragrafo}
        </p>
        <Flex
          gap={"10px"}
          style={{
            width: "100%",
            border: '2px solid red'
          }}>
          <Button
            style={{
              width: '55%'
            }}>
            <DownloadOutlined /> {btnCurriculo}
          </Button>
          <Button
            style={{
              width: '15%'
            }}>
            <GithubOutlined />
          </Button>
          <Button
            style={{
              width: '15%'
            }}>
            <LinkedinFilled />
          </Button>
          <Button
            style={{
              width: '15%'
            }}>
            <MailOutlined />
          </Button>
        </Flex>
      </Flex>
      <Flex
        style={appTheme.homeSectionImagem}
      > Imagem </Flex>
    </Flex>
  )
}