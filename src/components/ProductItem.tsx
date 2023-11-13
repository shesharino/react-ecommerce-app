import { Dispatch, SetStateAction } from 'react'
import { useRecoilState } from 'recoil'
import Product from '../data/Product'
import { cartAtom } from '../stateManagement/recoil/cartAtom'
import { useAppDispatch } from '../stateManagement/redux/hooks'
import { addProduct } from '../stateManagement/redux/cartSlice'

type Props = {
  product: Product, setCartProps: Dispatch<SetStateAction<Product[]>>
}
export default function ProductItem({ product, setCartProps }: Props) {
  const [cart, setCartRecoil] = useRecoilState(cartAtom)
  const dispatch = useAppDispatch()
  const add = () => {
    setCartProps(prev => [...prev, product])
    setCartRecoil(prev => [...prev, product])
    dispatch(addProduct(product))
  }

  return (
    <div className='card bg-body-tertiary'>
      <div className='hstack'>
        <img src={product.img} className='bg-light img-thumbnail' style={{ height: '9rem' }} />
        <div className='card-body'>
          <div className='card-title h5 text-break'>{product.name}</div>
          <p className='card-text'>${product.price.toFixed(2)}</p>
          <button className='btn btn-primary' disabled={cart.includes(product)} onClick={add}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
