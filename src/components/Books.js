import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { Container, Row } from 'react-bootstrap';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/books') // Una Api despues con los datos de libros para extraerla desde ahí
      .then(response => response.json())
      .then(data => {
        setBooks(data);  
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading books...</p>;
  }

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

