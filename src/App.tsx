import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'
import NavigationBar from './components/NavigationBar'
import ProductCardDeck from './components/ProductCardDeck'
import Product from './data/Product'
import { CartContext } from './stateManagement/context/CartContext'
import { store } from './stateManagement/redux/store.ts'

function App() {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <>
      <RecoilRoot>
        <Provider store={store}>
          <CartContext.Provider value={cart}>
            <NavigationBar cartProps={cart} />
          </CartContext.Provider>
          <ProductCardDeck setCartProps={setCart} />
        </Provider>
      </RecoilRoot>
    </>
  )
}

export default App
