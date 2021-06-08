import { useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
function App() {

  const [showCart,setCartShown]=useState(false);
  const cartIsShown=()=>{
    setCartShown(true);
  };
  const cartIsHidden=()=>{
    setCartShown(false);
  };

  return (
    
    <CartProvider>
      {showCart && <Cart onUse={cartIsHidden}/>}
      <Header onShowCart={cartIsShown}/>
      <Meals/>
    </CartProvider>
      
    
  );
}

export default App;
