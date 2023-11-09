import { createContext } from 'react'
import Product from '../../data/Product'

export const CartContext = createContext<Product[]>([])
