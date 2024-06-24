import type { FC } from "react"
import type { IAppProps } from "../types/App.type"

import styled from "styled-components"

const Div = styled.div`
  font-weight: bolder;
  background-color: white;
  color: black;
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
`
const H1 = styled.h1`
  font-family: RegularTT;
  width: 100%;
  text-align: center;
  color: black;
  opacity: 70%;
`

const App: FC<IAppProps> = () => {
  return (
    <Div>
      <H1>Кошелёк</H1>
    </Div>
  )
}

export default App
