import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Product from '../../data/Product'

const initialState: Product[] = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.splice(state.indexOf(action.payload), 1)
    },
    removeAll: (state) => {
      state.splice(0)
    }
  }
})

export const { addProduct, removeProduct, removeAll } = cartSlice.actions
export default cartSlice.reducer
