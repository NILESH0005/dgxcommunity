import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <>
      <h1 style={{ fontWeight: "400", color: "white", textAlign: "center" }}>User Profile</h1>

      <div class="tab">
        <div className='user-p'>
          <img src='\IMAGES\Girl-8.png' />
          <h4>XYZ</h4>
        </div>

        <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
        <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
        <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
      </div>

      <div id="London" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>

      {/* <div className='Userprofile-body row'>
        <nav className='UserProfile-side_bar column'>
          <div className='user-p'>
            <img src='\IMAGES\Girl-8.png' />
            <h4>XYZ</h4>
          </div>
          <hr />
          <div className='user-p1'>
            <h4>Logout</h4>
          </div>
          <hr />
          <div className='user-p1'>
            <h4>LogOut</h4>
          </div>
          <hr />
          <div className='user-p1'>
            <h4>Logout</h4>
          </div>
          <hr />
        </nav>
        <section className='UserProfile-section-1'>
          {/* <h1>WELCOME</h1>
          <p>Insights of you....!</p> */}
      {/* </section>
      </div>

      <div className='Userprofile-body1 column'>

      // </div> */} */


    </>
  );
};

export default UserProfile;
