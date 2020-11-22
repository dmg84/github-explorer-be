const express = require('express');
const router = express.Router();
const {routeWrapper} = require("../../utils/helper");
const {getAllCompanies, getRepositoriesFromCompany} = require("./gateway");

router.get('/', routeWrapper(async (req, res) => {
    console.log("GET /organizations - reached");
    res.send(await getAllCompanies());
}));

router.get('/:name/repositories', routeWrapper(async (req, res) => {
    console.log(`GET /organizations/${req.params.name}/repositories - reached`);
    res.send(await getRepositoriesFromCompany(req.params.name));
}));

module.exports = router;