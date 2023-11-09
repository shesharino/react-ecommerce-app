import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Product from '../../data/Product'

const initialState: Product[] = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    }
  }
})

export const { addProductToCart } = cartSlice.actions
export default cartSlice.reducer
