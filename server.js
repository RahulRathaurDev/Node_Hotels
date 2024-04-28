const express = require( "express" );
const app = express();
const connectToDB = require( './db' );


connectToDB();

const bodyParser = require( "body-parser" );
app.use( bodyParser.json() );

// Import person routes here


const menuRoutes = require( "./routes/menuItemRoutes" );
app.use( "/menu", menuRoutes )

const personRoutes = require( "./routes/personRoutes" );
app.use( "/person", personRoutes );

// Import menu routes







app.get( "/", ( req, res ) => {
    res.send( "Hello World" );
} );






app.listen( 3000, () => {
    console.log( "Server is listening on port 3000" );
} );
