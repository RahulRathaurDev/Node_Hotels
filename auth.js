const passport = require( "passport" );
const LocalStrategy = require( "passport-local" ).Strategy;
const Person = require( "./models/person" );

// Configure Passport Local Strategy
passport.use( new LocalStrategy( async ( username, password, done ) => {
    try {
        // console.log("Received Credentials", username, password);
        const user = await Person.findOne( { username } );
        if ( !user ) {
            return done( null, false, { message: "Incorrect username" } );
        }

        // after the brcrpt
        // const isPasswordMatch = user.password === password;

        const isPasswordMatch = await user.comparePassword( password );
        if ( isPasswordMatch ) {
            return done( null, user );
        } else {
            return done( null, false, { message: "Incorrect password" } );
        }
    } catch ( err ) {
        return done( err );
    }
} ) );

// Middleware for local authentication
const localAuthMiddleWare = passport.authenticate( "local", { session: false } );

module.exports = { passport, localAuthMiddleWare };
