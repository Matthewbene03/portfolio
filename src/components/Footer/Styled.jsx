import styled from "styled-components";
import * as color from "../../config/color"

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 100px;
  padding: 0px clamp(24px, 10.42vw, 150px) 0;
  margin-top: 20px;

  background: rgba(8, 9, 9, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(165, 104, 25, 0.15);
  color: ${color.colorTextBase};
  
  z-index: 1000;
`;

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export const ContainerLinksContados = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px 40px;
`;

export const LinksContados = styled.a`
    display: Flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    & .iconLinkContato{
        font-size: 30px;
    }
`;