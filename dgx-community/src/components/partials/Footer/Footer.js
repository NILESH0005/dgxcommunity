import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <>
        {/* <footer style={{background: linear-gradient(to left, #0021d8, #142ca6);}}> */}
        <footer>
        <div class="footer_row">
            <div class="footer_col">
                <img src="IMAGES\dgx-logo.png" class="dgx_logo" alt=""/>
                <img src="IMAGES\logo-full-white.png"  alt=""/>
            </div>
            <div class="footer_col">
                <h3>Community and Support </h3>
                <ul>
                    <li>DGX Communityul</li>
                    <li>Help</li>
                    <li>Network</li>
                    <li>Help Centre</li>
                </ul>
            </div>

            <div class="footer_col">
                <h3>About   </h3>
                <ul>
                    <li>About Us</li>
                    <li>GRIL</li>
                    <li>Solutions</li>

                </ul>
            </div>

            <div class="footer_col">
                <h3>Newsletter  
                    {/* <div class="underline"><span></span></div> */}
                     </h3>
                <form class="newsletterForm" action="">
                    <img src="IMAGES\icons8-email-48.png" alt=""/>
                    <input type="email" placeholder="Enter you email id" required/>
                    <button type="submit"><img src="IMAGES\icons8-arrow-right-64.png" alt="" class="btn_img"/></button>
                </form>
                <div class="social-icons">
                    <img src="IMAGES\icons8-facebook-50.png" alt=""/>
                    <img src="IMAGES\icons8-instagram-48.png" alt=""/>
                    <img src="IMAGES\icons8-linkedin-64.png" alt=""/>
                    <img src="IMAGES\icons8-twitter-64.png" alt=""/>
                </div>

            </div>
        </div>
        <hr/>
        <p class="copyright">Global Infoventures @2000 - All Rights Reserved</p>
    </footer>
    </>
  )
}

export default Footer