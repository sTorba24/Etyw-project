import React, {useCallback, useEffect, useState} from "react";
import cartBig from '../images/cart-big.png'
import jordan from '../images/products/jordan-grey.jpg'
import {useHttp} from "../hooks/http.hooks";
import {Button, Card, Nav, Row} from "react-bootstrap";
import {ProductsList} from "../components/productsList";

export const CartPage = () => {
  let total = 0
  const [products, setProducts] = useState([])
  const {request} = useHttp()

  const fetchData = useCallback(async () => {
      setProducts(JSON.parse(localStorage.selectedProducts))
  }, [request])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  products.forEach(el => {
    total += el.price
  })
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-center">
        <div className="d-flex flex-column text-center">
          <h1 className="pb-5">Cart page</h1>
          <img className="pb-3 mx-auto" src={cartBig} alt='Cart'></img>
          {/*<span>Unfortunelly, you have no selected products</span>*/}

          {products.length
              ? <div>
                <Row className="g-4 mb-5">
                  <ProductsList products={products} productPage={false}></ProductsList>
                </Row>

                <div className="d-flex flex-column justify-content-center">
                  <h2>Total: {total}$</h2>
                  <Button className="bg-primary w-25 mx-auto"><Nav.Link className="link-dark" href="/checkout">Checkout</Nav.Link></Button>
                </div>
              </div>
              : <h4>Oops, You have no selected products. <Nav.Link href="/">Shop now</Nav.Link></h4>
          }
        </div>
      </Card.Body>
    </Card>
  )
}
