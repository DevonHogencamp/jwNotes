/*
    Router - Routes our CRUD API reqs and sends res
*/

// Express
const express = require('express');

// Express router
const router = express.Router();

// BibleStudy Model
const BibleStudy = require('../models/BibleStudy');

// BibleStudy Model
const LifeMinistry = require('../models/LifeMinistry');

// BibleStudy Model
const Watchtower = require('../models/Watchtower');

/* API ROUTES */
router.post('/:category', function (req, res) {
    /*Home - Post Note REQ[Category] Recored new Categories*/
    if (req.params.category == "BibleStudy") {
        BibleStudy.create(req.body).then(function (bibleStudy) {
            res.send(bibleStudy._id);
        });
    }
    if (req.params.category == "LifeMinistry") {
        LifeMinistry.create(req.body).then(function (lifeMinistry) {
            res.send(lifeMinistry._id);
        });
    }
    if (req.params.category == "Watchtower") {
        Watchtower.create(req.body).then(function (watchtower) {
            res.send(watchtower._id);
        });
    }
});

router.get('/:category', function (req, res) {
    /*Category - Get Notes[ID, Title, Date]*/
    if (req.params.category == "BibleStudy") {
        BibleStudy.find({}, {
            _id: true,
            date: true
        }).then(function (bibleStudies) {
            res.send(bibleStudies);
        });
    }
    if (req.params.category == "LifeMinistry") {
        LifeMinistry.find({}, {
            _id: true,
            title: true,
            date: true
        }).then(function (lifeMinistries) {
            res.send(lifeMinistries);
        });
    }
    if (req.params.category == "Watchtower") {
        Watchtower.find({}, {
            _id: true,
            title: true,
            date: true
        }).then(function (watchtowers) {
            res.send(watchtowers);
        });
    }
});

router.delete('/:category/:id', function (req, res) {
    /*Category - Delete Note[ID]*/
    if (req.params.category == "BibleStudy") {
        BibleStudy.findByIdAndRemove({
            _id: req.params.id
        }).then(function () {
            res.send(req.params.id + " was succesfully deleted").status(200);
        });
    }
    if (req.params.category == "LifeMinistry") {
        LifeMinistry.findByIdAndRemove({
            _id: req.params.id
        }).then(function () {
            res.send(req.params.id + " was succesfully deleted").status(200);
        });
    }
    if (req.params.category == "Watchtower") {
        Watchtower.findByIdAndRemove({
            _id: req.params.id
        }).then(function () {
            res.send(req.params.id + " was succesfully deleted").status(200);
        });
    }
});

router.get('/:category/:id', function (req, res) {
    /*Note - Get Note based on ID and get all its contents*/
    if (req.params.category == "BibleStudy") {
        BibleStudy.findOne({
            _id: req.params.id
        }).then(function (bibleStudy) {
            res.send(bibleStudy);
        });
    }
    if (req.params.category == "LifeMinistry") {
        LifeMinistry.findOne({
            _id: req.params.id
        }).then(function (lifeMinistry) {
            res.send(lifeMinistry);
        });
    }
    if (req.params.category == "Watchtower") {
        Watchtower.findOne({
            _id: req.params.id
        }).then(function (watchtower) {
            res.send(watchtower);
        });
    }
});

router.put('/:category/:id', function (req, res) {
    /*Note - Post Update or Delete(whatever is listed that I can)*/
    if (req.params.category == "BibleStudy") {
        BibleStudy.findByIdAndUpdate({
            _id: req.params.id
        }, req.body).then(function () {
            BibleStudy.findOne({
                _id: req.params.id
            }).then(function (bibleStudy) {
                res.send(bibleStudy);
            });
        });
    }
    if (req.params.category == "LifeMinistry") {
        LifeMinistry.findByIdAndUpdate({
            _id: req.params.id
        }, req.body).then(function () {
            LifeMinistry.findOne({
                _id: req.params.id
            }).then(function (lifeMinistry) {
                res.send(lifeMinistry);
            });
        });
    }
    if (req.params.category == "Watchtower") {
        Watchtower.findByIdAndUpdate({
            _id: req.params.id
        }, req.body).then(function () {
            Watchtower.findOne({
                _id: req.params.id
            }).then(function (watchtower) {
                res.send(watchtower);
            });
        });
    }
});

module.exports = router;
