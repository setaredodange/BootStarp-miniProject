import React, { Component } from 'react'
 
import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap'


export default class Menus extends Component {
 


  render() {
    return (
    <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Frontend</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Html,Css</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  JavaScript
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                 ReactJs
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                concat us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </>
        
     
    )
  }
}




