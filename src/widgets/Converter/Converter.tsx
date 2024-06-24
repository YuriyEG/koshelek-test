import { type FC } from "react"

import styled from "styled-components"

import { Input } from "@mui/material"

import { useAppSelector } from "../../app/hooks"
import { useAppDispatch } from "../../app/hooks"
import { changeEuro, changeUsd, selectUsd, selectEuro } from "./ConverterSlice"

const Div = styled.div`
  min-width: 280px;
  max-width: 800px;
  min-height: 100px;
  background-color: orange;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  border-radius: 12px;
  padding: 12px;
`
const Title = styled.h3`
  font-family: RegularTT;
  text-align: left;
  font-size: 16px;
  margin-bottom: 12px;
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const InputWrapper = styled.div`
  &:first-child {
    margin-right: 12px;
  }
`
const NumberInput = styled(Input)<{
  type: string
  value: number
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}>`
  width: 180px;
  height: 32px;
  border-radius: 4px;
  text-indent: 12px;
  background-color: white;
  overflow: hidden;
  padding-left: 10px;
`
const Label = styled.label``
const Currency = styled.div``

const Converter: FC = () => {
  const euro = useAppSelector(selectEuro)
  const usd = useAppSelector(selectUsd)
  const dispatch = useAppDispatch()

  const handleEurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber
    dispatch(changeEuro(value))
  }

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber
    dispatch(changeUsd(value))
  }
  return (
    <Div>
      <Title>Конвертер Валют</Title>
      <Box>
        <InputWrapper>
          {" "}
          <Label>
            <Currency>EUR</Currency>
            <NumberInput
              type="number"
              value={euro}
              onChange={handleEurChange}
              placeholder="Сумма в Евро"
            />
          </Label>
        </InputWrapper>
        <InputWrapper>
          {" "}
          <Label>
            <Currency>USD</Currency>
            <NumberInput
              type="number"
              value={usd}
              onChange={handleUsdChange}
              placeholder="Сумма в долларах"
            />
          </Label>
        </InputWrapper>
      </Box>
    </Div>
  )
}

export default Converter
