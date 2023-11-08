import { Dispatch, SetStateAction } from 'react'
import Product from '../data/Product'

type Props = {
  product: Product, setCart: Dispatch<SetStateAction<Product[]>>
}
export default function ProductCard({ product, setCart }: Props) {
  const addToCart = () => setCart(prev => [...prev, product])

  return (
    <div className="card d-inline-block m-3 bg-body-tertiary">
      <div className="hstack">
        <img src={product.img} alt={product.name} className="bg-light border-0 img-thumbnail" />
        <div className="card-body">
          <div className="card-title h5 text-break">{product.name}</div>
          <p className="card-text">${product.price.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
