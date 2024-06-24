import type { FC } from "react"
import type { IAppProps } from "../types/App.type"

import styled from "styled-components"

import Converter from "../widgets/Converter/Converter"

const Div = styled.div`
  font-weight: bolder;
  background-color: white;
  color: black;
  width: 100%;
  min-height: 100vh;
  padding: 12px;
`
const H1 = styled.h1`
  font-family: RegularTT;
  width: 100%;
  text-align: center;
  color: black;
  opacity: 70%;
  margin-bottom: 28px;
`

const App: FC<IAppProps> = () => {
  return (
    <Div>
      <H1>Кошелёк</H1>
      <Converter />
    </Div>
  )
}

export default App
