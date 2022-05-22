import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import logo from '../images/logo-transparent.png'
import cart from '../images/cart.png'
import {Navbar, Container, Nav, Offcanvas} from "react-bootstrap";

export const NavBar = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const logoutHandler = (e) => {
    e.preventDefault()
    navigate('/', { replace: true })
    auth.logout()
  }
  return (
    <Navbar key="md" bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} height='56px' width='100%' alt='Logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-md`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <img src={logo} height='56px' width='100%' alt='Logo'></img>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/links">Link</Nav.Link>
              <Nav.Link href="/" onClick={logoutHandler}>Exit</Nav.Link>
              <Nav.Link href="/cart">
                <img src={cart} height='30px' width='100%' alt='Cart'></img>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
