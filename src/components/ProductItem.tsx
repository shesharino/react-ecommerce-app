import { Dispatch, SetStateAction } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import { useRecoilState } from 'recoil'
import Product from '../data/Product'
import { cartAtom } from '../stateManagement/recoil/cartAtom'
import { addProduct } from '../stateManagement/redux/cartSlice'
import { useAppDispatch } from '../stateManagement/redux/hooks'

type Props = {
  product: Product, setCartProps: Dispatch<SetStateAction<Product[]>>
}
export default function ProductItem({ product, setCartProps }: Props) {
  const [cart, setCartRecoil] = useRecoilState(cartAtom)
  const dispatch = useAppDispatch()
  const addToCart = () => {
    setCartProps(prev => [...prev, product])
    setCartRecoil(prev => [...prev, product])
    dispatch(addProduct(product))
  }

  return (
    <div className='card bg-body-tertiary'>
      <div className='hstack'>
        <img alt={product.name} src={product.img} className='bg-light img-thumbnail' style={{ height: '9rem' }} />
        <div className='card-body'>
          <div className='card-title h5 text-break'>
            <FormattedMessage id={`products.${product.name}`} />
          </div>
          <p className='card-text'>
            <FormattedNumber style='currency' currency='USD' value={product.price} />
          </p>
          <button type='button' className='btn btn-primary' disabled={cart.includes(product)} onClick={addToCart}>
            <FormattedMessage id='cart.Add' />
          </button>
        </div>
      </div>
    </div>
  )
}
