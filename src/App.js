import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layouts/Header";
import AvailableProducts from "./components/products/AvailableProduct";
import CartProvider from "./components/store/CartProvider";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <BrowserRouter>
        <Header onShowCart={showCartHandler} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/store" component={AvailableProducts}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </BrowserRouter>

     <Footer/> 

      
    </CartProvider>
  );
};

export default App;
