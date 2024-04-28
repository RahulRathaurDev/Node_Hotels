const mongoose = require('mongoose');

// Function to connect to MongoDB database
async function connectToDB() {
    try {
        
        const connectionString = `mongodb+srv://rahulkumar:rahulbabu@cluster0.jcsdjb6.mongodb.net/Hotel_Node`;

        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDB;
