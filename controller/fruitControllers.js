//deals with everything related to req res
const Fruit = require('../models/FruitModel');

const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll()
        //showAll is a function inside our model that exposes our fruits to us. 
        res.status(200).send(fruits)
    } catch(err){
        res.status(500).send({error: 'Server error'})
    }
    
}


const show = async (req, res) => {
    //Every time someone adds a fruit to the end of the URL, we change all the cases to lowercase so that it's uniform.
    const name = req.params.name.toLowerCase()
    // const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
    // //JS method find() - returns first matching item, and will store it in the fruit.
    // //It will check against the name - if its equal to the user input

    // //Error Handling
    // if (fruit == undefined){
    //     res.status(404).send('The fruit does NOT exist.')
    // } else {
    //     res.status(200).send(fruit)
    // }
    //res.send({params: req.params.name })
    try {
        const fruit = await Fruit.show(name)
        //Show is a function we made inside controller
        res.status(200).send(fruit)
    } catch(err){
        res.status(404).send({error:err})
    }
}


const create = async (req, res) => {
    console.log(req.body)
    try {
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    } catch(err){
        res.status(409).send({error:err})
    }


}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)

        res.status(200).send(result)
    } catch(err) {
        res.status(404).send({error: err})
    }
}


const destroy = async (req,res) => {
    const name = req.params.name.toLowerCase()


    try {
        const fruit = await Fruit.show(name)
        await fruit.destroy()

        res.sendStatus(204)
    } catch(err){
        res.status(404).send({error:err})
    }
}
module.exports = {index, show, create, update, destroy}