// import React, { useState } from 'react';
// import axios from 'axios';

// const EmailVerification = ({ closeModal1 }) => {
//   const [email, setEmail] = useState('');

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email)
//     const base_url = "http://127.0.0.1:8000/register";
//     const data = { email };
    
//     axios.post(base_url, data, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         console.log('Response:', response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error.response);
//       });
//   };

//   return (
//     <>
//       <div className=''>
//       {/* <div className='heroEmailVerification'> */}
//         <div className='input-email'>
//           <form className='emailVerifyForm' onSubmit={handleSubmit}>
//             <label id='email-fieldLabel'>
//               Email
//             </label>
//             <input 
//               type='email' 
//               name="EmailId" 
//               value={email} 
//               onChange={handleChangeEmail} 
//               spellCheck='false' 
//               id='email-field' 
//               required 
//             />
//             <button type='submit'>Submit</button>
//             {/* <span id='email-error'>Error message</span> */}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmailVerification;
