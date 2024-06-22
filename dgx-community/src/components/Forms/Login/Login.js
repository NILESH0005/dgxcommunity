import React from 'react';
import axios from 'axios';
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setCurrentForm }) => {
    // const [userToken, setUserToken] = useState(null);

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

    // useEffect(() => {
    //     // Retrieve the token from the cookie
    //     const token = Cookies.get('userToken');
    //     if (token) {
    //       try {
    //         const parseToken = JSON.parse(token);
    //         // console.log(parseToken);
    //         setUserToken(parseToken);
    
    //       } catch (e) {
    //         console.log("Failed to parse token:", e);
    //       }
    //     }
    //   }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/user/login", { email, password })
            .then(result => {

                if (result.data.message.success) {
                    Cookies.set('userToken', JSON.stringify(result.data.message.Data), { expires: 7 });
                    // console.log(result.data.message.Data);
                    if (!result.data.message.Data.flag_password_change) {
                        toast.success('Welcome user change your password');
                        setTimeout(() => {
                            // setCurrentForm(3)
                            navigate('/ChangePassword');
                            window.location.reload(true)
                        }, 1000);
                    } else {
                        toast.success('You have login successfully');

                        setTimeout(() => {

                            navigate('/');
                            window.location.reload(true);
                            toast.success("Login with new credentials to Continue")
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

            <header className="loginHeader">
                <div className="overlay">
                    <h1>Log In</h1>
                    <h3>Welcome to the community to lead world's innovations</h3>
                </div>
            </header>
            <div className='user_ContainerLogin' >
                <div className='curved-shapeLogin' id='cs1'></div>
                <div className='curved-shape2Login' id='cs2'></div>
                <div className='user_form-boxLogin Login' id="login">
                    {/* <h2>Log In</h2> */}
                    <form onSubmit={handleLogin} className='loginForm'>
                        <div className='user_input-boxLogin'>
                            <input type='text' required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />
                            <label>User email</label>
                            <FaUser className='user_iconLogin' />
                        </div>
                        <div className='user_input-boxLogin'>
                            <input type='password' required
                                value={password}
                                onChange={(e) => { setpassword(e.target.value) }}
                            />
                            <label>User Password</label>
                            <FaLock className='user_iconLogin' />
                        </div>
                        <div className='user_input-boxLogin'>
                            <button type='submit' className='user_Login-btnLogin'>Login</button>
                        </div>

                    </form>
                </div>
            </div>



            {/* <div className='loginContainer' id='loginContainer'>
                <div>
                    <form>
                        <h1>Log In</h1>
                        {/* <div className='social-icons'></div> */}
            {/* <input type='text' placeholder='email'/>
                        <input type='password' placeholder='password'/>
                        <a href='#'>Forget Your Password</a>
                        <button>Log In</button>
                    </form>
                </div>
            </div> */}
        </>
    )
}

export default Login