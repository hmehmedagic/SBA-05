const express = require("express");
const router = express.Router();
const legs = require("../models/legs");

// ---------------------------------------------[Index =  GET ]*/
router
    .route("/")
    .get((req, res) => {
        res.render("PartsIndex", { title: "Legs", items: legs, classification: "Leg" });
    })
    .post((req, res) => {
        if (req.body.name && req.body.classification && req.body.manufacturer && req.body.part_info && req.body.url) {
            let tempUrl = req.body.url;
            let pngIndex = tempUrl.indexOf(".png");
            let trimmedUrl = tempUrl.substring(0, pngIndex + 4);
            const leg = {
                name: req.body.name,
                classification: req.body.classification,
                manufacturer: req.body.manufacturer,
                part_info: req.body.part_info,
                url: req.body.url,
            };

            legs.push(leg);
            res.json(legs[legs.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    });

router
    .route("/:encodedName")
    .patch((req, res) => {
        const decodedName = decodeURIComponent(req.params.encodedName);
        const legIndex = legs.findIndex((l) => l.name === decodedName);
        if (legIndex !== -1) {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ error: "No fields to update" });
            }
            Object.assign(legs[legIndex], req.body);
            res.json(legs[legIndex]);
        } else {
            res.status(404).json({ error: "Leg not found" });
        }
    })
    .delete((req, res) => {
        const decodedName = decodeURIComponent(req.params.encodedName);
        const legIndex = legs.findIndex((l) => l.name === decodedName);
        if (legIndex !== -1) {
            const deletedLeg = legs.splice(legIndex, 1)[0];
            res.json({ message: "Leg deleted", deletedLeg });
        } else {
            res.status(404).json({ error: "Leg not found" });
        }
    });

module.exports = router;