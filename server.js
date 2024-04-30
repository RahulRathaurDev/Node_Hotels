const express = require( "express" );
const bodyParser = require( "body-parser" );
const { passport, localAuthMiddleWare } = require( "./auth" );
const connectToDB = require( "./db" );
const menuRoutes = require( "./routes/menuItemRoutes" );
const personRoutes = require( "./routes/personRoutes" );

// Initialize Express app
const app = express();

// Connect to MongoDB
connectToDB();

// Middleware
app.use( bodyParser.json() );
app.use( passport.initialize() );

// Routes
// No authentication needed for the root route ("/")
app.get( "/", ( req, res ) => {
    res.send( "Welcome to Our Hotel" );
} );

// Authentication required for accessing menu routes
app.use( "/menu", menuRoutes );

// Authentication required for accessing person routes
app.use( "/person", personRoutes );

// Start the server
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    console.log( `Server is listening on port ${ PORT }` );
} );
