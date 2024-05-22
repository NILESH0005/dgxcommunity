// import React from 'react';
import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const Menu = () => (
    <>
      <p><a href="discussionBoard.html">Discussions</a></p>
      <p><a href="eventAndWorkshop.html">Event and Workshop</a></p>
      <p><a href="communityGuidelines.html">Community Guidelines</a></p>
      <p><a href="eventAndWorkshop.html">Contact Us</a></p>
    </>
  )

  const[toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      {/* <nav className='header'>
        <div className="headerLogo">
          <img src="IMAGES\dgx-logo light.png" alt="" />
        </div>
        <ul>
          <div> */}
      {/* <img src="IMAGES\icons8-close-26.png" alt=""/> */}
      {/* </div>
          <li><a href="discussionBoard.html">Discussions</a></li>
          <li><a href="eventAndWorkshop.html">Event and Workshop</a></li>
          <li><a href="communityGuidelines.html">Community Guidelines</a></li>
        </ul> */}
      {/* <div className="btn" style={{ paddingRight: "80px" }}>
          <i><img src="IMAGES\icons8-female-profile-48.png" alt="" /></i>
        </div>
      </nav> */}

      <div className='dgx_navbar'>
      <div className='dgx_navbar-links_logo'>
            <img src="IMAGES\dgx-logo light.png" alt="" />
          </div>
        <div className='dgx_navbar-links'>
          <div className='dgx_navbar-links_container'>
            <Menu />

          </div>
        </div>
        <div className='dgx_navbar-profile_sign'>
          <i><img src="IMAGES\icons8-female-profile-48.png" alt="" /></i>
        </div>
        <div className='dgx_navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='dgx_navbar-menu_container scale-up-center'>
              <div className='dgx_navber-menu_container-links'>
                <Menu />
                {/* <div className='dgx_navbar-menu_container-profile_sign'>
                  <i><img src="IMAGES\icons8-female-profile-48.png" alt="" /></i>
                </div> */}
                <div className='dgx_navbar-sign'>
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar