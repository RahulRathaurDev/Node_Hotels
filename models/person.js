const mongoose = require( "mongoose" );

const personShema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: [ 'chef', 'waiter', 'manager' ],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }


} );


const Person = mongoose.model( 'Person', personShema );

module.exports = Person;

