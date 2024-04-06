// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    app = express()

app.set("port", process.env.PROCESS || port);
app.set("view engine", "ejs"); // package.json에 있음 ?

app.use(layouts); 

app.get('/name/:name', homeController.respondWithName2);

app.listen(app.get("port"), () => {
    console.log(`Express at : http://localhost:${app.get("port")}`);
});