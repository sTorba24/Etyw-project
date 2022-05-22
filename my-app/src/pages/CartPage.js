import React from "react";
import cartBig from '../images/cart-big.png'
import jordan from '../images/products/jordan-grey.jpg'
import {Card, CardGroup, Row} from "react-bootstrap";
import {ProductCard} from "../components/productCard";

export const CartPage = () => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-center">
        <div className="d-flex flex-column text-center">
          <h1 className="pb-5">Cart page</h1>
          <img className="pb-3 mx-auto" src={cartBig} alt='Cart'></img>
          {/*<span>Unfortunelly, you have no selected products</span>*/}

          <Row xs={1} md={3} className="g-4">
            <ProductCard image={jordan}></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </Row>

        </div>
      </Card.Body>
    </Card>
  )
}
