/*
    Router - Routes our CRUD API reqs and sends res
*/

// Express
const express = require('express');

// Express router
const router = express.Router();

/* API ROUTES */

/*-- Category- ID - [Title, Date, Link(s), Scripture[Book, Chapter, Verse(s), Text], Comment]*/

/*
    Home - Get Categories
    Home - Post Note REQ[Category] Recored new Categories

    Category - Get Notes[ID, Title, Date]
    Category - Delete Note[ID]

    Note - Get Note based on ID and get all its contents
    Note - Post (whatever is listed that I can)
    Note - Update info[ID]
    Note - Delete info[ID]
*/

router.get('/', function (req, res) {
    /*Home - Get Categories*/
});

router.post('/', function (req, res) {
    /*Home - Post Note REQ[Category] Recored new Categories*/
});

router.get('/:category', function (req, res) {
    /*Category - Get Notes[ID, Title, Date]*/
});

router.delete('/:category/:id', function (req, res) {
    /*Category - Delete Note[ID]*/
});

router.get('/:category/:id', function (req, res) {
    /*Note - Get Note based on ID and get all its contents*/
});

router.post('/:category/:id', function (req, res) {
    /*Note - Post (whatever is listed that I can)*/
});

router.put('/:category/:id/:idInfo', function (req, res) {
    /*Note - Update info[ID]*/
});

router.delete('/:category/:id/:idInfo', function (req, res) {
    /*Note - Delete info[ID]*/
});


module.exports = router;
