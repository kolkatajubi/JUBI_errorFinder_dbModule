
var db = require("./db");
//var cache = require("./cache");

// Dependencies
const express = require("express");
const app = express();

const bodyparser = require("body-parser");

// Defining Path for URL Re-routes
var path = require("path");

// Body Parser will parse the HTML and return it in non-encoded format
app.use(
    bodyparser.urlencoded({
        extended: false
    })
);

// Body Parser will parse the HTML and return it in JSON format
app.use(bodyparser.json());

// Defining IP-Address and PORT number
const ipaddress = "127.0.0.1";
const port = 3125;

// Listening to the IP-Address:PORT number
app.listen(port, ipaddress, () =>
    console.log(`Listening at ${ipaddress}:${port}...`)
);




app.post("/readByKeyword", async (req, res) => {
    res.json(await db.readByErrorKeyword(req.body.error_keyword));
});

app.post("/readByErrorCode", async (req, res) => {
    res.json(await db.readByErrorCode(req.body.error_code));
});

app.post("/createLog", async (req, res) => {
    console.log("CREATE")
    try {
        let data = await db.createErrorLog(req.body);
        console.log(JSON.stringify(data))
        res.json(data);
    } catch (e) {
        console.log(e)
        res.json({ error: e.toString() });
    }

});