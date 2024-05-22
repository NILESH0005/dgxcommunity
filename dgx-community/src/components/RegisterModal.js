import React, { useState } from 'react';

const RegisterModal = ({ closeModal }) => {
    const user = {
        name: 'Mr. Saurav Chandra',
        email: 'saurav.chandra@kiet.edu',
        phone: '9811416332',
        collegeName: 'KIET Group of Institutions',
        category: 'Faculty'
    }
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [collegeName, setCollegeName] = useState(user.collegeName)
    const [category, setCategory] = useState(user.category)
    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === conPassword) {
            const newUser = {
                name, email, phone, collegeName, category, password, conPassword
            }
            console.log(newUser);
            localStorage.setItem("user", JSON.stringify(newUser))
        }
        else {
            alert("Passwords do not match")
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="formBody">
                    <div className="container">
                        <div className="wrapper animated bounceInLeft">
                            <div className="company-info">
                                <h3>Global Infoventures</h3>
                                <ul>
                                    <li><i className="fa fa-map"></i>Noida Sector 63 H-65</li>
                                    <li><i className="fa fa-mobile"></i>(555)-555-5555</li>
                                    <li><i className="fa fa-envelope"></i>giindia@gmail.com</li>
                                </ul>
                            </div>
                            <div className="contact">
                                <h3>Email Us</h3>
                                <form className='g-1'>
                                    <div className="form-control">
                                        <label>Name</label>
                                        <input type="text" name="Name" id="Name" value={name} readOnly />
                                    </div>

                                    <p>
                                        <label>CollegeName</label>
                                        <input type="text" name="CollegeName" id="CollegeName" value={collegeName} readOnly />
                                    </p>
                                    <p>
                                        <label>EmailId</label>
                                        <input type="email" name="EmailId" id="EmailId" value={email} readOnly />
                                    </p>
                                    <p>
                                        <label>Phone</label>
                                        <input type="text" name="MobileNumber" id="MobileNumber" value={phone} readOnly />
                                    </p>
                                    <p>
                                        <label>Category</label>
                                        <input type="text" name="Category" id="Category" value={category} readOnly />
                                    </p>
                                    <p>
                                        <label>Password</label>
                                        <input type="password" name="Password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </p>
                                    <p>
                                        <label>Confirm Password</label>
                                        <input type="password" name="conPassword" id="conPassword" value={conPassword} onChange={(e) => { setConPassword(e.target.value) }} />
                                    </p>
                                    {/* <PasswordChecklist
                                        rules={["minLength", "specialChar", "number", "capital", "match"]}
                                        minLength={8}
                                        value={password}

                                        onChange={(isValid) => { }}
                                    /> */}
                                    <p className="full">
                                        <button onClick={handleSubmit}>Submit</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterModal;
