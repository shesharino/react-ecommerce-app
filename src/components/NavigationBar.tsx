import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../atoms/cartAtom'
import { useAppSelector } from '../redux/hooks'
import Product from '../data/Product'

type Props = {
  cartProps: Product[]
}
export default function NavigationBar({ cartProps }: Props) {
  const cartContext = useContext(CartContext)
  const cartRecoil = useRecoilValue(cartAtom)
  const cartRedux = useAppSelector(state => state.cart)

  return (
    <nav className="bg-body-secondary navbar">
      <div className="container">
        <a href="#" className="navbar-brand">React E-Commerce</a>
        <div className="justify-content-end">
          <div className="hstack gap-3">
            <i className="bi bi-cart fs-3"></i>
            <span className="cart-indicator">Props: {cartProps.length && cartProps.length}</span>
            <span className="cart-indicator">Context: {cartContext.length && cartContext.length}</span>
            <span className="cart-indicator">Recoil: {cartRecoil.length && cartRecoil.length}</span>
            <span className="cart-indicator">Redux: {cartRedux.length && cartRedux.length}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
