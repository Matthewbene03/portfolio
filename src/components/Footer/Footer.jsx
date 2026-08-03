import { Button } from 'antd';
import { ContainerFooter, ImgLogo, ContainerLogo, ContainerLinksContados, LinksContados} from "./styled";
import { redesSociais } from "../../data/contato";


function Footer() {

  return (
    <ContainerFooter>
      <ContainerLogo>
        <ImgLogo src="/gemini-svg.svg" alt='Logo do Matheus Benevenuto' />
        <p>Transformando ideias em soluções através da tecnologia.</p>
      </ContainerLogo>

      <div>
        <p>© 2026 Matheus Benevenuto. Todos os direitos reservados.</p>
      </div>

      <ContainerLinksContados>
        {redesSociais.map(({ id, icon: Icon, title, url }) => (
          <LinksContados
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer">
            <Icon
              size={50} className="iconLinkContato" />
          </LinksContados>
        ))}
      </ContainerLinksContados>
    </ContainerFooter>
  )
}

export default Footer;