import './App.css';
// import './main.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/partials/Navbar/Navbar';
import HomeCommunity from './components/HomeCommunity/HomeCommunity';
import EventWorkshop from './components/EventWorkshop/EventWorkshop.js';
import DiscussionBoard from './components/DiscussionBoard.js';
import RegisterModal from './components1/RegisterModal.js';
import ReactPasswordChecklists from 'react-password-checklist';
import Footer from './components/partials/Footer/Footer.js';
// import RegisterLogin from './components/RegisterLogin//RegisterLogin.js';
import MainForm from './components/Forms/MainForm.js';
import UserProfile from './components/UserProfile/UserProfile.js';
import CommunityGuidelines from './components/CommunityGuidelines/CommunityGuidelines.js';
import ContactUs from './components/Contact Us/ContactUs.js';





function App() {
  return (
   <>
   {/* <body> */}
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' Component={HomeCommunity}/>
      <Route path='/DiscussionBoard' Component={DiscussionBoard}/>
      <Route path='/MainForm' Component={MainForm}/>
      <Route path='/eventAndWorkshop' Component={EventWorkshop}/>
      <Route path='/CommunityGuidelines' Component={CommunityGuidelines} />
      <Route path='/Contact Us' Component={ContactUs}/>
      <Route path='/UserProfile' Component={UserProfile}/>
    </Routes>
    <Footer/>
   </Router>
   {/* </body> */}
   </>
  );
}

export default App;
