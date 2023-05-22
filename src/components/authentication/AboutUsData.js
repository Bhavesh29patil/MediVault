import React from 'react'
import AboutUs from './AboutUs'
import styles from'./AboutUs.module.css'
import logo from './MediVaultWebsite.png'


export default function AboutUsData() {
  return (
    <>
    <div className={styles.row}>
      <div className={styles.heading}>Our Team</div>
    </div>
    <div className={styles.row}>
    <AboutUs profilephoto={logo} name="Bhavesh" rollno="23156" insta="https://www.codechef.com/" />
    <AboutUs profilephoto="profile-img-1.png" name="Atharva" />
    <AboutUs profilephoto="profile-img-1.png" name="Ayush" />
    <AboutUs profilephoto="profile-img-1.png" name="Pankaj" />
    <AboutUs profilephoto="profile-img-1.png" name="Aryan" />
    </div>
    </>
  )
}
