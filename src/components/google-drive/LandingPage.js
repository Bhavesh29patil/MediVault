import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
  {/* <link rel="stylesheet" href="LandingPage.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  /> */}
  <div className="hero">
    <nav className='nav1'>
      <img src="sdsd" className="logo" />
      <ul>
        <li>
          <a href="#">ABOUT US</a>
        </li>
        {/* <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">HIRE ME</a></li> */}
      </ul>
    </nav>
    <div className="detel">
      <h1>
        Medi<span>Vault</span>
      </h1>
      <p>Help to keep yoir doc safe and handy </p>
      <a href="/login" className='log'>LOGIN</a>
      <a href="/signup" className='sig'>SIGNUP</a>
    </div>
    <div className="images">
      {/* <img src="images/shape.png" class="shape"> */}
      {/* <img src="images/MediVaultWebsite.png" class="girl"> */}
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_iivslabn.json"
        background="transparent"
        speed={1}
        loop=""
        autoPlay=""
      />
    </div>
    {/* <div class="social">
     <a href="#"><i class="fab fa-dribbble"></i></a>
     <a href="#"><i class="fab fa-instagram"></i></a>
     <a href="#"><i class="fab fa-behance"></i></a>
  </div> */}
  </div>
</>

  )
}



