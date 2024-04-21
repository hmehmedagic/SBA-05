const express = require("express");
const router = express.Router();
const cores = require("../models/cores");

// ---------------------------------------------[Index =  GET ]*/
router
    .route("/")
    .get((req, res) => {
        res.render("PartsIndex", { title: "Cores", items: cores, classification: "Core" });
    })
    .post((req, res) => {
        if (req.body.name && req.body.classification && req.body.manufacturer && req.body.part_info && req.body.url) {
            let tempUrl = req.body.url;
            let pngIndex = tempUrl.indexOf(".png");
            let trimmedUrl = tempUrl.substring(0, pngIndex + 4);
            const core = {
                name: req.body.name,
                classification: req.body.classification,
                manufacturer: req.body.manufacturer,
                part_info: req.body.part_info,
                url: req.body.url,
            };

            cores.push(core);
            res.json(cores[cores.length - 1]);
        } else res.json({ error: "Insufficient Data" });
    });

router
    .route("/:encodedName")
    .patch((req, res) => {
        const decodedName = decodeURIComponent(req.params.encodedName);
        const coreIndex = cores.findIndex((c) => c.name === decodedName);
        if (coreIndex !== -1) {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ error: "No fields to update" });
            }
            Object.assign(cores[coreIndex], req.body);
            res.json(cores[coreIndex]);
        } else {
            res.status(404).json({ error: "Core not found" });
        }
    })
    .delete((req, res) => {
        const decodedName = decodeURIComponent(req.params.encodedName);
        const coreIndex = cores.findIndex((c) => c.name === decodedName);
        if (coreIndex !== -1) {
            const deletedCore = cores.splice(coreIndex, 1)[0];
            res.json({ message: "Core deleted", deletedCore });
        } else {
            res.status(404).json({ error: "Core not found" });
        }
    });

module.exports = router;