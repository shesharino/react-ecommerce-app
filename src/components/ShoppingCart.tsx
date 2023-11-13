import { Dispatch, SetStateAction } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Product from '../data/Product'
import { cartAtom } from '../stateManagement/recoil/cartAtom'
import { removeProduct, removeAll } from '../stateManagement/redux/cartSlice'
import { useAppDispatch } from '../stateManagement/redux/hooks'

type Props = {
  setCartProps: Dispatch<SetStateAction<Product[]>>
}
export default function ShoppingCart({ setCartProps }: Props) {
  const [cartRecoil, setCartRecoil] = useRecoilState(cartAtom)
  const dispatch = useAppDispatch()
  const remove = (product: Product) => {
    setCartProps(prev => prev.filter(x => x.id !== product.id))
    setCartRecoil(prev => prev.filter(x => x.id !== product.id))
    dispatch(removeProduct(product))
  }
  const clearCart = () => {
    setCartProps([])
    setCartRecoil([])
    dispatch(removeAll())
  }

  if (!cartRecoil.length) return (
    <>
      <p className='mt-5'>
        <FormattedMessage id='cart.Empty' />
      </p>
      <Link to='/'>
        <button type='button' className='btn btn-warning'>
          <FormattedMessage id='cart.Return' />
        </button>
      </Link>
    </>
  )

  return (
    <div className='container'>
      <div className='row gy-3 mt-0'>
        {cartRecoil.map(product =>
          <div key={product.id} className='col-lg-6'>
            <div className='card bg-body-tertiary'>
              <div className='hstack justify-content-between' style={{ height: '5rem' }}>
                <img alt={product.name} src={product.img} className='bg-light img-thumbnail h-100' />
                <p className='m-0 py-2 px-3'>
                  <FormattedMessage id={`products.${product.name}`} />
                </p>
                <p className='m-0 py-2 p-3'>
                  <FormattedNumber style='currency' currency='USD' value={product.price} />
                </p>
                <button type='button' className='btn btn-danger h-100' onClick={() => remove(product)}>
                  <FormattedMessage id='cart.Remove' />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button type='button' className='btn btn-warning mt-3' onClick={clearCart}>
        <FormattedMessage id='cart.Clear' />
      </button>
    </div>
  )
}
