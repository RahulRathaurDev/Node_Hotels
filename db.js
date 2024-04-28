// db.js

const mongoose = require( 'mongoose' );

// Function to connect to MongoDB database
async function connectToDB() {
    try {
        await mongoose.connect( 'mongodb://127.0.0.1:27017/Hotel', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } );
        console.log( 'Connected to MongoDB' );
    } catch ( error ) {
        console.error( 'Error connecting to MongoDB:', error );
    }
}

// Export the connectToDB function
module.exports = connectToDB;
