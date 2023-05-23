import React from 'react'
import AboutUs from './AboutUs'
import styles from'./AboutUs.module.css'
import logo from './MediVaultWebsite.png'


export default function AboutUsData() {
  return (
    <>
        <div className={styles.bgColor}>
<div className={styles.first}>
  <h1 className={styles.h1}>About Us</h1>
  <p className={styles.para1}>
    Welcome to MediVault, a revolutionary app designed to securely store and manage your medical reports. At MediVault, we believe that easy access to medical information can make a significant difference in emergency situations, enabling doctors to provide timely and accurate care.
  </p>
</div>

<div className={styles.first}>
<h2 className={styles.h2}>Our Team</h2>
  <p className={styles.para}>
    We are a dedicated team of five developers passionate about leveraging technology to improve healthcare. Together, we bring a diverse set of skills and expertise to create an app that meets your needs. Let us introduce ourselves:
  </p>
</div>

<div className={styles.first}>
  <h2 className={styles.h2}>Our Mission</h2>
  <p className={styles.para}>
    At MediVault, our mission is to empower individuals and healthcare professionals with seamless access to medical reports. We strive to bridge the gap between patients and doctors, ensuring that vital information is readily available during critical moments.
  </p>
</div>

<div className={styles.first}>
  <h2 className={styles.h2}>Our Development Process</h2>
  <p className={styles.para}>
    We embarked on the MediVault project with a shared vision of transforming healthcare through technology. We employed agile development methodologies, enabling us to adapt and iterate quickly, while maintaining a strong focus on security, reliability, and user experience. Throughout the development process, we collaborated closely, leveraging each team member's expertise to create a powerful and user-centric app.
  </p>
</div>

<div className={styles.carr}>
<h2 className={styles.h2}>Our Team</h2>  
</div>

<div className={styles.row}>
    <AboutUs profilephoto={logo} name="Bhavesh" rollno="23156" insta="https://www.codechef.com/" />
    <AboutUs profilephoto="profile-img-1.png" name="Atharva" />
    <AboutUs profilephoto="profile-img-1.png" name="Ayush" />
    <AboutUs profilephoto="profile-img-1.png" name="Pankaj" />
    <AboutUs profilephoto="profile-img-1.png" name="Aryan" />
    </div>

<div className={styles.contact}>
<h2 className={styles.h2}>Contact Us</h2>
<p className={styles.para}>
  We value your feedback and inquiries. Please don't hesitate to reach out to us with any questions or suggestions. You can contact us at <a href="mailto:contact@medivault.com" className={styles.link}>contact@medivault.com</a> or fill out the contact form on our website.
</p>
<p className={styles.para2}>
  Follow us on social media for updates and news about MediVault:
</p>
</div>

</div>




   




    </>
  )
}
