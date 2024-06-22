// import sql from 'msnodesqlv8';

// const connectionString = 'Driver={ODBC Driver 17 for SQL Server};Server=LAPTOP-OSVIB75B\\SQLEXPRESS;Database=DGX_COMMUNITY;Trusted_Connection=yes;';


// sql.open(connectionString, (err, conn) => {
//   if (err) {
//     console.error('Error occurred:', err);
//     return;
//   }
// const email="saurav.chandra@kiet.edu"
// //   const query = 'SELECT Distinct(EmailId) FROM Users'; // Replace with your table name
//   const query = `SELECT * FROM Users WHERE EmailId='${email}'`; // Replace with your table name
// //   const query = 'SELECT * FROM Users WHERE EmailId="abha.rajpoot@kiet.edu"'; // Replace with your table name

//   conn.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing query:', err);
//     } else {
//       console.log(results);
//     }

//     conn.close();
//   });
// });

// db.js
import sql from 'msnodesqlv8';

const connectionString = 'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-UC5U2HE\\SQLEXPRESS;Database=DGX_COMMUNITY;Trusted_Connection=yes;';

let connection;

const connectToDatabase = (callback) => {
  if (connection) {
    console.log('Connection already established.');
    return callback(null, connection);
  }

  sql.open(connectionString, (err, conn) => {
    if (err) {
      console.error('Error occurred:', err);
      return callback(err);
    }
    connection = conn;
    console.log('Database connected successfully.');
    callback(null, connection);
  });
};

const closeConnection = () => {
  if (connection) {
    connection.close((err) => {
      if (err) {
        console.error('Error closing the connection:', err);
      } else {
        console.log('Database connection closed.');
        connection = null;  // Reset connection
      }
    });
  }
};

process.on('SIGINT', closeConnection);
process.on('SIGTERM', closeConnection);

export { connectToDatabase, closeConnection };
