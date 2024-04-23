// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3
 */
exports.getHome = (req, res) => {
    res.render('index', {
        name : "PaRk",
        people: {
            usa: {
                einstein: "Albert Einstein",
                musk: "Elon Musk",
                jobs: "Steve Jobs"
            },
            korea : {
                psy: "박지상",
                kim: "김연아"
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
        }
    });
} // "/" index
// exports.getContact = (req, res) => {} // "/contact" GET method
// exports.postContact = (req, res) => {} // "/contact" POST method

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName; // 라우트의 매개변수 /name/:myName
    res.render('index', {
        name: paramsName,
    people: {
        usa: {
            einstein: "Albert Einstein",
            musk: "Elon Musk",
            jobs: "Steve Jobs"
        },
        korea : {
            psy: "박지상",
            kim: "김연아"
        },
        mexico: {
            jesus: "Jesus Alvarez"
        }
    } });
};