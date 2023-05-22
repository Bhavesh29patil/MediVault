import React from 'react'
import styles from'./AboutUs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutUs(props) {
  return (
    <>
  <section>
      <div className={styles.column}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={props.profilephoto} />
          </div>
          <h3>{props.name}</h3>
          <p>{props.rollno}</p>
          <div className={styles.iconz}>
            <a href={props.insta}>
            <i className="fab fa-instagram" />
            </a>
            <a href={props.linkedin}>
              <i className="fab fa-linkedin" />
            </a>
            {/* <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fas fa-envelope" />
            </a> */}
          </div>
        </div>
      </div>
  </section>
</>
  )
}
