const restifyRouter = require("restify-router").Router;
const httpStatus = require("http-status");

const router = new restifyRouter();

router.get("/api/values", (req, res, next) => {
    res.send(httpStatus.OK, [1, 2, 3]);

    next();
});

router.post("/api/values", (req, res, next) => {
    res.send(httpStatus.CREATED, req.body);
    next();
});

router.put("/api/values", (req, res, next) => {
    res.send(httpStatus.NO_CONTENT, req.body);
    next();
});

router.del("/api/values", (req, res, next) => {
    res.send(httpStatus.NO_CONTENT);
    next();
});

module.exports = {
    "router": router
};