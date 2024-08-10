import React from 'react';
import { Card, Button } from 'react-bootstrap';

function BookCard({ title, author, price }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Autor {author}</Card.Subtitle>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
