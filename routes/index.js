const foodRouter = require("./foodRoute");
const lunchRouter = require("./lunchRoute");
const beveragesRouter = require("./beveragesRoute");
const dessertsRouter = require("./dessertsRoute");
const reservationRouter = require("./reservationRoute");

module.exports = (app) => {
    app.use("/api/foods", foodRouter);
    app.use("/api/lunch", lunchRouter);
    app.use("/api/beverages", beveragesRouter);
    app.use("/api/desserts", dessertsRouter);
    app.use("/api/reservation", reservationRouter);
}
