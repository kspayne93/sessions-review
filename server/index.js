const express = require('express');
const session = require('express-session'); //this is how we initialize a session. session is middleware
const controller = require('./controller');
const app = express();


// MIDDLEWARE (WILL BE HIT BEFORE THE ENDPOINTS)
app.use(express.json());

app.use(session({
   secret: 'fadfalkjdfhalkjdf',
   resave: false,
   saveUninitialized: false
}))


// ENDPOINTS
app.post(`/api/cart`, controller.addProduct);
app.get(`/api/cart`, controller.getCart);


const port = 4500;
app.listen(port, () => console.log(`listening on port ${port}`))