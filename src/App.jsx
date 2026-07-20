import React from 'react';
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { App as AntdApp, ConfigProvider, Flex, Layout} from 'antd'

//Arquivos de configurações do app
import appTheme from "./config/theme/appTheme";
import antdTheme from './config/theme/antdTheme';
import * as color from "./config/color"

//Arquivo global de estilos
import GlobalStyles from './styles/GlobalStyles'

//Componentes do site: Header, sections, footer
import Header from "./components/Header/Header"
import Home from "./sections/Home/Home"
import Sobre from "./sections/Sobre/Sobre"
import Projetos from "./sections/Projetos/Projetos"
import Experiencias from "./sections/Experiencias/Experiencias"
import Feedback from "./sections/Feedback/Feedback"
import Contato from "./sections/Contato/Contato"
import Footer from './components/Footer/Footer'

const { Content } = Layout

function App() {

  return (
    <ConfigProvider theme={antdTheme}>
      <AntdApp>
        <BrowserRouter>
            <Layout style={appTheme.layoutStyle}>
              <Header />
              <Content style={appTheme.contentStyle}>
                 <Home/>
                {/*<Sobre/>
                <Projetos/>
                <Experiencias/>
                <Feedback/>
                <Contato/> */}
              </Content>
              {/* <Footer /> */}
            </Layout>
            <GlobalStyles />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
