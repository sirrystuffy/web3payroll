const express = require("express");
var app = express();
var cors = require("cors")
const port = 5000; 
app.use(cors()); //Install cors()
require('dotenv').config();
var db = require('web3.storage') //requrie(package).property

function getAccessToken () {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'
  
    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    //return process.env.WEB3STORAGE_TOKEN
    return process.env.APIKEY
}

// Create a client instance to begin uploading/retrieving files
const client = new db.Web3Storage({token: getAccessToken()});

app.get("/", (req, res) => res.send("Hello World"));

// When someone sends a GET request to the specified route, we send a response 
app.get("/backend", async (req, res) => {
    res.send("Backend is working")
});

console.log(process.env.APIKEY); //environmnet var set through local machine. 'export APIKEY=SOMETHING'
app.listen(port, () => console.log(`Example app listening on port ${port}`));
