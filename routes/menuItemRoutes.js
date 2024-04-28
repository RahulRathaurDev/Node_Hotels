const express = require( "express" );
const router = express.Router();
const MenuItem = require( "../models/menu" )


router.post( "/", async ( req, res ) => {
    try {
        const data = req.body;
        const newMenu = await new MenuItem( data );
        const response = newMenu.save();
        console.log( "menu data is saved successsfully" );
        res.status( 200 ).json( response );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { error: 'kuchhh to gadbad hai' } )
    }
} )

// get request for menu

router.get( "/", async ( req, res ) => {
    try {
        const data = await MenuItem.find();
        res.status( 200 ).json( data );

    } catch ( error ) {
        console.log( error )
    }
} )

router.get( "/:tasttype", async ( req, res ) => {
    try {
        const tasttype = req.params.tasttype;
        if ( tasttype === 'sour' || tasttype === 'sweet' || tasttype === 'spice' ) {
            const response = await MenuItem.find( { taste: tasttype } );
            console.log( "Menu data feched successfully" );
            res.status( 200 ).json( response );
        } else {
            console.log( "invalid tast type" );
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { error: 'kuchhh to gadbad hai' } )
    }
} )


// only for cheaking purpose


module.exports = router;