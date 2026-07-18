import React from 'react';
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { App as AntdApp, ConfigProvider, Flex, Layout} from 'antd'
import antdTheme from './config/theme/antdTheme';

import Header from "./components/Header/Header"
import GlobalStyles from './styles/GlobalStyles'
import * as color from "./config/color"
import Footer from './components/Footer/Footer';

const { Content } = Layout

const headerStyle = {
  textAlign: 'center',
  color: color.PrimeiraCorClara,
  height: 64,
  lineHeight: '64px',
  backgroundColor: color.PrimeiraCorClara,
  margin: 0,
  padding: 0,
  border: '2px solid red',
};

const contentStyle = {
  textAlign: 'center',
  height: '200vh',
  lineHeight: '120px',
  color: color.PrimeiraCorClara,
  backgroundColor: color.PrimeiraCorClara,
  border: '2px solid red',
};

const footerStyle = {
  textAlign: 'center',
  color: color.PrimeiraCorClara,
  backgroundColor: color.PrimeiraCorClara,
  border: '2px solid red',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100vw',
  borderRadius: 0,
};

function App() {

  return (
    <ConfigProvider theme={antdTheme}>
      <AntdApp>
        <BrowserRouter>
          <Flex gap="medium" wrap>
            <Layout style={layoutStyle}>
              <Header />
              <Content style={contentStyle}>

              </Content>
              <Footer />
            </Layout>
            <GlobalStyles />
          </Flex>
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
