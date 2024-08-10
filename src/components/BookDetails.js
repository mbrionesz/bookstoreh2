import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  let { id } = useParams();

  return (
    <div>
      <h1>Details of Book {id}</h1>
      {/* Aquí se puede agregar más lógica para mostrar los detalles del libro */}
    </div>
  );
}

export default BookDetails;
