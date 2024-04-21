const express = require("express");
const router = express.Router();
const heads = require("../models/heads");

// ---------------------------------------------[Index =  GET ]*/
router
    .route("/")
    .get((req, res) => {
        // res.json(heads);
        res.render("PartsIndex", { title: "Heads", items: heads, classification: "Head" });
    })
    .post((req, res) => {
        if (req.body.name && req.body.classification && req.body.manufacturer && req.body.part_info && req.body.url) {
            let tempUrl = req.body.url;
            let pngIndex = tempUrl.indexOf(".png");
            let trimmedUrl = tempUrl.substring(0, pngIndex + 4);

            const head = {
                name: req.body.name,
                classification: req.body.classification,
                manufacturer: req.body.manufacturer,
                part_info: req.body.part_info,
                url: trimmedUrl,
            };

            heads.push(head);
            res.json(heads[heads.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    });
router
    .route("/:encodedName")
    .patch((req, res) => {
        const decodedName = decodeURIComponent(req.params.encodedName);
        const headIndex = heads.findIndex((h) => h.name === decodedName);
        if (headIndex !== -1) {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ error: "No fields to update" });
            }
            Object.assign(heads[headIndex], req.body);
            res.json(heads[headIndex]);
        } else {
            res.status(404).json({ error: "Head not found" });
        }
    })
    .delete((req, res) => {
        const decodedName = decodeURIComponent(req.params.encodedName);
        const headIndex = heads.findIndex((h) => h.name === decodedName);
        if (headIndex !== -1) {
            const deletedHead = heads.splice(headIndex, 1)[0];
            res.json({ message: "Head deleted", deletedHead });
        } else {
            res.status(404).json({ error: "Head not found" });
        }
    });

module.exports = router;