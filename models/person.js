const mongoose = require( "mongoose" );
const bcrypt = require( "bcrypt" );


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
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
} );


personShema.pre( 'save', async function ( next ) {
    const person = this;
    if ( !person.isModified( 'password' ) ) return next();
    try {
        const salt = await bcrypt.genSalt( 10 );
        const hashPassword = await bcrypt.hash( person.password, salt );
        person.password = hashPassword;
        next();
    } catch ( err ) {
        next( err ); // Pass the error to the next middleware
    }
} );


personShema.method.comparePassword = async function ( candidatePassword ) {
    try {
        const isMatch = await bcrypt.compare( candidatePassword, this.password );
        return isMatch;
    } catch ( error ) {
        throw error;
    }
}


const Person = mongoose.model( 'Person', personShema );

module.exports = Person;

