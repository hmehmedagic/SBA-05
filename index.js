const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
// ---------------------------[Require Stmnts]

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// ---------------------------[Middleware]

const fruits = require('./routes/fruits');
const vegetables = require('./routes/vegetables');
const cheeses = require('./routes/cheeses');
const error = require("./utilities/error");


// We use the body-parser middleware FIRST so that
// we have access to the parsed data within our routes.
// The parsed data will be located in "req.body".
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
    const time = new Date();

    console.log(
        `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
        console.log("Containing the data:");
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
});

// ---------------------------[Data]

// ---------------------------[Routes]--save

// Use our Routes
app.use("/fruits", fruits);
app.use("/vegetables", vegetables);
app.use("/cheeses", cheeses);

app.get("/", (req, res) => {
    // res.send("Work in progress!");
    res.render("Index");
});

// Custom 404 (not found) middleware.
// Since we place this last, it will only process
// if no other routes have already sent a response!
// We also don't need next(), since this is the
// last stop along the request-response cycle.
// 404 Middleware
app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
});

// Error-handling middleware.
// Any call to next() that includes an
// Error() will skip regular middleware and
// only be processed by error-handling middleware.
// This changes our error handling throughout the application,
// but allows us to change the processing of ALL errors
// at once in a single location, which is important for
// scalability and maintainability.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Listening on Port: 3000`);
});
// ---------------------------[Server]