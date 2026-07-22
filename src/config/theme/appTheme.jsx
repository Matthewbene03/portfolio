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
    contentStyle: {
        flex: 1,
    },
    layoutStyle: {
        overflow: 'hidden',
    },
    homeSection: {
        width: '100%',
        minHeight: '100vh',
        padding: '0px clamp(24px, 10.42vw, 150px)',
        margin: '0 auto',
        color: color.colorTextBase,
    },
    homeSectionTexto: {
        width: '40%',
        color: color.colorTextBase,
    },
    homeSectionImagem: {
        width: '60%',
        minWidth: 0,
        height: 'calc(100vh - 100px)',
        margin: '0 auto',
    },
    sobreSection: {
        width: '100%',
        padding: '0px clamp(24px, 10.42vw, 150px)',
        margin: '50px auto',
        color: color.colorTextBase,
    },
    sobreSectionTexto: {
        width: '40%',
        color: color.colorTextBase,
    },
    sobreSectionCard: {
        width: '60%',
        minWidth: 0,
        margin: '0 auto',
    },
    tecnologiaSection: {
        width: '100%',
        padding: '20px clamp(24px, 10.42vw, 150px)',
        margin: '50px auto',
        color: color.colorTextBase,
    },
}

export default appTheme;