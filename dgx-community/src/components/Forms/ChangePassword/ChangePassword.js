import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import '../Register/Register.css';
import { FaUser, FaLock } from "react-icons/fa";



const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState({
    number: false,
    specialChar: false,
    uppercase: false,
    lowercase: false,
    length: false
  });

  const handleChange = (e) => {
    if (e.target.name === 'newPassword') {
      // Cookies.set('userToken', e.target.value, { expires: 7 });

      const inputValue = e.target.value;
      setNewPassword(e.target.value);
      
      // console(inputValue)

      const containsNumber = /\d/.test(inputValue);
      const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);
      const containsUppercase = /[A-Z]/.test(inputValue);
      const containsLowercase = /[a-z]/.test(inputValue);
      const containsLength = inputValue.length >= 8;

      setMessages({
        number: !containsNumber,
        specialChar: !containsSpecialChar,
        uppercase: !containsUppercase,
        lowercase: !containsLowercase,
        length: !containsLength
      });
    }
  }

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

  const handleLogout = () => {
    Cookies.remove('userToken');
    navigate('/');

  }


  // window.addEventListener("unload",(()=>{
  //   // setTimeout(() => {
  //     handleLogout()
  //   // }, 1000);
  // }))

  // let a = window.confirm("hello user")

  // handleLogout()
  // useEffect(() => {
  //   const handleCustomLogout = () => {
  // handleLogout();
  //   };

  //   window.addEventListener('customLogout', handleCustomLogout);

  //   return () => {
  //     window.removeEventListener('customLogout', handleCustomLogout);
  //   };
  // }, [navigate]);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     // const confirmationMessage = 'Are you sure you want to reload? This will clear all cookies.';
  //     // if (window.confirm(confirmationMessage)) {
  //       // Trigger the custom logout event
  //       // event.preventDefault();
  //       handleLogout();
  //       // const customEvent = new Event('customLogout');
  //       // window.dispatchEvent(customEvent);
  //     // } else {
  //     //   // Some browsers require this to show the dialog
  //     //   event.preventDefault();
  //     //   event.returnValue = '';
  //     // }
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);



  const resetPassword = ((e) => {
    e.preventDefault()
    const email = userToken.EmailId
    if (newPassword === confirmPassword) {
      axios.post("http://127.0.0.1:8000/user/updatePassword", { email, password: newPassword })
        .then(result => {

          if (result.data.message.success == true) {

            
            toast.success(result.data.message.message)
            setTimeout(() => {
              navigate("/")
            }, 1000);

          }
          else {
            toast.error("something went wrong please try again")
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            toast.error('email or password is wrong');
          } else {
            console.log('An error occurred:', error.message);
          }
        });
    }

  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match');
      return;
    }
    setLoading(true);

    axios.post("http://127.0.0.1:8000/user/changePassword", { currentPassword, newPassword })
      .then(result => {
        setLoading(false);
        toast.success('Password changed successfully');
        setTimeout(() => {
          navigate('/');
          // window.location.reload(true);
          // toast.success('Password Changer. Login to Continue');

        }, 1000);
      })
      .catch(error => {
        setLoading(false);
        if (error.response && error.response.status === 401) {
          toast.error('Current password is wrong');
        } else {
          console.log('An error occurred:', error.message);
        }
      });
  }




  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <header className="loginHeader">
        <div className="overlay">
          <h1>Change Password</h1>
          <h3>Welcome to the community to lead world's innovations</h3>
        </div>
      </header>
      <div className='user_Container'>
        <div className='curved-shape' id='cs1'></div>
        <div className='curved-shape2' id='cs2'></div>
        <div className='user_form-box Login' id="login">
          <h2>Change Password</h2>
          <form>
            <div className='user_input-box'>
              <input type='password' required
                value={currentPassword}
                onChange={(e) => { setCurrentPassword(e.target.value) }}
              />
              <label>Current Password</label>
              <FaLock className='user_icon' />
            </div>
            <div className='user_input-box'>
              <input type='password' required
                name='newPassword'
                onChange={(e) => handleChange(e)}
                value={newPassword} />
              <label>New Password</label>
              <FaLock className='user_icon' />
            </div>
            <div className='compare' id='mymsg'>
              {messages.number && (
                <p>Password should contain at least one number.</p>
              )}
              {messages.specialChar && (
                <p>Password should contain at least one special character.</p>
              )}
              {messages.uppercase && (
                <p>Password should contain at least one uppercase letter.</p>
              )}
              {messages.lowercase && (
                <p>Password should contain at least one lowercase letter.</p>
              )}
              {messages.length && (
                <p>Password should contain at least eight characters.</p>
              )}
            </div>
            <div className='user_input-box'>
              <input type='password' required
                onChange={(e) => setConfirmPassword(e.target.value)}

                value={confirmPassword} />
              <label>Confirm Password</label>

            </div>
            <div className='user_input-box'>
              <button onClick={resetPassword} className='user_Login-btn'>Reset Password</button>
            </div>

          </form>
        </div>
      </div>
      {loading && <Loader />}
    </>
  )
}

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};


export default ChangePassword