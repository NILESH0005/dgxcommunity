import React from 'react';
import axios from 'axios';
import '../Register/Register.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setCurrentForm }) => {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    // const [messages, setMessages] = useState({
    //     number: false,
    //     specialChar: false,
    //     uppercase: false,
    //     lowercase: false,
    //     length: false
    // });

    // const switchRegister = () => {
    //     document.getElementById("login").style.display = "none"
    //     document.getElementById("register").style.display = "block"
    //     document.getElementById("cs1").classList.remove('activeform')
    //     document.getElementById("cs2").classList.add('activeform')
    // }
    // const switchLogin = () => {
    //     // document.getElementById("register").style.display = "none"
    //     // document.getElementById("login").style.display = "block"
    //     // document.getElementById("cs2").classList.remove('activeform')
    //     // document.getElementById("cs1").classList.add('activeform')
    // }
    // switchLogin()


    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/user/login", { email, password })
            .then(result => {

                if (result.data.message.success) {
                    Cookies.set('userToken', JSON.stringify(result.data.message.Data), { expires: 7 });



                    // console.log(result.data.message.Data);
                    if (!result.data.message.Data.flag_password_change) {
                        toast.success('Wellcome user change your password');
                        setTimeout(() => {
                            setCurrentForm(3)
                        }, 1000);
                    } else {
                        toast.success('You have login successfully');

                        setTimeout(() => {

                            navigate('/');
                        }, 1000);
                    }
                }


                // setTimeout(() => {
                //   navigate('/');
                // }, 2000); // 2 seconds delay
            })
            .catch(error => {
                if (error.response.status === 401) {
                    toast.error('email or password is wrong');
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
            <div className='user_Container' style={{background: "blue"}}>
                <div className='curved-shape' id='cs1'></div>
                <div className='curved-shape2' id='cs2'></div>
                <div className='user_form-box Login' id="login">
                    <h2>Log In</h2>
                    <form onSubmit={handleLogin}>
                        <div className='user_input-box'>
                            <input type='text' required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />
                            <label>User email</label>
                            <FaUser className='user_icon' />
                        </div>
                        <div className='user_input-box'>
                            <input type='password' required
                                value={password}
                                onChange={(e) => { setpassword(e.target.value) }}
                            />
                            <label>User Password</label>
                            <FaLock className='user_icon' />
                        </div>
                        <div className='user_input-box'>
                            <button type='submit' className='user_Login-btn'>Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login