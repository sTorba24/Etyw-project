import React, {useContext, useEffect, useState} from "react";
import star from '../images/star.png'
import {Button, Card, Col} from "react-bootstrap";
import {AuthContext} from "../context/AuthContext";

export const ProductCard = ({product, productPage}) => {
  const [selectedProducts, setSelectedProducts] = useState(JSON.parse(localStorage.selectedProducts));

  return (
    <Col className={productPage ? "product-card" : ''}>
      <Card border="dark">
        <Card.Header>
          <img src={product.image} height='150px' width="200px"/>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column">
          <div className="mb-2">{product.title}</div>
          <div className="d-flex justify-content-center mb-2">
            <div>Rate: {product.rating.rate} </div>
            <img src={star} height='20px' width='20px'/>
            <div> Count: {product.rating.count}</div>
          </div>
          <div className="text-start mb-2">
            <h4>{product.price}$</h4>
          </div>
            { productPage &&
                <Button
                    onClick={() => {
                        const selectedProducts = JSON.parse(localStorage.selectedProducts)
                        selectedProducts.push(product)
                        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
                    }}
                >
                    Add to cart
                </Button>}
            { !productPage &&
                <Button
                    className="bg-danger"
                    onClick={(e) => {
                      const filteredProducts = selectedProducts.filter(el => +el.id !== +product.id)

                      localStorage.setItem('selectedProducts', JSON.stringify(filteredProducts))
                      setSelectedProducts(filteredProducts)
                      window.location.reload()
                    }}
                >
                  Delete item
                </Button>}
        </Card.Body>
      </Card>
    </Col>
  )
}
