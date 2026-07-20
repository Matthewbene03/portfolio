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
        color: color.PrimeiraCorClara,
        backgroundColor: color.PrimeiraCorClara,
    },
    footerStyle: {
        textAlign: 'center',
        color: color.PrimeiraCorClara,
        backgroundColor: color.PrimeiraCorClara,
    },
    layoutStyle: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '100vw',
        borderRadius: 0,
    },
    homeSection: {
        width: '100%',
        margin: "0 auto",
        padding: '0px 150px',
        color: color.colorTextBase,
        border: '2px solid blue'
    },
    homeSectionTexto: {
        width: '40%',
        color: color.colorTextBase,
        border: '2px solid red'
    },
    homeSectionImagem: {
        width: '60%',
        color: color.colorTextBase,
        border: '2px solid red'
    },
}

export default appTheme;