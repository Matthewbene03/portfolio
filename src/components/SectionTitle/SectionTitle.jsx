import { Flex } from "antd"

import {Titulo, SobreTitulo} from "./styled"

function SectionTitle({sobreTitulo, titulo, align}) {
  return (
    <Flex 
    align={align}
    orientation="vertical">
      {<SobreTitulo>{sobreTitulo}</SobreTitulo>}
      <Titulo>{titulo}</Titulo>
    </Flex>
  )
}

export default SectionTitle