import { type FC } from "react"
import styled from "styled-components"
import { TextField } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
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

const StyledTextField = styled(TextField)`
  height: 32px;
  background-color: white;
  border-radius: 4px;
  .MuiInputBase-root {
    height: 32px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #3f51b5;
  }
`

const Label = styled.label``
const Currency = styled.div``

const Converter: FC = () => {
  const euro = useAppSelector(selectEuro)
  const usd = useAppSelector(selectUsd)
  const dispatch = useAppDispatch()

  const handleEurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*\.?\d*$/.test(value)) {
      dispatch(changeEuro(value === "" ? 0 : parseFloat(value)))
    }
  }

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*\.?\d*$/.test(value)) {
      dispatch(changeUsd(value === "" ? 0 : parseFloat(value)))
    }
  }

  return (
    <Div>
      <Title>Конвертер Валют</Title>
      <Box>
        <InputWrapper>
          <Label>
            <Currency>EUR</Currency>
            <StyledTextField
              type="text"
              value={euro}
              onChange={handleEurChange}
              placeholder="Сумма в Евро"
              inputProps={{ min: 0 }}
              variant="outlined"
              sx={{
                background: "white",
                borderRadius: "4px",
              }}
              fullWidth
            />
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Currency>USD</Currency>
            <StyledTextField
              type="text"
              value={usd}
              onChange={handleUsdChange}
              placeholder="Сумма в долларах"
              inputProps={{ min: 0 }}
              variant="outlined"
              fullWidth
            />
          </Label>
        </InputWrapper>
      </Box>
    </Div>
  )
}

export default Converter
