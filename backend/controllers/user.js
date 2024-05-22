import { connectToDatabase, closeConnection } from '../db.js';



 

export const addUser = async (req, res) => {
    try {
        connectToDatabase((err, conn) => {
            if (err) {
              res.status(500).send('Failed to connect to database');
              return;
            }
        
            const query = 'SELECT * FROM Users';
        
            conn.query(query, (queryErr, rows) => {
              if (queryErr) {
                res.status(500).send('Query error');
                closeConnection();
                return;
              }
        
              res.json(rows);
              closeConnection();
            });
          })
        
    }catch (error) {
      res.status(404).json({ message: error.message });
 }
}

export const verifyemail = async (req, res) => {
    try {
        connectToDatabase((err, conn) => {
            if (err) {
              res.status(500).send('Failed to connect to database');
              return;
            }
            const userEmail = req.body.email
            const query = `SELECT * FROM Users where EmailId='${userEmail}'`;
        
            conn.query(query, (queryErr, rows) => {
              if (queryErr) {
                res.status(500).send('Query error');
                closeConnection();
                return;
              }
            
              if(rows.length>0){
                res.json({message:{"success":true,"Data":rows}})
                closeConnection();
              }else{
                res.json({message:{"success":false,"Data":userEmail}})
              }
           
            
              
            });
          })
        
    }catch (error) {
      res.status(404).json({ message: error.message });
 }
}