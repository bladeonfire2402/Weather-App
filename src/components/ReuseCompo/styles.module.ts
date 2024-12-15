import styled from "styled-components"
import { ColorsConstants } from "./colorContast.ts"
import { fontContsants } from "./fontConstants.ts"

export const Mainwrapper = styled.div`
    width: 100%;
    background-color: ${ColorsConstants.primary};
`

export const TitleLogoText=styled.h1`
   font-size: ${fontContsants.Title.size};
   font-family: ${fontContsants.Title.fontFamily};
   color: ${ColorsConstants.primary};
`

export const Container=styled.div`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => props.justify || "flex-start"}
    
`

