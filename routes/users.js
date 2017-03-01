const express = require( 'express' )

const router = express.Router( )

fs.readFile( __dirname + '/users.json', ( err, data ) => {
    if (err) throw err
    console.log( data )
} )

module.exports = router