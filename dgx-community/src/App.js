import './App.css';
// import './main.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/partials/Navbar';
import HomeCommunity from './components/HomeCommunity';
import EventWorkshop from './components/EventWorkshop';
import DiscussionBoard from './components/DiscussionBoard.js';
import CommunityGuidelines from './components/CommunityGuidelines.js';
import RegisterModal from './components/RegisterModal.js';
import ReactPasswordChecklists from 'react-password-checklist';
import Footer from './components/partials/Footer.js';




function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' Component={HomeCommunity}/>
      <Route path='/discussion' Component={DiscussionBoard}/>
      <Route path='/eventAndWorkshop' Component={EventWorkshop}/>
      <Route path='/communityGuidelines' Component={CommunityGuidelines}/>
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
