import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';



const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the token from the cookie
    const token = Cookies.get('userToken');
    if(token){
      try{
        const parseToken = JSON.parse(token);
        // console.log(parseToken);
        setUserToken(parseToken);

      }catch(e){
        console.log("Failed to parse token:", e);
      }
    }
  }, []);

  const resetPassword = ((e) => {
    e.preventDefault()
    const email = userToken.EmailId
    if(newPassword===confirmPassword){
      axios.post("http://127.0.0.1:8000/user/updatePassword", { email, password: newPassword })
      .then(result => {

          if (result.data.message.success==true) {


              toast.success(result.data.message.message)
              setTimeout(() => {
                navigate("/")
              }, 1000);
             
          }  
          else{
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
      <div className='user_Container'>
        <div className='curved-shape' id='cs1'></div>
        <div className='curved-shape2' id='cs2'></div>
        <div className='user_form-box Login' id="login">
          <h2>Change Password</h2>
          <form>
            <div className='user_input-box'>
              <input type='password' required
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword} />
              <label>New Password</label>

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

    </>
  )
}


export default ChangePassword