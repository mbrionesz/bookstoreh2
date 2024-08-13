import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext'; // Importa CartProvider

function App() {
  return (
    <CartProvider> {/* Envuelve toda la aplicación en CartProvider */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/book/:id" component={BookDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;


