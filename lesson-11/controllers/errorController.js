// errorController.js
"use strict";

const httpStatus = require("http-status-codes");

/**
 * Listing 11.2 (p. 168)
 * 에러 컨트롤러 추가
 */
exports.logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err)
}; // @TODO: 에러 처리를 위한 미들웨어 추가

/**
 * Listing 11.3 (p. 169)
 * 사용자 정의 메시지로 빠진 라우트 및 에러 대응
 */
exports.resNotFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    // res.send("404 | NOT FOUND");
    res.sendFile(`./public/${errorCode}.html`, {
        root: './'
    });
}; // @TODO: 404 상태 코드로 모든 에러 처리. 404.html 파일의 콘텐츠 전송

exports.resInternalError = (err, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    // res.send("500 | SERVER ERROR");
    res.sendFile(`./public/${errorCode}.html`, {
        root: './'
    });
}; // @TODO: 500 상태 코드로 모든 에러 처리