import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import ProductCardDeck from './components/ProductCardDeck'
import { CartContext } from './contexts/CartContext'
import Product from './data/Product'

function App() {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <>
      <CartContext.Provider value={cart}>
        <NavigationBar cartProps={cart} />
      </CartContext.Provider>
      <ProductCardDeck setCart={setCart} />
    </>
  )
}

export default App
