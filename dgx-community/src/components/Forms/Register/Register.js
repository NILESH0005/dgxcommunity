import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Register.css'



import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Register = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [designation, setDesignation] = useState("");
    const navigate = useNavigate();

    const [password, setpassword] = useState("")
    const [messages, setMessages] = useState({
        number: false,
        specialChar: false,
        uppercase: false,
        lowercase: false,
        length: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password)
        axios.post("http://127.0.0.1:8000/addUser", {name,email,phone,designation,password})
        .then(result => {
            setName("")
            setEmail("")
            setPhone("")
            setDesignation("")
            setpassword("")
            
            // switchLogin();
        })
        .catch(err => console.log(err))
    }

        // const handleLogin = (e) => {
        //     e.preventDefault();
        //     axios.post("http://127.0.0.1:8000/userlogin", { email, password })
        //     .then(result => {
        //         toast.success('User has been logged in');
        //         setTimeout(() => {
        //           navigate('/');
        //         }, 2000); // 2 seconds delay
        //     })
        //     .catch(error => {
        //         if (error.response.status === 401) {
        //         toast.error('email or password is wrong');
        //         } else {
        //         console.log('An error occurred:', error.message);
        //         }
        //     });
        // }
      



    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    }



    // const switchRegister = () => {
    //     // document.getElementById("login").style.display = "none"
    //     if(document.getElementById("register")){
    //         document.getElementById("register").style.display = "block"}
    //     // document.getElementById("cs1").classList.remove('activeform')
    //     // document.getElementById("cs2").classList.add('activeform')
    // }
    // switchRegister()
    // const switchLogin = () => {
    //     document.getElementById("register").style.display = "none"
    //     document.getElementById("login").style.display = "block"
    //     document.getElementById("cs2").classList.remove('activeform')
    //     document.getElementById("cs1").classList.add('activeform')
    // }


    const handleChange = (e) => {
        if (e.target.name === 'password') {
            const inputValue = e.target.value;
            setpassword(e.target.value)

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
        // else if (e.target.name === 'cpassword') {
        //     setcpassword(e.target.value)
        // }
    }


    return (
        <>
        <ToastContainer />
            <div className='user_Container'>
                <div className='curved-shape' id='cs1'></div>
                <div className='curved-shape2' id='cs2'></div>
                {/* <div className='user_form-box Login' id="login">
                    <h2>Log In</h2>
                    <form onSubmit={handleLogin}>
                        <div className='user_input-box'>
                            <input type='text' required 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}/>
                            <label>User email</label>
                            <FaUser className='user_icon' />
                        </div>
                        <div className='user_input-box'>
                            <input type='password' required
                            value={password}
                            onChange={(e) => {setpassword(e.target.value)}}
                            />
                            <label>User Password</label>
                            <FaLock className='user_icon' />
                        </div>
                        <div className='user_input-box'>
                            <button type='submit' className='user_Login-btn'>Login</button>
                        </div>
                        <div className='user_regi-link'>
                            <p>Don't have an account ?<a href='#' className='user_Signup-link' onClick={switchRegister}>Sign Up</a></p>
                        </div>
                    </form>
                </div> */}
                <div className='user_form-box Register' id="register">
                    <h2>Register Yourself</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='user_input-box'>
                            <input type='text' required 
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            />
                            <label>Name</label>
                            <FaUser className='user_icon' />
                        </div>
                        <div className='user_input-box'>
                            <input type='text' required 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            />
                            <label>User email</label>
                            <FaUser className='user_icon' />
                        </div>
                        <div className='user_input-box ph_user'>
                            {/* <div className=''> */}

                                <input type='text' required 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
                                <label>Phone Number</label>
                                <FaUser className='user_icon' />
                            {/* </div> */}
                        </div>
                        <div className='user_input-box desig_user'>

                            <input type='text' required 
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            />
                            <label>Designation</label>
                            <FaUser className='user_icon' />
                        </div>
                        <div className='user_input-box'>
                            <input type='password' required name="password" value={password} onChange={handleChange}/>
                            <label>User Password</label>
                            <FaLock className='user_icon' />
                        </div>

                        <div className='compare' id='mymsg'>
                                    {messages.number && (
                                        <p >Password should contain at least one number.</p>
                                    )}
                                    {messages.specialChar && (
                                        <p >Password should contain at least one special character.</p>
                                    )}
                                    {messages.uppercase && (
                                        <p >Password should contain at least one uppercase letter.</p>
                                    )}
                                    {messages.lowercase && (
                                        <p >Password should contain at least one lowercase letter.</p>
                                    )}
                                    {messages.length && (
                                        <p >Password should contain at least eight character.</p>
                                    )}

                                </div>


                        <div className='user_input-box'>
                            <input type='password' required name="cpassword" />
                            <label>Confirm Password</label>
                            <FaLock className='user_icon' />
                        </div>

                        <div className='user_input-box'>
                            <button type='submit' className='user_Login-btn'>Register</button>
                        </div>
                        {/* <div className='user_regi-link'>
                            <p>Don't have an account ?<a href='#' className='user_SignIn-link' onClick={switchLogin} >Sign Upp</a></p>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register