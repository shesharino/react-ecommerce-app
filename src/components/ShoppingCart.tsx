import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Product from '../data/Product'
import { cartAtom } from '../stateManagement/recoil/cartAtom'
import { useAppDispatch } from '../stateManagement/redux/hooks'
import { removeProduct, removeAll } from '../stateManagement/redux/cartSlice'

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
      <p className='mt-5'>There are no items in the cart!</p>
      <Link to='/'>
        <button className='btn btn-primary'>Return to the store</button>
      </Link>
    </>
  )

  return (
    <div className='container'>
      <div className='row gy-3 mt-0'>
        {cartRecoil.map(product =>
          <div key={product.id} className='col-6'>
            <div className='card bg-body-tertiary'>
              <div className='hstack justify-content-between'>
                <img src={product.img} className='bg-light img-thumbnail' style={{ height: '5rem' }} />
                <p className='m-0 py-2 px-3'>{product.name}</p>
                <p className='m-0 py-2 p-3'>${product.price.toFixed(2)}</p>
                <button className='btn btn-primary me-4' onClick={() => remove(product)}>Remove</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className='btn btn-primary mt-3' onClick={clearCart}>Clear cart</button>
    </div>
  )
}
