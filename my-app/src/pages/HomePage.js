import React, {useCallback, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hooks";
import {Card, Row} from "react-bootstrap";
import {ProductsList} from "../components/productsList";

export const HomePage = () => {
    const [products, setProducts] = useState([])
    const {request} = useHttp()

    const fetchData = useCallback(async () => {
        try {
            const fetched = await request('https://fakestoreapi.com/products')
            setProducts(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchData()
        if(!localStorage.selectedProducts) {
            localStorage.setItem('selectedProducts', JSON.stringify([]))
        }
    }, [fetchData])

    return (
        <Card className="mb-3">
            <Card.Body className="d-flex justify-content-center">
                <div className="d-flex flex-column text-center">
                    <h1 className="pb-5">List of products</h1>

                    <Row xs={1} md={3} className="g-4">
                        <ProductsList products={products} productPage={true}></ProductsList>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}
