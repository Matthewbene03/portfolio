import { BrowserRouter } from 'react-router-dom'
import { App as AntdApp, ConfigProvider, Flex, Layout} from 'antd'

//Arquivos de configurações do app
import appTheme from "./config/theme/appTheme";
import antdTheme from './config/theme/antdTheme';

//Arquivo global de estilos
import GlobalStyles from './styles/GlobalStyles'

//Componentes do site: Header, sections, footer
import Header from "./components/Header/Header"
import Home from "./sections/Home/Home"
import Sobre from "./sections/Sobre/Sobre"

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
                 <Sobre/>
                 <Home/>
              </Content>
            </Layout>
            <GlobalStyles />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
