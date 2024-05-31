// import React from 'react'
import React, { useState } from 'react';
import ChangePassword from './ChangePassword/ChangePassword';
import { useLocation } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

const MainForm = () => {

    const location = useLocation();
    const initialForm = location.state?.form || 1; // Retrieve form number from state or default to 1
    const [currentForm, setCurrentForm] = useState(initialForm);

    const renderForm = () => {
        switch (currentForm) {
          case 1:
            return <Login setCurrentForm={setCurrentForm}/>;
          case 2:
            return <Register/>;
          case 3:
            return <ChangePassword />;
          default:
            return null;
        }
      };
  return (
    <>
     {renderForm()}
    </>
  )
}

export default MainForm