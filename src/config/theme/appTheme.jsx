import * as color from "../color"

const appTheme = {
    color: {
        colorPrimary: color.colorPrimary,
        colorInfo: color.colorInfo,
        colorError: color.colorError,
        colorSuccess: color.colorSuccess,
        colorLink: color.colorLink,
        colorBgBase: color.colorBgBase,
        colorTextBase: color.colorTextBase,
    },
    headerStyle: {
        textAlign: 'center',
        color: color.PrimeiraCorClara,
        height: 64,
        lineHeight: '64px',
        backgroundColor: color.PrimeiraCorClara,
        margin: 0,
        padding: 0,
    },
    contentStyle: {
        flex: 1,
        color: color.PrimeiraCorClara,
        backgroundColor: color.PrimeiraCorClara,
    },
    footerStyle: {
        textAlign: 'center',
        color: color.PrimeiraCorClara,
        backgroundColor: color.PrimeiraCorClara,
    },
    layoutStyle: {
        display: 'flex',
        flexDirection: 'column',

        borderRadius: 8,
        overflow: 'hidden',
        width: '100vw',
        borderRadius: 0,
    },
    homeSection: {
        width: '100%',
        minHeight: '100vh',
        padding: '100px 150px 0', // 100px em cima = altura do header
        margin: '0 auto',
        color: color.colorTextBase,
    },
    homeSectionTexto: {
        width: '40%',
        color: color.colorTextBase,
    },
    homeSectionImagem: {
        width: '60%',
        color: color.colorTextBase,
    },
}

export default appTheme;