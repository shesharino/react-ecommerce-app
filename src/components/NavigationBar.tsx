import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Product from '../data/Product'
import { CartContext } from '../stateManagement/context/CartContext'
import { cartAtom } from '../stateManagement/recoil/cartAtom'
import { useAppSelector } from '../stateManagement/redux/hooks'
import CartIndicator from './CartIndicator'

type Props = {
  cartProps: Product[]
}
export default function NavigationBar({ cartProps }: Props) {
  const cartContext = useContext(CartContext)
  const cartRecoil = useRecoilValue(cartAtom)
  const cartRedux = useAppSelector(state => state.cart)

  return (
    <nav className='bg-body-secondary navbar'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>React E-Commerce</Link>
        <div className='justify-content-end'>
          <div className='hstack gap-3'>
            <Link to='/cart' title='Go to Cart'>
              <i className='bi bi-cart fs-3'></i>
              {cartRecoil.length > 0 &&
                <span className='d-inline-block px-3 bg-light rounded-pill floating'>
                  ${cartRecoil.reduce((sum, a) => sum + a.price, 0).toFixed(2)}
                </span>
              }

            </Link>
            <CartIndicator title='Props' count={cartProps.length} />
            <CartIndicator title='Context' count={cartContext.length} />
            <CartIndicator title='Recoil' count={cartRecoil.length} />
            <CartIndicator title='Redux' count={cartRedux.length} />
          </div>
        </div>
      </div>
    </nav>
  )
}
