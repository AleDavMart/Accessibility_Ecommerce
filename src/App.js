
import './App.css';
import data from './products.json';
import { Product } from './Product';

const [cart, setCart] = useState(data.cart)
const [cartStatus, setStatus] = useState({})


const addToCart = (product) => {
    setCart([...cart, product])
}

const removeFromCart = (product) => {
  setCart(cart.filter(item => item !== product))
}

const setCartStatus = (key) => {
  setStatus({...cartStatus, [key]: !cartStatus[key]})
  console.log('THIS IS CART STATUS', cartStatus)
}


function App() {
  return (
    <div className="App">
       {data.products.map(product => <Product key={product.productId} id={product.productId} product={product} addToCart={addToCart} 
        removeFromCart={removeFromCart} setCartStatus={setCartStatus} cartStatus={cartStatus[product.productId]} />)}
     
     <p>Items in cart {cart.length}</p>
    </div>
  );
}

export default App;