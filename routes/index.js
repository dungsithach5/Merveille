const dinnerRouter = require("./dinnerRoute");
const lunchRouter = require("./lunchRoute");
const wineRouter = require("./wineRoute");
const dessertsRouter = require("./dessertsRoute");
const reservationRouter = require("./reservationRoute");

module.exports = (app) => {
    app.use("/api/dinners", dinnerRouter);
    app.use("/api/lunch", lunchRouter);
    app.use("/api/wines", wineRouter);
    app.use("/api/desserts", dessertsRouter);
    app.use("/api/reservation", reservationRouter);
}
