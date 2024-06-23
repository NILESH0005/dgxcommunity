import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import userRoutes from './routes/user.js'
// import { connectToDatabase, closeConnection } from './db.js';



// Middleware to parse JSON bodies
const port = 8000
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())





app.use('/user', userRoutes);
// app.use('/addUser',userRoutes);




// app.post('/addUser', async (req, res) => {
//   try {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const contactNumber = Number(req.body.phone);
//     const designation = req.body.designation;
//     console.log(req.body)
//     connectToDatabase(async (err, conn) => {
//       if (err) {
//         return res.status(500).send('Failed to connect to database');
//       }
    
//       // Prepare the SQL query with parameters
//       const query = "INSERT INTO CommunityUser1 (Name, EmailId, MobileNumber, Designation, password) VALUES ( ?, ?, ?, ?, ?)";
    
//       // Execute the query with parameters
//       conn.query(query, [name, email, contactNumber, designation, password], (queryErr, result) => {
//         if (queryErr) {
//           console.log(queryErr)
//           res.status(500).send('Query error');
//           closeConnection();
//           console.log("hello " + name); // This line can be removed for production as it leaks user data in the logs
//           return;
//         }
    
//         // Respond with success message or relevant data
//         res.status(200).json({ message: 'User added successfully', result });
//         closeConnection();
//       });
//     });

//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });


// app.post('/addUser', async (req, res) => {
//   try {
//     connectToDatabase(async (err, conn) => {
//       if (err) {
//         res.status(500).send('Failed to connect to database');
//         return;
//       }
//       const name = req.body.name;
//       const email = req.body.email;
//       const password = req.body.password;
//       const contactNumber = req.body.phone;
//       const designation = req.body.designation;
//       // const TempCategory= await creditFunction(email)
//       // const category = TempCategory===false? "Member" : TempCategory
//       // const referCredit= category==="Faculty"? 10 : category==="Student" ? 2 : 0;
//       // const query = `"INSERT INTO CommunitUser (Name, EmailId, MobileNumber, Designation, password, category, referCredit) VALUES (?, ?, ?, ?, ?, ?, ?)";`;
//       const query = `"INSERT INTO CommunityUser (Name, EmailId, MobileNumber, Designation, password, referCredit) VALUES (?, ?, ?, ?, ?, ?)";`;
//       conn.query(query, (queryErr, rows) => {
//         if (queryErr) {
//           res.status(500).send('Query error');
//           closeConnection();
//           return;
//         }

//         // res.json(rows);
//         res.json("hello");
//         closeConnection();
//       });
//     })

//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost: ${port}`)
})