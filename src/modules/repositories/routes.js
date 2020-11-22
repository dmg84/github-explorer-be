const express = require('express');
const router = express.Router();
const {trackRepository, getAllTrackedRepositories} = require("./service");
const {routeWrapper} = require("../../utils/helper");

router.get('/', routeWrapper(async (req, res) => {
    console.log("GET /repositories - reached");
    res.send(await getAllTrackedRepositories());
}));

router.post('/', routeWrapper(async (req, res) => {
    console.log(`POST /repositories - reached`);
    const {repository} = req.body;
    res.send(await trackRepository(repository));
}));

module.exports = router;