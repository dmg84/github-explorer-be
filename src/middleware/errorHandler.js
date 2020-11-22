function errorHandler(err, req, res, next) {
    console.error(`error": ${req.url}`, err);
    res.status(err.statusCode ? err.statusCode : 500).send(err.statusMessage ? err.statusMessage : 'Ups! Something went wrong!');
    res.end();
}

module.exports = {errorHandler}