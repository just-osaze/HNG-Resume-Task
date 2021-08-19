/**
 * 1. Create a basic GET request route
 * 2. Create an express server
 * 3. Connect to mongoDB
 * 4. Initialize express
 * 5. user submitting the form with data in a POST request
 * 6. redirecting the user or showing a success message after data is processed.
 * 7. Listen to app connection
 */

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = process.env;
const connectDB = require('./db/main.js'); 
const formModel = require('./model/form');


dotenv.config();
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
 app.listen(() => {
   console.log(`Server Connected`);
 });