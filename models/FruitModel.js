const fruits = require('../routes/fruits.json')

// const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
// //JS method find() - returns first matching item, and will store it in the fruit.
// //It will check against the name - if its equal to the user input

// //Error Handling
// if (fruit == undefined){
//     res.status(404).send('The fruit does NOT exist.')
// } else {
//     res.status(200).send(fruit)
// }

class Fruit {
    constructor(fruit){
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions

    }
    //Static methods are functions that belong to the 
    //class only

    // This will map the fruits .json and creating
    // a display for the user.
    static showAll(){
        return fruits.map(q => new Fruit(q))
    }

    static show(name){
        //Shows one specific fruit instead of all
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)

        if (fruit){
            return new Fruit(fruit)
        } else {
            throw "This fruit does not exist"
        }
    }

    static create(data){
        const newFruit = data;
        //the three dots (...) is called spread operator
        // Spread values in array into separate values and iterates through them
        if (!data.name){
            throw 'A fruit needs a name'
        }
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase()==data.name.toLowerCase())

        if (fruit){
            throw 'The fruit already exists'
        } else{
        newFruit['id'] = Math.max(...fruits.map(fruit => fruit.id)) + 1;
        fruits.push(newFruit)
        return new Fruit(newFruit);
        //new Fruit -> To denote a new instance of the fruit class
        }
    }

    update(data) {
        const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        if (updateFruit){
            if (data.name) updateFruit.name = data.name 
            if (data.family) updateFruit.family = data.family

            return new Fruit(updateFruit)
        } else {
            throw 'Fruit not found'
        }
    }

    //Static methods need to know of the state of the other fruits, whereas
    //Update and Delete only need to have knowledge of the particular isntances we're tampering with,

    destroy(){
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())

        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
        } else {
            throw 'Fruit not found'
        }
    }
    
}

module.exports = Fruit; 

