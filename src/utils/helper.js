const customError = (statusCode, statusMessage) => {
    return {statusCode, statusMessage}
};

const routeWrapper = (fn) => (req, res, next) => fn(req, res).catch(next);

module.exports = {customError, routeWrapper}