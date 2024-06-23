import { connectToDatabase, closeConnection } from '../db.js';

// async function creditFunction(email) {
//   try {
//     connectToDatabase(async (err, conn) => {
//       if (err) {
//         res.status(500).send('Failed to connect to database');
//         return;
//       }
//       const query = 'SELECT * FROM Users';

//       conn.query(query, (queryErr, rows) => {
//         if (queryErr) {
//           res.status(500).send('Query error');
//           closeConnection();
//           return;
//         }

//         closeConnection();
//         return rows
//       });
//     })

//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }



export const addUser = async (req, res) => {
  try {
    connectToDatabase(async (err, conn) => {
      if (err) {
        res.status(500).send('Failed to connect to database');
        return;
      }
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const contactNumber = req.body.phone;
      const designation = req.body.designation;



      // const TempCategory= await creditFunction(email)
      // const category = TempCategory===false? "Member" : TempCategory
      // const referCredit= category==="Faculty"? 10 : category==="Student" ? 2 : 0;
      // const query = `"INSERT INTO CommunitUser (Name, EmailId, MobileNumber, Designation, password, category, referCredit) VALUES (?, ?, ?, ?, ?, ?, ?)";`;
      const query = `"INSERT INTO Users (Name, EmailId, MobileNumber, Designation, password, referCredit) VALUES (?, ?, ?, ?, ?, ?)";`;
      // const emailExistsResult = await emailExixts(email);
      // if (emailExistsResult) {
      //   res.status(400).json({ message: 'Email already exist' });
      //   return;
      // }
      conn.query(query, (queryErr, rows) => {
        if (queryErr) {
          res.status(500).send('Query error');
          closeConnection();
          return;
        }

        // res.json(rows);
        res.json("hello");
        closeConnection();
      });
    })

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}




export const verifyemail = async (req, res) => {
  try {
    connectToDatabase(async (err, conn) => {
      if (err) {
        res.status(500).send('Failed to connect to database');
        return;
      }
      const userEmail = req.body.email
      //  const emailExistsResult = await emailExixts(userEmail);
      //  console.log(emailExistsResult  )
      const query = `SELECT * FROM Users where EmailId='${userEmail}'`;

      // if (emailExistsResult) {
      //   res.json({ message: { success: true, data: userEmail } });
      // } else {
      //   res.json({ message: { success: false, data: userEmail } });
      // }

      conn.query(query, (queryErr, rows) => {
        if (queryErr) {
          res.status(500).send('Query error');
          closeConnection();
          return;
        }

        if (rows.length > 0 ) {
          if( rows.flag_password_change ==0){
          res.json({ message: { "success": true, "Data": rows[0] } })
          closeConnection();}
          else{
            res.json({ message: { "success": true, "Data": rows[0] } })
            closeConnection();
          }
        } else {
          res.json({ message: { "success": false, "Data": userEmail } })
          closeConnection();
        }



      });
    })

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const Login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    connectToDatabase(async (err, conn) => {
      if (err) {
        return res.status(500).send('Failed to connect to database');
      }

      const query = "SELECT * FROM Users WHERE EmailId = ?";

      // Execute the query with parameters
      conn.query(query, [email], (queryErr, result) => {
        if (queryErr) {
          console.log(queryErr);
          res.status(500).send('Query error');
          closeConnection();
          return;
        }

        // If user with provided email exists
        if (result.length > 0) {
          const user = result[0];
          // Compare passwords
          if (user.password === password) {
            console.log("Access granted");
            const data = Object.entries(result[0]).reduce((acc, [key, value]) => {
              // Example condition: include only elements with values greater than 2
              // console.log(value)
              if (key != "password") {
                acc[key] = value;
              }
              return acc;
            }, {});


            res.json({ message: { "success": true, "Data": data, "old":true } })
          } else {
            console.log("Access denied");
            res.status(200).json({ message: { "success": false, "Data": "Invalid Credentials" } })
          }
        } else {
          console.log("User not found");
          res.status(200).send('Invalid user');
        }
        closeConnection();
      });
    });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}

export const updatePassword = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    connectToDatabase(async (err, conn) => {
      if (err) {
        return res.status(500).send('Failed to connect to database');
      }

      const query = "Update Users Set password = ? , flag_password_change = '1' WHERE EmailId = ?";

      // Execute the query with parameters
      conn.query(query, [password,email], (queryErr, result) => {
        if (queryErr) {
          console.log(queryErr);
          res.status(500).send('Query error');
          closeConnection();
          return;
        }
        
      
        res.json({ message: { "success": true, "Data": "Your password is changed successfully" } })
        closeConnection(); 
      });
    });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


