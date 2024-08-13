import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, ListGroup, Button } from 'react-bootstrap';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext); // Accede al estado del carrito y la función para eliminar libros

  return (
    <Container>
      <h2>Your Cart</h2>
      <ListGroup>
        {cart.map((book, index) => (
          <ListGroup.Item key={index}>
            {book.title} - ${book.price}
            <Button variant="danger" onClick={() => removeFromCart(book.id)} style={{ float: 'right' }}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Cart;
