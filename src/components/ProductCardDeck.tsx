import { Dispatch, SetStateAction } from 'react'
import Product from '../data/Product'
import { testData } from '../data/testData'
import ProductCard from './ProductCard'

type Props = {
  setCartProps: Dispatch<SetStateAction<Product[]>>
}
export default function ProductCardDeck({ setCartProps }: Props) {
  return (
    <div className="card-deck my-0 mx-auto p-3">
      {testData.map(product =>
        <ProductCard key={product.id} product={product} setCartProps={setCartProps} />
      )}
    </div>
  )
}
