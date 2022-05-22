import React from "react";
// import jordan-grey from './images/products/jordan-grey.jpeg'
import {Card, Col} from "react-bootstrap";

export const ProductCard = (props) => {
  return (
    <Col>
      <Card border="dark">
        <Card.Header>
          <img src={props.image} height='150px' width="200px"/>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center">
          image should be
        </Card.Body>
      </Card>
    </Col>
  )
}
