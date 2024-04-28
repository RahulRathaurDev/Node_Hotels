const express = require( "express" );
const router = express.Router();
const Person = require( "../models/person" )

router.get( "/", async ( req, res ) => {
    try {
        const data = await Person.find()
        res.status( 200 ).json( data );
    } catch ( error ) {
        console.log( error );
    }
} )


router.post( "/", async ( req, res ) => {
    try {
        const data = req.body;
        const newPerson = new Person( data );

        const response = await newPerson.save();
        console.log( "data saved" );
        res.status( 200 ).json( response );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { error: 'internal server error' } );
    }

} );


router.get( '/:worktype', async ( req, res ) => {
    try {
        const worktype = req.params.worktype;
        if ( worktype === 'chef' || worktype === 'waiter' || worktype === 'manager' ) {
            const response = await Person.find( { work: worktype } );
            console.log( "Response fetched" );
            res.status( 200 ).json( response );
        } else {
            res.status( 404 ).json( { error: 'invailid work type' } );
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { error: 'kuchhh to gadbad hai' } )
    }
} )


//  update the person detilas
router.put( "/:id", async ( req, res ) => {
    try {
        const personId = req.params.id;
        const persanUpdateData = req.body;

        const response = await Person.findByIdAndUpdate( personId, persanUpdateData, {
            new: true,
            runValidators: true
        } )
        if ( !response ) {
            console.log( "Persn is Not found" );
        }
        res.status( 200 ).json( response );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { error: 'kuchhh to gadbad hai' } )
    }
} )


router.delete( "/:id", async ( req, res ) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete( personId );
        if(!response){
            console.log("Person Not found")
        }
        console.log( "Delelte Successful" )
        res.status( 200 ).json( { message: 'Ho Gaya kaama' } )

    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json( { error: 'kuchhh to gadbad hai' } )
    }
} )





module.exports = router;