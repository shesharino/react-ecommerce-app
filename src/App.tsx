import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'
import NavigationBar from './components/NavigationBar'
import ProductList from './components/ProductList.tsx'
import ShoppingCart from './components/ShoppingCart.tsx'
import Product from './data/Product'
import { CartContext } from './stateManagement/context/CartContext'
import { store } from './stateManagement/redux/store.ts'

export default function App() {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <RecoilRoot>
      <Provider store={store}>
        <BrowserRouter>
          <CartContext.Provider value={cart}>
            <NavigationBar cartProps={cart} />
          </CartContext.Provider>
          <Routes>
            <Route path='/' element={<ProductList setCartProps={setCart} />} />
            <Route path='/cart' element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </RecoilRoot>
  )
}
