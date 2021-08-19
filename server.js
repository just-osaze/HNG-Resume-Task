/**
 * 1. Create a basic GET request route
 * 2. Create an express server
 * 3. Connect to mongoDB
 * 4. Initialize express
 * 5. user submitting the form with data in a POST request
 * 6. re-displaying the form populated with escaped data and error messages if invalid
 * 7. redirecting the user or showing a success message after data is processed.
 * 8. Listen to app connection
 */

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/main.js'); 
const form = require('./model/form');
const expressvalidator = require('express-validator');
const formModel = require('./model/form');

//port
port = 5493;

//initialize express
const app = express();

//connect to mongoDB
connectDB();

//set views
app.set('views', './views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/images'));

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

 //create routes
app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/index.html', (req, res) =>{
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about.html', (req, res) =>{
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact.html', (req, res) =>{
  res.sendFile(__dirname + '/views/contact.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + './views/success.html')
});

app.get('/portfolio.html', (req, res) =>{
  res.sendFile(__dirname + '/views/portfolio.html');
});

app.get('/services.html', (req, res) =>{
  res.sendFile(__dirname + '/views/services.html');
});

app.post('/success.html', (req, res) =>{
  
  res.sendFile(__dirname + '/views/success.html');
  
  const formResponse = new formModel(req.body)
  formResponse.save((error, receivedResponse) => {
    if(error) {
      return res.status(404).json({ message: "Please fill out all details" });
    } else {
      return res.status(200);
    }
  });
});
 
 //Listen to app connection
 app.listen(port, () => {
   console.log(`Server Connected and listening on: http://127.0.0.1:5493`);
 });