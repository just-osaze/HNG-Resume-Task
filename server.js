/**
 * 1. Create a basic GET request route
 * 2. Create an express server
 * 3. Connect to mongoDB
 * 4. Initialize express
 * 2. user submitting the form with data in a POST request
 * 3. validation on both the client and the server
 * 4. re-displaying the form populated with escaped data and error messages if invalid
 * 5. doing something with the sanitized data on the server if it’s all valid
 * 6. redirecting the user or showing a success message after data is processed.
 * 9. Listen to app connection
 */

 const express = require('express');
 const connectDB = require('./db/main.js');
 port = 5493;

 //initialize express
 const app = express();
 
 //middlewares
//  app.set('view engine','ejs');
//  app.use(bodyParser.urlencoded({ extended:true }));

 //connect to mongoDB
 connectDB();
 
 //create a basic get request route
 app.get('/', (req, res) => {
   res.json({message: "Welcome Recruiter"});
 })
 
 
 //Listen to app connection
 app.listen(port, () => {
   console.log(`Server Connected and listening on: http://127.0.0.1:5493`);
 })