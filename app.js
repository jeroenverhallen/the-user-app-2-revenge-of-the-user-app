const express = require( 'express' )
const app = express( )
const bodyparser = require( 'body-parser' )
const fs = require( 'fs' )

fs.readFile( __dirname + '/users.json', ( err, data ) => {
    if (err) throw err
    console.log( data )
} )

app.listen( 3000, f => {
    console.log( 'check it out on localhost 3000' )
})