import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../stateManagement/recoil/cartAtom'

export default function ShoppingCart() {
  const [cart, setCart] = useRecoilState(cartAtom)
  const clearCart = () => setCart([])

  if (!cart.length) return (
    <>
      <p className='mt-5'>There are no items in the cart!</p>
      <Link to='/'>
        <button type='button' className='btn btn-primary'>Return to the store</button>
      </Link>
    </>
  )

  return (
    <div className='container'>
      <div className='row gy-3 mt-0'>
        {cart.map(product =>
          <div key={product.id} className='col-6'>
            <div className='card bg-body-tertiary'>
              <div className='hstack justify-content-between'>
                <img src={product.img} className='bg-light img-thumbnail' style={{ height: '5rem' }} />
                <p className='m-0 py-2 px-3'>{product.name}</p>
                <p className='m-0 py-2 p-3'>${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <button type='button' className='btn btn-primary mt-3' onClick={clearCart}>Clear cart</button>
    </div>
  )
}
