const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var cors = require("cors")
const port = 5000; 

app.use(cors()); //Install cors()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('dotenv').config();

var db = require('web3.storage'); //requrie(package).property

let empjson = require('/Users/powerpony/Downloads/CSI499/backend/files/employee.json');

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

app.get("/", async (req, res) => res.send("Hello World"));

// When someone sends a GET request to the specified route, we send a response 
app.get("/backend", async (req, res) => {
    res.send("Backend is working")
});

app.get("/employees", async (req, res) => {
    // const empFile = client.status("bafybeie74n6xxjeymhvqgybros4f5goz2mtevnbk4vahpokxx5hdm4xtzq");
    const empFile = await client.get("bafybeie74n6xxjeymhvqgybros4f5goz2mtevnbk4vahpokxx5hdm4xtzq");
    // console.log((await empFile).json())
    // res.send((await empFile));
    res.json(empjson);
    
    // res.json((await ( empFile.text())).substring(190, 886));
});

console.log(process.env.APIKEY); //environmnet var set through local machine. 'export APIKEY=SOMETHING'
app.listen(port, () => console.log(`Example app listening on port ${port}`));
