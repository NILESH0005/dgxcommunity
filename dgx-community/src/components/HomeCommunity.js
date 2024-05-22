import React, { useState } from 'react';
import RegisterModal from './RegisterModal';
import axios from 'axios';
// import EmailVerification from './EmailVerification'; 
 
const HomeCommunity = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => {
    if(e.target.name==="EmailId")
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    // const base_url = "http://127.0.0.1:8000/register";
    // const data = { email };
    
    // axios.post(base_url, data, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(response => {
    //     console.log('Response:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error.response);
    //   });
  };

// import './App.css'; // Ensure this path is correct

// const HomeCommunity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpen1, setIsModalOpen1] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  // const openModal1 = () => {
  //   // console.log(100)
  //   setIsModalOpen1(true);
  // };

  // const closeModal1 = () => {
  //   setIsModalOpen1(false);
  // };

  return (
    <>
      <div>
        {/* <section className="hero">
          <div className="main_container">
            <div className="hero_text">
              <h1>Welcome to the NVIDIA DGX Community Certifications Connect!</h1>
              <br />
              <p>Hurry up join our community now!</p>
              <p>Building a stronger tomorrow!</p> */}

              {/* <EmailVerification /> */}
              
              {/* <button className="hero_btn" onClick={}>Mail</button> */}

              {/* <button className="hero_btn" onClick={openModal1}>Membership only by Invitation</button> */}
              <button className="hero_btn" onClick={openModal}>Membership only by Invitation</button>
            {/* </div>
            <div className="main_row">
              <img src="IMAGES/myArt_figma.png" className="myArt" alt="" />
            </div>
          </div>
        </section> */}
        <div className='dgx_header section_padding' id='home'>
          <div>
          <div className='dgx_header-content'>
            <h1 className='gradient_text'>Welcome to the NVIDIA DGX Community Certifications Connect!</h1>
            <p>Hurry up join our community now!</p>
              <p>Building a stronger tomorrow!</p>
          </div>
          <div className='dgx_header-content_input'>
            <input  placeholder='Your Email Address' type='email' 
              name="EmailId" 
              value={email} 
              onChange={handleChangeEmail} 
              spellCheck='false' 
              id='email-field' 
              required ></input>
            <button type='button' onClick={handleSubmit}>Get Started</button>
          </div>
          </div>

          <div className='dgx_header-img'>
            <img src='\IMAGES\header_img.png'/>
          </div>
        </div>

        <div className="counter_wrapper">
          <div className="counter">
            <img src="IMAGES/Expert Tutors.png" alt="" className="img" />
            <h1 className="count" data-target="350">50</h1>
            <p>Experts</p>
          </div>
          <div className="counter">
            <img src="IMAGES/Collaborated Universities.png" alt="" className="img" />
            <h1 className="count" data-target="250">10</h1>
            <p>Active professionals</p>
          </div>
          <div className="counter">
            <img src="IMAGES/Active students.png" alt="" className="img" />
            <h1 className="count" data-target="850">2</h1>
            <p>Active Students</p>
          </div>
          <div className="counter">
            <img src="IMAGES/certificate alotted.png" alt="" className="img" />
            <h1 className="count" data-target="8000">500</h1>
            <p>Certificate Issued</p>
          </div>
        </div>
        <section className="about" id="about">
          <h1 className="meetYourPeopleheading">Meet Your People</h1>
          <h3 className="title">Start your journey with us</h3>
          <div className="row">
            <div className="content">
              <h3>When you join the community, you open up a world of opportunities to connect and get involved.</h3>
              <ul>
                <li>Ask questions, get answers, share ideas and meet fellow community members. <a href="#">Hop in</a></li>
              </ul>
              <ul>
                <li>Our volunteer-led local chapters meet up, host events and exchange tips and tricks in over 40 countries. <a href="#">Join a chapter</a></li>
              </ul>
              <ul>
                <li>The certificate members-only workspace is where lifelong connections and learning begin and your best practices come alive. <a href="#">Become a member</a></li>
              </ul>
              <button>Learn more</button>
            </div>
            <div className="img">
              <img src="assets/images/meetYourPeople.png" alt="" />
            </div>
          </div>
        </section>
        <div class="wrapper">
          <h2>Recent Discusions</h2>
          <div class="carousel">
            <div>
              <div class="card">
                <div class="card-header">
                  <img src="" />
                </div>
                <div class="card-body">
                  <div class="card-content">
                    <div class="card-title">This is the First slider</div>
                    <div class="card-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-header">
                  <img src="" />
                </div>
                <div class="card-body">
                  <div class="card-content">
                    <div class="card-title">This is the Second slider</div>
                    <div class="card-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-header">
                  <img src="" />
                </div>
                <div class="card-body">
                  <div class="card-content">
                    <div class="card-title">This is the Third slider</div>
                    <div class="card-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-header">
                  <img src="" />
                </div>
                <div class="card-body">
                  <div class="card-content">
                    <div class="card-title">This is the Fourth slider</div>
                    <div class="card-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-header">
                  <img src="" />
                </div>
                <div class="card-body">
                  <div class="card-content">
                    <div class="card-title">This is the Fifth slider</div>
                    <div class="card-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-header">
                  <img src="" />
                </div>
                <div class="card-body">
                  <div class="card-content">
                    <div class="card-title">This is the Sixth slider</div>
                    <div class="card-text">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {isModalOpen && <RegisterModal closeModal={closeModal} />}
      {/* {isModalOpen1 && <EmailVerification closeModal1={closeModal1} />} */}
    </>
  );
};

export default HomeCommunity;
