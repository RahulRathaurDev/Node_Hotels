const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDB() {
    try {
        const connectionString = process.env.DB_URL; // Corrected to use DB_URL

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
