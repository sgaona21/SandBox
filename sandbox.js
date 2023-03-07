console.log("js linked")

const https = require("https");

function getProfile() {
// Connect to the API URL: https://teamtreehouse.com/profiles/csalgado.json
const request = https.get("https://teamtreehouse.com/profiles/csalgado.json", 
(response) => {
    console.dir(response.statusCode);
}
);
//Read the data:

// Parse the data: 

// Print the data:  
}

getProfile();




