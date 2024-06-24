import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface IConverterSlice {
  usd: number
  euro: number
}

const initialState: IConverterSlice = {
  usd: 0,
  euro: 0,
}

export const converterSlice = createAppSlice({
  name: "converter",

  initialState,

  reducers: create => ({
    changeEuro: create.reducer((state, action: PayloadAction<number>) => {
      state.euro = action.payload
      state.usd = Number((parseFloat(String(action.payload)) * 1.07).toFixed(2))
    }),
    changeUsd: create.reducer((state, action: PayloadAction<number>) => {
      state.usd = action.payload
      state.euro = Number(
        (parseFloat(String(action.payload)) / 1.07).toFixed(2),
      )
    }),
  }),

  selectors: {
    selectEuro: converter => converter.euro,
    selectUsd: converter => converter.usd,
  },
})

export const { changeEuro, changeUsd } = converterSlice.actions

export const { selectUsd, selectEuro } = converterSlice.selectors
