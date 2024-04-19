const express = require("express");
const router = express.Router();


const fruits = require("../models/fruits");

/*app.get("/fruits", (req, res) => {
    res.render("Index", { fruits: fruits });
});

// ---------------------------------------------[Index =  GET ]*/

router
    .route("/")
    .get((req, res) => {
        // res.json(fruits);
        res.render("FruitIndex", { fruits: fruits });
    })
    .post((req, res) => {
        if (req.body.name && req.body.color && req.body.readyToEat) {
            const fruit = {
                // id: fruits[fruits.length - 1].id + 1,
                name: req.body.name,
                color: req.body.color,
                readyToEat: req.body.readyToEat === "true" ? true : false
            };

            fruits.push(fruit);
            res.json(fruits[fruits.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    });

router
    .route("/:name")
    // .route("/fruits/:name")
    .get((req, res, next) => {
        const fruit = fruits.find((f) => f.name == req.params.name);
        // if (fruit) res.json(fruit);
        if (fruit) {
            res.render("FruitShow", {
                fruit: fruit
            });
        } else next();
    })
    .patch((req, res, next) => {
        const fruit = fruits.find((f, i) => {
            if (f.name == req.params.name) {
                for (const key in req.body) {
                    //fruits[i][key] = req.body[key];
                    fruits[i][key] = key === "readyToEat" ?
                        req.body[key] === "true" ? true : false :
                        req.body[key];
                }
                return true;
            }
        });

        if (fruit) res.json(fruit);
        else next();
    })
    .delete((req, res, next) => {
        const fruit = fruits.find((f, i) => {
            if (f.name == req.params.name) {
                fruits.splice(i, 1);
                return true;
            }
        });

        if (fruit) res.json(fruit);
        else next();
    });

/*app.get("/fruits/:indexOfFruitsArray", (req, res) => {
       res.render("Show", {
           fruit: fruits[req.params.indexOfFruitsArray]
       });
   });
   */
// ---------------------------------------------[Show =  GET ]

module.exports = router;