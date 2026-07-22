import { Button } from 'antd';
import { Nav, ImgLogo } from "./styled";

const NavItens = [
  { id: '1', label: 'Inicio' },
  { id: '2', label: 'Sobre' },
  { id: '3', label: 'Projetos' },
  { id: '4', label: 'Experiencias' },
  { id: '5', label: 'Feedbacks' },
  { id: '6', label: 'Contato' },
]

function Header() {

  return (
    <Nav className='margin-left-right-80porc'>
      <div>
        <ImgLogo src="/gemini-svg.svg" alt='Logo do Matheus Benevenuto'/>
      </div>

      <div>
        {NavItens.map(({ id, label }) => (
          <Button
            className='btnAncora'
            type='link'
            key={id}
          >
            {label}
          </Button>
        ))}
      </div>
    </Nav>
  )
}

export default Header