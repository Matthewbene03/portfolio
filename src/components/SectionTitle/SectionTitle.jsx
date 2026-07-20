import { Flex } from "antd"

import {Titulo, SobreTitulo} from "./styled"

function SectionTitle({sobreTitulo, titulo, align}) {

  console.log(sobreTitulo)

  return (
    <Flex 
    align={align}
    orientation="vertical"
    style={{
      border: '2px solid red'
    }}>
      {<SobreTitulo>{sobreTitulo}</SobreTitulo>}
      <Titulo>{titulo}</Titulo>
    </Flex>
  )
}

export default SectionTitle