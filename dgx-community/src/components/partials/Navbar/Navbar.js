// import React from 'react';

import React, { useState, useEffect } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
// import UserProfile from '../../UserProfile/UserProfile';
import Profile from '../../Profile/Profile';


const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    // Retrieve the token from the cookie
    const token = Cookies.get('userToken');
    if (token) {
      try {
        const parseToken = JSON.parse(token);
        // console.log(parseToken);
        setUserToken(parseToken);

      } catch (e) {
        console.log("Failed to parse token:", e);
      }
    }
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleLogout = () => {
    Cookies.remove('userToken');
  }

  // const {
  //   authUser,
  //   setAuthUser,
  //   isLoggedIn,
  //   setIsLoggedIn } = useAuth()

  //   const Login = (e) => {
  //     e.preventDefault()
  //     isLoggedIn(true)
  //     // setAuthUser({

  //     // })
  //   }



  const Menu = () => (
    <>
      <p><Link to="/DiscussionBoard">Discussions</Link></p>
      <p><Link to="/EventAndWorkshop">Event and Workshop</Link></p>
      <p><Link to="/CommunityGuidelines">Community Guidelines</Link></p>
      <p><Link to="/Contact Us">Contact Us</Link></p>
      {(userToken) ? (<> <div className="dropdown-container" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div
          className="profileBtn"
          style={{ paddingRight: "80px" }}

        >
          <span>Wellcome  {userToken.Name}</span>
          <i><img src="IMAGES\icons8-female-profile-48.png" alt="" /></i>
        </div>
        {isDropdownVisible && (
          <div className="dropdown-content">
            <Link to="/Profile">User Profile</Link>
            <a href="/" onClick={handleLogout}>Logout</a>
          </div>
        )}
      </div> </>) : (<div className='loginBtn'>
        <button type='button' className='Loginbutton'><a href='/MainForm'>Login</a></button>
      </div>)}
    </>
  )

  const [toggleMenu, setToggleMenu] = useState(false);
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
          <a href='/'>

            <img src="IMAGES\dgx-logo light.png" alt="" />
          </a>
        </div>
        <div className='dgx_navbar-links'>
          <div className='dgx_navbar-links_container'>
            <Menu />

          </div>
        </div>
        {/* <div className='dgx_navbar-profile_sign'>
          <i><img src="IMAGES\icons8-female-profile-48.png" alt="" /></i>
        </div> */}
        <div className='dgx_navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='dgx_navbar-menu_container scale-up-center'>
              <div className='dgx_navber-menu_container-links'>
                <Menu />

                <div className='dgx_navbar-menu_container-profile_sign'>
                  <i></i>
                </div>

                <div className='dgx_navbar-sign'>
                  {/* <p>Sign In</p> */}
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