const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const db = require("./models");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use("/api/", routes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`runing at http://localhost:${PORT}`);
    });
});