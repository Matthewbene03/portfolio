import {
    CodeOutlined,
    AimOutlined,
    RocketOutlined,
} from "@ant-design/icons"

import {
    SiSpringboot,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMysql,
    SiGit,
    SiGithub,
    SiArduino,
} from "react-icons/si";

import { FaJava, FaGraduationCap } from "react-icons/fa";
import { LuMicrochip } from "react-icons/lu";
import { MdComputer } from "react-icons/md";

//Importar img de projetos
import imgGreenPoint from "../assets/img/projetos/greenPoint.png"
import imgJuniorSchmidt from "../assets/img/projetos/juniorSchmidt.png"
import imgMatthewProduct from "../assets/img/projetos/matthewProduct.png"
import imgPetCuidado from "../assets/img/projetos/petCuidado.png"
import imgCompilador from "../assets/img/projetos/compilador.png"


export const cardSobre = [
    {
        id: 'card1',
        icon: CodeOutlined,
        title: 'Formação',
        description: 'Engenharia de Computação.\nPrevisão de conclusão: 2027',
    },
    {
        id: 'card2',
        icon: CodeOutlined,
        title: 'Desenvolvedor',
        description: 'Foco em desenvolvimento de aplicações web e sistemas.',
    },
    {
        id: 'card3',
        icon: AimOutlined,
        title: 'Objetivo',
        description: 'Atuar como desenvolvedor e crescer constantemente na área de tecnologia.',
    },
    {
        id: 'card4',
        icon: RocketOutlined,
        title: 'Interesses',
        description: 'Back-end, Front-end, Sistemas Embarcados, IA e Ciência de Dados.',
    },
]

export const cardTecnologia = [
    {
        id: 1,
        icon: FaJava,
        color: "#EA2D2E",
        name: "Java",
    },
    {
        id: 2,
        icon: SiSpringboot,
        color: "#6DB33F",
        name: "Spring Boot",
    },
    {
        id: 3,
        icon: SiHtml5,
        color: "#dd4b25",
        name: "HTML",
    },
    {
        id: 4,
        icon: SiCss,
        color: "#254bdd",
        name: "CSS",
    },
    {
        id: 5,
        icon: SiJavascript,
        color: "#F7DF1E",
        name: "JavaScript",
    },
    {
        id: 6,
        icon: SiReact,
        color: "#61DAFB",
        name: "React",
    },
    {
        id: 7,
        icon: SiNodedotjs,
        color: "#6DB33F",
        name: "NodeJs",
    },
    {
        id: 8,
        icon: SiMysql,
        color: "#61DAFB",
        name: "MySql",
    },
    {
        id: 9,
        icon: SiGit,
        color: "#EA2D2E",
        name: "Git",
    },
    {
        id: 10,
        icon: SiGithub,
        color: "#ffffff",
        name: "GitHub",
    },
    {
        id: 11,
        icon: SiArduino,
        color: "#003d8e",
        name: "Arduino",
    },
    {
        id: 12,
        icon: LuMicrochip,
        color: "#515457",
        name: "MicroChip - CI",
    },
]

export const cardProjetos = [
    {
        id: 'card1',
        title: 'LandingPage para o musico JuniorSchmidt',
        description: 'Criação de uma Landing Page para apresentação dos serviços e contratação do serviços.',
        tecnologiasUtilizadas: ["React", "Ant design", "EmailJs"],
        img: imgJuniorSchmidt,
        gitHub: {
            icon: SiGithub,
            url: '',
        },
        deploy: {
            icon: MdComputer,
            url: 'https://www.juniorschmidt.com.br/',
        }
    },
    {
        id: 'card2',
        title: 'GreenPoint',
        description: 'aplicação web que ajuda usuários a encontrarem pontos de coleta de materiais recicláveis e consultarem o calendário de coleta em sua região.',
        tecnologiasUtilizadas: ["React", "Ant design", "Supabase"],
        img: imgGreenPoint,
        gitHub: {
            icon: SiGithub,
            url: 'https://github.com/cassiofreire1/greenpoint_final.git',
        },
        deploy: {
            icon: MdComputer,
            url: 'https://greenpoint-final.vercel.app/',
        }
    },
    {
        id: 'card3',
        title: 'PetCuidado - Back-end',
        description: 'Criação do back-end de um trabalho da disciplina de DS para o curso de Eng. de Computação',
        tecnologiasUtilizadas: ["Java", "Spring-boot"],
        img: imgPetCuidado,
        gitHub: {
            icon: SiGithub,
            url: 'https://github.com/Matthewbene03/p3tCuidado-Back-.git',
        },
        deploy: {
            icon: MdComputer,
            url: '',
        }
    },
    {
        id: 'card4',
        title: 'Matthew Product',
        description: 'Trabalho da disciplina de Desenvolvimento de Sistemas, 2025/1, Engenharia de computação - CEFET/MG',
        tecnologiasUtilizadas: ["Html", "CSS", "JavaScript"],
        img: imgMatthewProduct,
        gitHub: {
            icon: SiGithub,
            url: 'https://github.com/Matthewbene03/MatthewProduct.git',
        },
        deploy: {
            icon: MdComputer,
            url: '',
        }
    },
    {
        id: 'card5',
        title: 'Compilador Pascal',
        description: 'Trabalho da disciplina de Compilador, 2026/1, Engenharia de computação - CEFET/MG. Criação de um compilador básico para a linguagem pascal',
        tecnologiasUtilizadas: ["Java", "Maven", "ANTLR4"],
        img: imgCompilador,
        gitHub: {
            icon: SiGithub,
            url: 'https://git.juninho.com.br/MatthewBene03/compilador.git',
        },
        deploy: {
            icon: MdComputer,
            url: '',
        }
    },
]