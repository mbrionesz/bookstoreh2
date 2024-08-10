import React from 'react';
import BookCard from './BookCard'; // Como base del punto 3 en reutilización con props.
import { Container, Row } from 'react-bootstrap';

function Books() {
  // Ejemplo de lista de libros
  const books = [
    { id: 1, title: "Book One", author: "Author One", price: 29.99 },
    { id: 2, title: "Book Two", author: "Author Two", price: 19.99 },
    { id: 3, title: "Book Three", author: "Author Three", price: 24.99 }
  ];

  return (
    <Container>
      <Row>
        {books.map(book => (
          <BookCard 
            key={book.id} 
            title={book.title} 
            author={book.author} 
            price={book.price} 
          />
        ))}
      </Row>
    </Container>
  );
}

export default Books;
