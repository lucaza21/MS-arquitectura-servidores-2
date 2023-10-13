const express = require("express");
const app = express();

//import db-config
require("./config/db.config");


//allow body data
app.use(express.json());

//import router
const router = require("./config/router.config");
app.use(router);

//listen port
app.listen(8000, () =>{
    console.log("app running on http://localhost:8000");
})