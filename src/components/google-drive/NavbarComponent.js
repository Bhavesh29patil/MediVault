import React from 'react'
import {Navbar , Nav} from 'react-bootstrap' 
import styles from "./Navbar.module.css"
export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className={styles.nav}>
      <Navbar.Brand href="/" className={styles.navcom1}>
        <h2 style={{paddingLeft: "10%"}}>MediVault</h2>
      </Navbar.Brand>
      <Nav.Link href = "/home" className={styles.navcom2}>
      <p>Home</p>
      </Nav.Link>
      <Nav.Link href = "/user" className={styles.navcom2}>
      <p>Profile</p>
      </Nav.Link>
      <Nav.Link href = "/blood-bank" className={styles.navcom2}>
      <p>Blood Bank</p>
      </Nav.Link>
      <Nav.Link href = "/bed-booking" className={styles.navcom2}>
      <p>Bed-booking</p>
      </Nav.Link>
    </Navbar>
  )
}
