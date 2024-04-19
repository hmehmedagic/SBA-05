const express = require("express");
const router = express.Router();

const vegetables = require("../models/vegetables");

router
    .route("/")
    .get((req, res) => {
        res.render("VegetableIndex", { vegetables: vegetables });
    })
    .post((req, res) => {
        if (req.body.name && req.body.color && req.body.readyToEat) {
            const vegetable = {
                name: req.body.name,
                color: req.body.color,
                readyToEat: req.body.readyToEat === "true" ? true : false
            };

            vegetables.push(vegetable);
            res.json(vegetables[vegetables.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    });

router
    .route("/:name")
    .get((req, res, next) => {
        const vegetable = vegetables.find((v) => v.name == req.params.name);
        if (vegetable) {
            res.render("VegetableShow", {
                vegetable: vegetable
            });
        } else next();
    })
    .patch((req, res, next) => {
        const vegetable = vegetables.find((v, i) => {
            if (v.name == req.params.name) {
                for (const key in req.body) {
                    vegetables[i][key] = key === "readyToEat" ?
                        req.body[key] === "true" ? true : false :
                        req.body[key];
                }
                return true;
            }
        });

        if (vegetable) res.json(vegetable);
        else next();
    })
    .delete((req, res, next) => {
        const vegetable = vegetables.find((v, i) => {
            if (v.id == req.params.id) {
                vegetables.splice(i, 1);
                return true;
            }
        });

        if (vegetable) res.json(vegetable);
        else next();
    });

module.exports = router;