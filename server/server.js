const express = require("express");
const { request, response } = require("express");
const cors = require("cors");

const app = express();

// client on port 3000
var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));

// parse requests
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to webara CMS" });
});

// routes
require("./app/routes/product.routes.js")(app);

// set and listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});


