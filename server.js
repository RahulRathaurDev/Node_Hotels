const express = require( "express" );
const app = express();
const connectToDB = require( './db' );
require( "dotenv" ).config();

connectToDB();

const bodyParser = require( "body-parser" );
app.use( bodyParser.json() );

// Import person routes here


const menuRoutes = require( "./routes/menuItemRoutes" );
app.use( "/menu", menuRoutes )

const personRoutes = require( "./routes/personRoutes" );
app.use( "/person", personRoutes );

// Import menu routes




const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log( "Server is listening on port 3000" );
} );
