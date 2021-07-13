import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BookCard(props) {
  return (
    <>
      {props.result.map((book) => {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="left" alt={book.image} src={book.image} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
            <Button variant="primary">{book.link}</Button>
          </Card.Body>
        </Card>;
      })}
    </>
  );
}

export default BookCard;
