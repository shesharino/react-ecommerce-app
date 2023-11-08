import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import Product from '../data/Product'

type Props = {
  cartProps: Product[]
}
export default function NavigationBar({ cartProps }: Props) {
  const cartContext = useContext(CartContext)

  return (
    <nav className="bg-body-secondary navbar">
      <div className="container">
        <a href="#" className="navbar-brand">React E-Commerce</a>
        <div className="justify-content-end">
          <div className="hstack gap-3">
            <i className="bi bi-cart fs-3"></i>
            <span className="cart-indicator">Props: {cartProps.length && cartProps.length}</span>
            <span className="cart-indicator">Context: {cartContext.length && cartContext.length}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
