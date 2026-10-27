const express = require('express');
const app = express();
const fruits = require('./routes/fruitsRoutes')
//Say all my endpoints start with fruits and use fruits as a middle
//wear
app.use(express.json()) //We need this middleware that is coming from json
//This ensure every json that comes in will be parsed before being consudered in the json request. 
app.use('/fruits', fruits)

app.get('/', (req, res) => {
  res.send('Hello All Fruits!');
//   console.log('Request URL', req.url);
})



module.exports = app;

