// listing 9.3.js (p. 145)
"use strict";

const port = 3000,
  express = require("express"),
  app = express();

/* ========== app.use() ========== */

/**
 * Listing 9.4 (p. 147)
 * 요청 경로의 로깅을 위한 Express.js 미들웨어 함수
 */
app.use((req, res, next) => {
  // 미들웨어 함수의 정의
  console.log(`request to: ${req.url}`); // 콘솔 화면에 요청 경로를 로깅
  console.log(req.query);
  next(); // next 함수의 호출
});
/**
 * [주위] 코드가 종료됐음을 Express.js에 알리기 위해 함수 마지막 부분의 next
 * 함수의 호출은 필요하다. 이렇게 하지 않으면 요청은 hang 상태로 남아 버린다.
 * 미들웨어는 순차적으로 처리하기 때문에 next를 호출하지 않으면 흐름이 막혀
 * blocking 현상이 발생한다.
 */

/**
 * Listing 9.5 (p. 149)
 * 요청 본문으로부터 포스팅된 데이터 캡처
 */
app.use(
  express.urlencoded({
    extended: false,
  })
); // Express.js에 body-parser를 이용해 URL-encoded 데이터를 파싱하도록 요청
app.use(express.json());

/* ========== app.get() ========== */

app
  .get("/", (req, res) => {
    res.send("This is the HOME page.");
    console.log(req.query);
  })
  .get("/contact", (req, res) => {
    res.send("This is the CONTACT page.");
  })
  .get("/about", (req, res) => {
    res.send("This is the ABOUT page.");
  })

/**
 * Listing 9.2 (p. 145)
 * 경로 매개변수로 응답하기
 */
app.get("/items/:vegetable", (req, res) => {
  // URL 매개변수를 얻기 위한 라우트 추가
  let veg = req.params.vegetable.toUpperCase();
  res.send(`This is the ${veg} page.`);
});

/* ========== app.post() ========== */

/**
 * Listing 9.1 (p. 144)
 * Express.js post 메소드를 이용한 요청 처리
 */
app.post("/contact", (req, res) => {
  res.send("CONTACT info submitted successfully.");
});

app.post("/", (req, res) => {
  // 홈페이지를 위한 새로운 라우트 생성
  console.log(req.body); // 요청 본문의 로깅
  console.log(req.query);
  res.send("POST successful!");
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});