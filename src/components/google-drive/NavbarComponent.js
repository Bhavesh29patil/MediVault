import React from 'react'
import {Navbar , Nav} from 'react-bootstrap' 
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        MediVault
      </Navbar.Brand>
      <Nav.Link href = "/user">
      Profile
      </Nav.Link>
    </Navbar>
  )
}
