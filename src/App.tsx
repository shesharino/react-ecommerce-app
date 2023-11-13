import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import NavigationBar from './components/NavigationBar'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import Product from './data/Product'
import { CartContext } from './stateManagement/context/CartContext'
import { languageAtom } from './stateManagement/recoil/languageAtom'
import { store } from './stateManagement/redux/store'

export default function App() {
  const [cart, setCart] = useState<Product[]>([])
  const language = useRecoilValue(languageAtom)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <IntlProvider {...language}>
          <CartContext.Provider value={cart}>
            <NavigationBar cartProps={cart} />
          </CartContext.Provider>
          <Routes>
            <Route path='/' element={<ProductList setCartProps={setCart} />} />
            <Route path='/cart' element={<ShoppingCart setCartProps={setCart} />} />
          </Routes>
        </IntlProvider>
      </BrowserRouter>
    </Provider>
  )
}
