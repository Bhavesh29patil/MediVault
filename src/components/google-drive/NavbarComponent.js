import React from 'react'
import {Navbar , Nav} from 'react-bootstrap' 
import styles from "./Navbar.module.css"
export default function NavbarComponent() {
  return (
    <Navbar  expand="lg" className={styles.nav}>
      <Navbar.Brand href="/" className={styles.navcom1}>
        <h2>MediVault</h2>
      </Navbar.Brand>
      <Nav.Link href = "/user" className={styles.navcom2}>
      <p>Profile</p>
      </Nav.Link>
    </Navbar>
  )
}
