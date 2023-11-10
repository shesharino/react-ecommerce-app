import { Dispatch, SetStateAction } from 'react'
import Product from '../data/Product'
import { testData } from '../data/testData'
import ProductItem from './ProductItem'

type Props = {
  setCartProps: Dispatch<SetStateAction<Product[]>>
}
export default function ProductList({ setCartProps }: Props) {
  return (
    <div className='container'>
      <div className='row gy-3 mt-0'>
        {testData.map(product =>
          <div key={product.id} className='col-4'>
            <ProductItem product={product} setCartProps={setCartProps} />
          </div>
        )}
      </div>
    </div>
  )
}
