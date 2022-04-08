import { useState } from 'react'
import data from './products.json'
import { Product } from './Product'

function Home() {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      {data.products.map(product => <Product key={product.productId} product={product} addToCart={addToCart} />)}
    </div>
  );
}



// import './App.css';
// import { useState } from 'react';
// import data from './products.json';
// import { Product } from './Product';


// function Home() {

// const [cart, setCart] = useState(data.cart)
// const [cartStatus, setStatus] = useState({})


// const addToCart = (product) => {
//     setCart([...cart, product])
// }

// const removeFromCart = (product) => {
//   setCart(cart.filter(item => item !== product))
// }

// const setCartStatus = (key) => {
//   setStatus({...cartStatus, [key]: !cartStatus[key]})
//   console.log('THIS IS CART STATUS', cartStatus)
// }

//   return (
//     <div className="App">
//        {data.products.map(product => <Product key={product.productId} id={product.productId} product={product} addToCart={addToCart} 
//         removeFromCart={removeFromCart} setCartStatus={setCartStatus} cartStatus={cartStatus[product.productId]} />)}
     
//      <p>Items in cart {cart.length}</p>
//     </div>
//   );
// }

export default Home;