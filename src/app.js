require("custom-env").env(process.env.APP_ENV);
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const nocache = require('nocache');
const cors = require('cors');
const {customError} = require("./utils/helper");
const {errorHandler} = require("./middleware/errorHandler");
const organizationRoutes = require('./modules/organization/routes');
const repositoriesRoutes = require('./modules/repositories/routes');

const port = 8081;
const corsOptions = {
    origin: process.env.CLIENT_URL
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false, parameterLimit: 50000}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(nocache());
app.use("/api/v1/", router);
router.use("/organizations", organizationRoutes);
router.use("/repositories", repositoriesRoutes);

router.get("/", (req, res, next) => {
    console.log("GET / - reached");
    res.send('Welcome to GitHub Explorer API');
});

router.all("*", (req, res, next) => {
    throw customError(404, 'Not found!')
});

app.use(errorHandler);

app.listen(port, () => console.log(`App listening on port ${port}!`));