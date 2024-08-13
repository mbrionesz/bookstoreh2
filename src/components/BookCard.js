import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito

function BookCard({ title, author, price, id }) {
  const { addToCart } = useContext(CartContext); // Usa el contexto para acceder a addToCart

  const handleAddToCart = () => {
    addToCart({ id, title, author, price }); // Agrega el libro al carrito
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Autor {author}</Card.Subtitle>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;

