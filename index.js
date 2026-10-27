const app = require('./app');
 //parenthesis because its an application?
const port = 3000 //When we do it on local machine define own port

//App connected to server, we set the path we want to look for in, and then we
//pass in 2 arguments. Those are the request and the response.
//Then call back function with the arrow. 
//response and send.
//Method of the response that is sent.
//This sends message called hello world

// app.get('/', (req, res) => {
//   res.send('Hello All Fruits!');
// //   console.log('Request URL', req.url);
// })
// //Method to our server, to listen for a response. 
// //With a function as a callback
// // The method back to port to understand that everything went well.
// // ('/chickens') - this is the route 
// app.get('/fruits', (req, res) => {
//     res.status(200).send(fruits)
// })

// //Wait for user to send info to url and get it and do something with it.
// app.get('/fruits/:name', (req, res) => {
//     //Every time someone adds a fruit to the end of the URL, we change all the cases to lowercase so that it's uniform.
//     const name = req.params.name.toLowerCase()
//     const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
//     //JS method find() - returns first matching item, and will store it in the fruit.
//     //It will check against the name - if its equal to the user input

//     //Error Handling
//     if (fruit == undefined){
//         res.status(404).send('The fruit does NOT exist.')
//     } else {
//         res.status(200).send(fruit)
//     }
//     //res.send({params: req.params.name })
// })
// app.get('/chickens/:id', (req, res) => {
//     res.send({params: req.params, query: req.query })
// })

// app.get('/users/:id', (req, res) => {
//   const userId = req.params.id; // Access the 'id' parameter
//   res.send(`User ID: ${userId}`);
// });

// app.get('/broken', (req,res) => {
//     throw new Error('Something went wrong')
// })

// //What if I want to show user specific status code
// app.get('/forbidden', (req,res)=>{
//     res.status(403).send('Forbidden Path')
// })
// app.get('/teapot', (req,res)=>{
//     res.sendStatus(418)
// })


// class Fruit {
//     constructor(fruit){
//         this.genus = fruit.genus;
//         this.name = fruit.name;
//         this.id = fruit.id;
//         this.family = fruit.family;
//         this.order = fruit.order;
//         this.nutritions = fruit.nutritions

//     }
// }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})