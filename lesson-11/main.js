// main.js
"use strict";

const expressEjsLayouts = require('express-ejs-layouts');

// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
express = require('express'),
layouts = require('express-ejs-layouts'),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
app = express();

// BEST 습관 : 2단계 앱 설정 (set함수, 그 다음에 use 함수)
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs")

app.use(layouts);
app.use(express.static("public"));

// Aaron의 습관 : GET 라우트 먼저 그다음에 POST
app.get("/", homeController.getHome);
app.get("/name/:myName", homeController.respondWithName);
app.get("/test", (req, res) => {
    res.sendFile("./public/test.html")
});

// BEST 습관 : 순서 때문에 errorController app.use()는 거의 마지막 (listen 전)
app.use(errorController.logErrors);
app.use(errorController.resNotFound); //404
app.use(errorController.resInternalError); //500

// BEST 습관 : 마지막 listen 함수
app.listen(app.get("port"), () => {
    console.log(`server at: http://localhost:${app.get("port")}`);
})