import { Dispatch, SetStateAction } from 'react'
import { useRecoilState } from 'recoil'
import Product from '../data/Product'
import { cartAtom } from '../stateManagement/recoil/cartAtom'
import { useAppDispatch } from '../stateManagement/redux/hooks'
import { addProductToCart } from '../stateManagement/redux/cartSlice'

type Props = {
  product: Product, setCartProps: Dispatch<SetStateAction<Product[]>>
}
export default function ProductCard({ product, setCartProps }: Props) {
  const [cartRecoil, setCartRecoil] = useRecoilState(cartAtom)
  const dispatch = useAppDispatch()
  const addToCart = () => {
    setCartProps(prev => [...prev, product])
    setCartRecoil(prev => [...prev, product])
    dispatch(addProductToCart(product))
  }

  return (
    <div className="card d-inline-block m-3 bg-body-tertiary">
      <div className="hstack">
        <img src={product.img} alt={product.name} className="bg-light border-0 img-thumbnail" />
        <div className="card-body">
          <div className="card-title h5 text-break">{product.name}</div>
          <p className="card-text">${product.price.toFixed(2)}</p>
          <button className="btn btn-primary" disabled={cartRecoil.includes(product)} onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
