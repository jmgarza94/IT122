'use strict'

const Car = require("./models/carsdb");

//find all documents
Car.find({}, (err, result) => {
    //output error if one occurred
    if (err) {
        console.log(err);
    } else {
        //otherwise output the array of documents
        console.log(result);
    }
    return
});
