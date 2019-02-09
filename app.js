/**
 * We have to first require Express so we can use it in our app.
 * The express() function creates an Express application.
 */

 // Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// We create our own server named app
// Express server handling requests and responses


// http method: get

//our first route
app.get('/', (request, response, next)=>{
    // console.log(request);
    response.sendFile(__dirname + '/views/home-page.html');
});

//cat route
app.get('/cat', (request, response, next)=>{
    response.sendFile(__dirname + '/views/cat-page.html');
})

// Server started
app.listen(3000, ()=>{
    console.log('My first app listening on port 3000 ')
});



// // Require Express
// const express = require('express');

// // Express server handling requests and responses
// const app = express();

// // Make everything inside of public/ available
// app.use(express.static('public'));

// // our first Route:
// app.get('/', (request, response, next) => {
//   response.sendFile(__dirname + '/views/home-page.html');
// });

// // cat route:
// app.get('/cat', (request, response, next) => {
//   response.sendFile(__dirname + '/views/cat-page.html');
// });

// // Server Started
// app.listen(3000, () => {
//   console.log('My first app listening on port 3000!');
// });