const express = require("express");
const router = express.Router();


const cheeses = require("../models/cheeses");

// ---------------------------------------------[Index =  GET ]*/
router
    .route("/")
    .get((req, res) => {
        // res.json(cheeses);
        res.render("cheeseIndex", { cheeses: cheeses });
    })
    .post((req, res) => {
        if (req.body.name && req.body.color && req.body.readyToEat) {
            const cheese = {
                // id: cheeses[cheeses.length - 1].id + 1,
                name: req.body.name,
                color: req.body.color,
                readyToEat: req.body.readyToEat === "true" ? true : false
            };

            cheeses.push(cheese);
            res.json(cheeses[cheeses.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    });

// ---------------------------------------------[Show =  GET ]
router
    .route("/:name")
    .get((req, res, next) => {
        const cheese = cheeses.find((c) => c.name == req.params.name);
        if (cheese) {
            res.render("cheeseshow", {
                cheese: cheese
            });
        } else next();
    })
    .patch((req, res, next) => {
        const cheese = cheeses.find((c, i) => {
            if (c.name == req.params.name) {
                for (const key in req.body) {
                    cheeses[i][key] = key === "readyToEat" ?
                        req.body[key] === "true" ? true : false :
                        req.body[key];
                }
                return true;
            }
        });

        if (cheese) res.json(cheese);
        else next();
    })
    .delete((req, res, next) => {
        const cheese = cheeses.find((c, i) => {
            if (c.name == req.params.name) {
                cheeses.splice(i, 1);
                return true;
            }
        });

        if (cheese) res.json(cheese);
        else next();
    });

module.exports = router;