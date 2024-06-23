// import React, { useState } from 'react';
// import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
// import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import './Profile.css';

// const Profile = () => {
//   const [activeSection, setActiveSection] = useState('posts');

//   const renderContent = () => {
//     if (activeSection === 'posts') {
//       return <Posts />;
//     } else if (activeSection === 'stats') {
//       return <Stats />;
//     } else if (activeSection === 'logout') {
//       return <Logout />;
//     }
//     return null;
//   };

//   return (
//     <Router>
//       <div className="profile-container">
//         <div className="profile">
//           <img src="./IMAGES/profilePic.jpg" alt="Profile" />
//           <h2>Hello.</h2>
//           <p className="intro">I am a professional front-end developer, “Music is life itself”.</p>
//           <div>
//             <button className='editProfile' onClick={() => alert('Edit Profile clicked!')}>Edit Profile</button>
//           </div>
//         </div>

//         <div className="sidebarContainer">
//           <div className='sidebar'>
//             <a href="#" className={activeSection === 'posts' ? 'active' : ''} onClick={() => setActiveSection('posts')}>
//               <AllInboxOutlinedIcon />
//               <h3>My Posts</h3>
//             </a>
//             <a href="#" className={activeSection === 'stats' ? 'active' : ''} onClick={() => setActiveSection('stats')}>
//               <QueryStatsOutlinedIcon />
//               <h3>My Stats</h3>
//             </a>
//             <a href="#" className={activeSection === 'logout' ? 'active' : ''} onClick={() => setActiveSection('logout')}>
//               <LogoutOutlinedIcon />
//               <h3>Logout</h3>
//             </a>
//           </div>

//           <div className='content'>
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// const Posts = () => (
//   <div>
//     <h2>My Posts</h2>
//     <p>Here you will see all your posts.</p>
//   </div>
// );

// const Stats = () => (
//   <div>
//     <h2>My Stats</h2>
//     <p>Here you will see your statistics.</p>
//   </div>
// );

// const Logout = () => (
//   <div>
//     <h2>Logout</h2>
//     <p>You have been logged out.</p>
//   </div>
// );

// export default Profile;


import React, { useState } from 'react';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './Profile.css';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('posts');

  const renderContent = () => {
    if (activeSection === 'posts') {
      return <Posts />;
    } else if (activeSection === 'stats') {
      return <Stats />;
    } else if (activeSection === 'logout') {
      return <Logout />;
    }
    return null;
  };

  return (
    <div className="profile-mainContainer">
      <div className="profile-container">
        <div className="profile">
          <div className='overlay1'>
            <div className='peron_bio'>
              <img src="./IMAGES/profilePic.jpg" alt="Profile" />
              <h2>Hello.</h2>
              <p className="intro">I am a professional front-end developer, “Music is life itself”.</p>
              <div>
                <button className='editProfile' onClick={() => alert('Edit Profile clicked!')}>Edit Profile</button>
              </div>
              <ul>
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Age:</strong> 30</li>
              <li><strong>Location:</strong> New York, USA</li>
              <li><strong>Occupation:</strong> Front-end Developer</li>
            </ul>
            </div>
            
          </div>
        </div>


        <div className="sidebarContainer">
          <div className='sidebar'>
            <a href="#" className={activeSection === 'posts' ? 'active' : ''} onClick={() => setActiveSection('posts')}>
              <AllInboxOutlinedIcon />
              <h3>My Posts</h3>
            </a>
            <a href="#" className={activeSection === 'stats' ? 'active' : ''} onClick={() => setActiveSection('stats')}>
              <QueryStatsOutlinedIcon />
              <h3>My Stats</h3>
            </a>
            <a href="#" className={activeSection === 'logout' ? 'active' : ''} onClick={() => setActiveSection('logout')}>
              <LogoutOutlinedIcon />
              <h3>Logout</h3>
            </a>
          </div>

          <div className='content'>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const Posts = () => (
  <div className='post_bar'>
    <div className='post'>
      <div className='post_img'>
        <img src='/IMAGES/user.png' />
      </div>
      <div className='post_description'>
        <div className='postCount'>First Post</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br></br>
        <a>Like</a> <a>comments</a> <span>dd mm yyyyy</span>
      </div>
    </div>

    <div className='post'>
      <div className='post_img'>
        <img src='/IMAGES/user.png' />
      </div>
      <div className='post_description'>
        <div className='postCount'>First Post</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br></br>
        <a>Like</a> <a>comments</a> <span>dd mm yyyyy</span>
      </div>
    </div>
  </div>
);

const Stats = () => (

  <div className='statsCard'>
    <div className='card-single'>
      <div className='card-flex'>
        <div className='card-info'>
          <div className='card-head'>
            <span>Reaches</span>
            <small>Number of reaches</small>
          </div>
          <h2>14,677+</h2>
          <div className='card-chart'>
            <span className='las la-chart-line'></span>

          </div>
        </div>
      </div>

    </div>

    <div className='card-single'>
      <div className='card-flex'>
        <div className='card-info'>
          <div className='card-head'>
            <span>Likes</span>
            <small>Number of likes</small>
          </div>
          <h2>400</h2>
          <div className='card-chart'>
            <span className='las la-chart-line'></span>

          </div>
        </div>
      </div>
    </div>

    <div className='card-single'>
      <div className='card-flex'>
        <div className='card-info'>
          <div className='card-head'>
            <span>Comments</span>
            <small>Number of comments</small>
          </div>
          <h2>300</h2>
          <div className='card-chart'>
            <span className='las la-chart-line'></span>

          </div>
        </div>
      </div>
    </div>

    <div className='job-grid'>
      <div className='analytics-card'>

      </div>

      <div className='jobs'>
        <table>
          <tbody>
            <tr>
              <td>
                <span className='indicator'></span>
              </td>
              <td></td>
              <td></td>
              <td></td>

            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
);

const Logout = () => (
  <div>
    <h2>Logout</h2>
    <p>You have been logged out.</p>
  </div>
);

export default Profile;
