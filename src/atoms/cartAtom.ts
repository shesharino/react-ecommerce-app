import { atom } from 'recoil'
import Product from '../data/Product'

export const cartAtom = atom({
  key: 'cartState',
  default: <Product[]>[]
})
