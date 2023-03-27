var express = require('express');
var server = express();

var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://assefanatenel:Nati@42@hana@elearning.5jrojd9.mongodb.net/test/elearning",{useNewUrlParser: true, useUnifiedTopology:true}, function checkDB(error){
    if(error)
    {
        console.log("error")
    }
    else{
        console.log("Db is connectedd")
    }
});




//server.use(express.json());

server.listen(8000,function check(error){
    if(error){
        console.log("error")
    }
    else
    {
        console.log("started")
    }
} );

