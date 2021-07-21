import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function bookCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="left" alt={props.alt} src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button href={props.link} target="_blank" variant="primary">
            {props.cat}
          </Button>
          <Button data-id={props.id}>{props.name}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default bookCard;
