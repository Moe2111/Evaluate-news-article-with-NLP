const dotenv = require('dotenv');
dotenv.config({path: "creden.env"});
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
var aylien = require("aylien_textapi");

const cors = require('cors')

const app = express()

app.use(express.static('dist'))
console.log(__dirname)

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('C:/Users/hamoo/Desktop/evaluate-news-nlp/dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8083!')
})


console.log("your ID is", process.env.app_id);
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.app_id,
    application_key: process.env.app_key
});


app.post('/check', async (req, res)=>{
    const url = req.body.text
    console.log(url);
    try{
        textapi.sentiment({url}, function(error, response){  
            if (error){
                console.log(error);
            }      
            console.log(response);
            res.send(response);
        })
    } catch(error){
        console.log("error", error);
    }
})



module.exports =  app;