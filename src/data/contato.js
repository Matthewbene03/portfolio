//Esse arquivo serve para armazenar os textos da pagina sobre
//Titulo, paragrafo, botões, etc

import {
    MailOutlined,
    WhatsAppOutlined,
    GithubOutlined,
    LinkedinFilled,
    InstagramOutlined
} from "@ant-design/icons"

export const sobreTitulo = "Contato";
export const titulo = "Vamos conversar?";
export const align = "left";
export const paragrafo = "Estou disponível para novas oportunidades e projetos. Entre em contato comigo!";

export const WHATSAPP_MESSAGE =
    'Olá, Matheus! Conheci seu trabalho pelo seu portifolio e gostaria de conversar com você.'

export const WHATSAPP_URL = `https://wa.me/${'5531989051685'}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const contatosPrincipais = [
    {
        id: 1,
        title: 'Email',
        url: 'mailto:contato@matheusbenevenuto.com.br',
        icon: MailOutlined,
    },
    {
        id: 2,
        title: 'Whatsapp',
        url: WHATSAPP_URL,
        icon: WhatsAppOutlined,
    },
    {
        id: 3,
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/matheusbenevenuto/',
        icon: LinkedinFilled,
    },
]

export const contatos = [
    {
        id: 1,
        title: 'Email',
        url: 'mailto:contato@matheusbenevenuto.com.br',
        icon: MailOutlined,
    },
    {
        id: 2,
        title: 'Whatsapp',
        url: WHATSAPP_URL,
        icon: WhatsAppOutlined,
    },
    {
        id: 3,
        title: 'GitHub',
        url: 'https://github.com/Matthewbene03',
        icon: GithubOutlined,
    },
    {
        id: 4,
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/matheusbenevenuto/',
        icon: LinkedinFilled,
    },
    {
        id: 5,
        title: 'Instagram',
        url: 'https://www.instagram.com/matheusbfer/',
        icon: InstagramOutlined,
    },
]

export const redesSociais = [
    {
        id: 1,
        title: 'GitHub',
        url: 'https://github.com/Matthewbene03',
        icon: GithubOutlined,
    },
    {
        id: 2,
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/matheusbenevenuto/',
        icon: LinkedinFilled,
    },
    {
        id: 3,
        title: 'Instagram',
        url: 'https://www.instagram.com/matheusbfer/',
        icon: InstagramOutlined,
    },
]
